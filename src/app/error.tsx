"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(
      "[APP-BOUNDARY] Excepción controlada en cliente:",
      error.digest || error.message
    );
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="sketch-card max-w-lg w-full p-8 sm:p-10 bg-white text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-[#FEE2E2] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] flex items-center justify-center mx-auto text-[#E06A4E]">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#E06A4E] block">
          Excepción Controlada
        </span>
        <h1 className="text-2xl font-extrabold text-[#1E242B]">
          Ocurrió una interrupción inesperada
        </h1>
        <p className="text-sm text-[#3A434E] font-medium leading-relaxed">
          Por seguridad no se exponen trazas internas en la interfaz. Puedes
          reintentar cargar la vista de forma segura.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="sketch-btn-coral inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Reintentar carga
        </button>
      </div>
    </main>
  );
}
