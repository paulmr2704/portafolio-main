import { NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validations/contact.schema";
import { saveContactMessage } from "@/server/dal/contact.dal";
import { checkContactRateLimit } from "@/server/security/rate-limit";
import { validateJsonPostRequest } from "@/server/security/request-guard";
import { verifyTurnstileToken } from "@/server/security/turnstile";

const MIN_HUMAN_FILL_MS = 1200;

export async function POST(request: Request) {
  const baseHeaders = {
    "Cache-Control": "no-store, max-age=0",
  };

  // 1. Verificación perimetral: Origin, Sec-Fetch-Site, Content-Type y límite de 8 KB
  const guard = await validateJsonPostRequest(request);
  if (!guard.ok) {
    return NextResponse.json(
      { success: false, error: guard.error },
      { status: guard.status, headers: baseHeaders }
    );
  }

  // 2. Rate Limiting real en servidor por IP hasheada (Ventana deslizante)
  const rateLimit = checkContactRateLimit(request);
  const rateHeaders = {
    ...baseHeaders,
    "X-RateLimit-Limit": String(rateLimit.limit),
    "X-RateLimit-Remaining": String(rateLimit.remaining),
  };

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        success: false,
        error: `Límite de seguridad alcanzado. Por favor intenta nuevamente en ${Math.ceil(
          rateLimit.retryAfterSeconds / 60
        )} min.`,
      },
      {
        status: 429,
        headers: {
          ...rateHeaders,
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      }
    );
  }

  // 3. Validación estricta de esquema y sanitización con Zod (.strict())
  const parsed = contactSubmissionSchema.safeParse(guard.rawBody);
  if (!parsed.success) {
    const firstIssue =
      parsed.error.issues[0]?.message || "Verifica los campos del formulario.";
    return NextResponse.json(
      { success: false, error: firstIssue },
      { status: 400, headers: rateHeaders }
    );
  }

  const { name, email, message, website, startedAt, turnstileToken } = parsed.data;

  // 4. Defensa Anti-Bot silenciosa (Honeypot + Tiempo mínimo humano)
  const filledTooFast =
    typeof startedAt === "number" && Date.now() - startedAt < MIN_HUMAN_FILL_MS;

  if (website.length > 0 || filledTooFast) {
    // Respuesta neutra para no dar pistas de calibración a bots automatizados
    return NextResponse.json(
      {
        success: true,
        message: "Mensaje recibido correctamente. Me pondré en contacto pronto.",
      },
      { status: 200, headers: rateHeaders }
    );
  }

  // 5. Verificación de Cloudflare Turnstile (si está configurado)
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : null;
  const turnstileCheck = await verifyTurnstileToken(turnstileToken, clientIp);
  if (!turnstileCheck.success) {
    return NextResponse.json(
      {
        success: false,
        error: turnstileCheck.error || "Validación de captcha fallida.",
      },
      { status: 403, headers: rateHeaders }
    );
  }

  // 6. Persistencia mediante Data Access Layer ('server-only')
  const saveResult = await saveContactMessage({ name, email, message });

  if (!saveResult.ok) {
    const status = saveResult.code === "DB_UNAVAILABLE" ? 503 : 500;
    const errorMessage =
      saveResult.code === "DB_UNAVAILABLE"
        ? "El servicio de mensajería está temporalmente en mantenimiento. Escríbeme directamente por correo o LinkedIn."
        : "No se pudo registrar el mensaje en este momento. Intenta nuevamente o contáctame por correo directo.";

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status, headers: rateHeaders }
    );
  }

  return NextResponse.json(
    {
      success: true,
      message:
        "¡Mensaje enviado con éxito! Gracias por escribir, te responderé a la brevedad.",
    },
    { status: 201, headers: rateHeaders }
  );
}
