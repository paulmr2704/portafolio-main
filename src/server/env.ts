import "server-only";

export interface ServerEnv {
  nodeEnv: "development" | "production" | "test";
  databaseUrl: string | null;
  siteUrl: string;
}

export function getServerEnv(): ServerEnv {
  const rawNodeEnv = process.env.NODE_ENV;
  const nodeEnv =
    rawNodeEnv === "production" || rawNodeEnv === "test"
      ? rawNodeEnv
      : "development";

  const rawDbUrl = process.env.DATABASE_URL?.trim();
  const databaseUrl =
    rawDbUrl && (rawDbUrl.startsWith("postgres://") || rawDbUrl.startsWith("postgresql://"))
      ? rawDbUrl
      : null;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://paulmeza.vercel.app";

  return {
    nodeEnv,
    databaseUrl,
    siteUrl,
  };
}

