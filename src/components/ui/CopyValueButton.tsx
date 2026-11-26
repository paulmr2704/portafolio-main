"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyValueButtonProps {
  value: string;
  label?: string;
  copiedLabel?: string;
  ariaLabel: string;
}

export default function CopyValueButton({
  value,
  label = "Copiar",
  copiedLabel = "¡Copiado!",
  ariaLabel,
}: CopyValueButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback silencioso
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold border-2 border-[#1E242B] transition-all cursor-pointer shrink-0 ${
        copied
          ? "bg-[#84BA77] text-[#1E242B] shadow-[2px_2px_0px_#1E242B]"
          : "bg-[#F6CE3E] text-[#1E242B] shadow-[2px_2px_0px_#1E242B] hover:bg-[#f3c41e]"
      }`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5" />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
