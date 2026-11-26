import "server-only";
import { createHash } from "node:crypto";

interface BucketEntry {
  timestamps: number[];
  lastSeen: number;
}

const WINDOW_MS = 10 * 60 * 1000; // Ventana deslizante de 10 minutos
const MAX_REQUESTS_PER_WINDOW = 3; // Máximo 3 envíos cada 10 minutos por origen
const MAX_BUCKETS = 2000; // Tope de memoria LRU contra agotamiento de RAM

const rateLimitStore = new Map<string, BucketEntry>();

function hashIdentifier(rawIp: string): string {
  return createHash("sha256")
    .update(`portfolio-soc-rl:${rawIp}`)
    .digest("hex")
    .slice(0, 32);
}

function pruneExpiredEntries(now: number) {
  if (rateLimitStore.size < MAX_BUCKETS) {
    return;
  }

  for (const [key, entry] of rateLimitStore.entries()) {
    if (now - entry.lastSeen > WINDOW_MS) {
      rateLimitStore.delete(key);
    }
  }

  // Si aún supera el límite, desaloja la entrada más antigua (FIFO/LRU)
  if (rateLimitStore.size >= MAX_BUCKETS) {
    const oldestKey = rateLimitStore.keys().next().value;
    if (oldestKey) {
      rateLimitStore.delete(oldestKey);
    }
  }
}

export function extractClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  return "127.0.0.1";
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
}

export function checkContactRateLimit(request: Request): RateLimitResult {
  const now = Date.now();
  pruneExpiredEntries(now);

  const clientKey = hashIdentifier(extractClientIp(request));
  const existing = rateLimitStore.get(clientKey);

  const activeTimestamps = (existing?.timestamps ?? []).filter(
    (ts) => now - ts < WINDOW_MS
  );

  if (activeTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldestActive = activeTimestamps[0] ?? now;
    const retryAfterMs = Math.max(1000, WINDOW_MS - (now - oldestActive));

    rateLimitStore.set(clientKey, {
      timestamps: activeTimestamps,
      lastSeen: now,
    });

    return {
      allowed: false,
      limit: MAX_REQUESTS_PER_WINDOW,
      remaining: 0,
      retryAfterSeconds: Math.ceil(retryAfterMs / 1000),
    };
  }

  activeTimestamps.push(now);
  rateLimitStore.set(clientKey, {
    timestamps: activeTimestamps,
    lastSeen: now,
  });

  return {
    allowed: true,
    limit: MAX_REQUESTS_PER_WINDOW,
    remaining: Math.max(0, MAX_REQUESTS_PER_WINDOW - activeTimestamps.length),
    retryAfterSeconds: 0,
  };
}

