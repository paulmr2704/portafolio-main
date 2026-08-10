import { neon } from '@neondatabase/serverless';

// Neon Postgres connection helper
export function getDb() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    // Return null if DATABASE_URL is not set yet, so app handles graceful fallback
    return null;
  }
  return neon(connectionString);
}
