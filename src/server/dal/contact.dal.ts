import "server-only";
import { getNeonClient } from "@/server/db/client";
import { getServerEnv } from "@/server/env";
import type { ContactPersistedDTO } from "@/lib/validations/contact.schema";

export type SaveContactResult =
  | { ok: true; persisted: boolean }
  | { ok: false; code: "DB_UNAVAILABLE" | "DB_QUERY_ERROR" };

/**
 * Data Access Layer (DAL) para mensajes de contacto.
 * - Aislada con `server-only`.
 * - Sin ejecución de DDL (`CREATE TABLE`) en caliente por petición.
 * - Consultas estrictamente parametrizadas contra inyección SQL.
 */
export async function saveContactMessage(
  dto: ContactPersistedDTO
): Promise<SaveContactResult> {
  const sql = getNeonClient();
  const { nodeEnv } = getServerEnv();

  if (!sql) {
    if (nodeEnv === "production") {
      console.error("[SEC-DAL] DATABASE_URL ausente o inválida en producción.");
      return { ok: false, code: "DB_UNAVAILABLE" };
    }

    console.warn(
      "[SEC-DAL][DEV] DATABASE_URL no configurada. Mensaje validado en modo local sin persistencia."
    );
    return { ok: true, persisted: false };
  }

  try {
    await sql`
      INSERT INTO contact_messages (name, email, message)
      VALUES (${dto.name}, ${dto.email}, ${dto.message});
    `;

    return { ok: true, persisted: true };
  } catch (error) {
    console.error("[SEC-DAL] Error al insertar mensaje en Neon PostgreSQL:", error);
    return { ok: false, code: "DB_QUERY_ERROR" };
  }
}

