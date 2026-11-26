"use client";

import { useEffect } from "react";
import { SITE_CONFIG } from "@/config/site";

export default function SocConsoleBanner() {
  useEffect(() => {
    const banner = [
      "%c[SOC ARCHITECTURE TELEMETRY · ZERO TRUST APPLIED]",
      "------------------------------------------------------------",
      `Analyst     : ${SITE_CONFIG.name} (${SITE_CONFIG.role})`,
      "Framework   : Next.js 16 (Server-First RSC) + Neon PostgreSQL",
      "Controls    : CSP · HSTS · Origin Guard · HTTP 429 Rate Limit · Zod Strict · DAL server-only",
      "Disclosure  : /.well-known/security.txt (RFC 9116) | AI Profile: /llms.txt",
      `Contact     : ${SITE_CONFIG.email} | Direct: ${SITE_CONFIG.directHandle}`,
      "------------------------------------------------------------",
    ].join("\n");

    console.info(
      banner,
      "color: #E06A4E; font-weight: 700; font-family: ui-monospace, monospace;"
    );
  }, []);

  return null;
}
