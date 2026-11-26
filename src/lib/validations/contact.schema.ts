import { z } from "zod";

const stripControlChars = (value: string) =>
  value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();

export const contactSubmissionSchema = z
  .object({
    name: z
      .string()
      .transform(stripControlChars)
      .pipe(
        z
          .string()
          .min(2, "Ingresa tu nombre (mínimo 2 caracteres).")
          .max(100, "El nombre no puede superar los 100 caracteres.")
      ),
    email: z
      .string()
      .transform((val) => stripControlChars(val).toLowerCase())
      .pipe(
        z
          .string()
          .max(150, "El correo no puede superar los 150 caracteres.")
          .email("Ingresa un correo electrónico válido.")
      ),
    message: z
      .string()
      .transform(stripControlChars)
      .pipe(
        z
          .string()
          .min(10, "El mensaje debe contener al menos 10 caracteres.")
          .max(2000, "El mensaje no puede superar los 2000 caracteres.")
      ),
    // Campo Honeypot invisible (debe permanecer vacío para usuarios humanos)
    website: z.string().max(200).optional().default(""),
    // Marca temporal de renderizado del formulario para detectar envíos instantáneos automatizados
    startedAt: z.number().int().positive().optional(),
    // Token de verificación de Cloudflare Turnstile
    turnstileToken: z.string().max(2048).optional(),
  })
  .strict();

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

export interface ContactPersistedDTO {
  name: string;
  email: string;
  message: string;
}

