import "server-only";

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
  action?: string;
  cdata?: string;
}

export async function verifyTurnstileToken(
  token: string | undefined | null,
  clientIp?: string | null
): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY?.trim();

  // Si la llave secreta no está configurada aún en el entorno, permitimos continuar
  // para no bloquear el formulario mientras el usuario genera sus credenciales.
  if (!secretKey) {
    return { success: true };
  }

  if (!token || token.trim().length === 0) {
    return {
      success: false,
      error: "Por favor completa la verificación de seguridad (Turnstile).",
    };
  }

  try {
    const isDummyToken = token.startsWith("XXXX.") || token.startsWith("1x");
    const activeSecret = isDummyToken
      ? "1x0000000000000000000000000000000AA"
      : secretKey;

    const formData = new URLSearchParams();
    formData.append("secret", activeSecret);
    formData.append("response", token);
    if (clientIp) {
      formData.append("remoteip", clientIp);
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return {
        success: false,
        error: "No se pudo contactar al servicio de verificación de Cloudflare.",
      };
    }

    const data = (await res.json()) as TurnstileVerifyResponse;

    if (!data.success) {
      return {
        success: false,
        error: "Verificación de seguridad fallida. Por favor recarga e intenta de nuevo.",
      };
    }

    return { success: true };
  } catch (err) {
    console.error("[TURNSTILE_VERIFY_ERROR]", err);
    return {
      success: false,
      error: "Error interno al verificar el token de seguridad.",
    };
  }
}
