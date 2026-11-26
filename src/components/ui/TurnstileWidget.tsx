"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  siteKey?: string;
  theme?: "light" | "dark" | "auto";
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onTurnstileLoaded?: () => void;
  }
}

export default function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAAGT13yP9ckHiUEAm",
  theme = "light",
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [activeKey, setActiveKey] = useState(siteKey);

  useEffect(() => {
    // Si ya existe en window el objeto turnstile y el script cargó
    if (typeof window !== "undefined" && window.turnstile && containerRef.current) {
      if (!widgetIdRef.current) {
        try {
          const id = window.turnstile.render(containerRef.current, {
            sitekey: activeKey,
            theme,
            callback: (token: string) => {
              onVerify(token);
            },
            "expired-callback": () => {
              onExpire?.();
            },
            "error-callback": () => {
              // Si falla por dominio local en localhost (error 400020), usamos la clave oficial de prueba
              if (
                typeof window !== "undefined" &&
                (window.location.hostname === "localhost" ||
                  window.location.hostname === "127.0.0.1") &&
                activeKey !== "1x00000000000000000000AA"
              ) {
                if (widgetIdRef.current && window.turnstile) {
                  window.turnstile.remove(widgetIdRef.current);
                  widgetIdRef.current = null;
                }
                setActiveKey("1x00000000000000000000AA");
                return;
              }
              onError?.();
            },
          });
          widgetIdRef.current = id;
        } catch {
          // Ignorar render repetido
        }
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Widget ya limpiado
        }
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, activeKey, theme, onVerify, onExpire, onError]);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
  };

  return (
    <div className="my-2 flex flex-col items-start min-h-[65px] justify-center">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
      <div ref={containerRef} className="rounded-xl overflow-hidden" />
    </div>
  );
}
