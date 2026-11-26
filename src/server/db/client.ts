import "server-only";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { getServerEnv } from "@/server/env";

let cachedSqlClient: NeonQueryFunction<false, false> | null = null;

export function getNeonClient(): NeonQueryFunction<false, false> | null {
  const { databaseUrl } = getServerEnv();
  if (!databaseUrl) {
    return null;
  }

  if (!cachedSqlClient) {
    cachedSqlClient = neon(databaseUrl);
  }

  return cachedSqlClient;
}

