import "server-only";

const MAX_PAYLOAD_BYTES = 8 * 1024; // 8 KB máximo permitido

export type GuardValidationResult =
  | { ok: true; rawBody: unknown }
  | { ok: false; status: number; error: string };

/**
 * Guardia perimetral de solicitudes POST JSON:
 * 1. Verifica Origin === Host (mitigación CSRF / Cross-Origin POST).
 * 2. Exige Content-Type: application/json.
 * 3. Limita el tamaño máximo de payload a 8 KB antes de parsear.
 */
export async function validateJsonPostRequest(
  request: Request
): Promise<GuardValidationResult> {
  const origin = request.headers.get("origin");
  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host");

  if (origin && host) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== host) {
        return {
          ok: false,
          status: 403,
          error: "Origen de solicitud no autorizado por política Zero Trust.",
        };
      }
    } catch {
      return {
        ok: false,
        status: 403,
        error: "Cabecera Origin malformada.",
      };
    }
  }

  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite === "cross-site") {
    return {
      ok: false,
      status: 403,
      error: "Solicitudes cross-site bloqueadas.",
    };
  }

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return {
      ok: false,
      status: 415,
      error: "Tipo de contenido no soportado. Se requiere application/json.",
    };
  }

  const declaredLength = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_PAYLOAD_BYTES) {
    return {
      ok: false,
      status: 413,
      error: "El tamaño del mensaje excede el límite de seguridad permitido.",
    };
  }

  let rawText: string;
  try {
    rawText = await request.text();
  } catch {
    return {
      ok: false,
      status: 400,
      error: "No fue posible leer el cuerpo de la solicitud.",
    };
  }

  if (Buffer.byteLength(rawText, "utf8") > MAX_PAYLOAD_BYTES) {
    return {
      ok: false,
      status: 413,
      error: "El tamaño del mensaje excede el límite de seguridad permitido.",
    };
  }

  try {
    const parsed = JSON.parse(rawText) as unknown;
    return { ok: true, rawBody: parsed };
  } catch {
    return {
      ok: false,
      status: 400,
      error: "El cuerpo JSON enviado no tiene un formato válido.",
    };
  }
}

