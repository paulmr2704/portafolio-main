"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, FileCheck2, X } from "lucide-react";

interface PdfPreviewModalProps {
  title: string;
  issuer?: string;
  pdfUrl: string;
  buttonLabel?: string;
  variant?: "white" | "yellow";
}

export default function PdfPreviewModal({
  title,
  issuer,
  pdfUrl,
  buttonLabel = "Ver Certificado PDF",
  variant = "white",
}: PdfPreviewModalProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const btnClasses =
    variant === "yellow" ? "sketch-btn-yellow" : "sketch-btn-white";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${btnClasses} inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs font-extrabold cursor-pointer`}
      >
        <FileCheck2 className="w-4 h-4 text-[#E06A4E] shrink-0" />
        <span>{buttonLabel}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Certificado PDF: ${title}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1E242B]/75 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-[#1E242B] shadow-[8px_8px_0px_#1E242B] rounded-2xl max-w-5xl w-full h-[88vh] overflow-hidden flex flex-col"
            >
              {/* Browser Window Top Bar [o o o] */}
              <div className="px-5 py-3.5 border-b-2 border-[#1E242B] flex items-center justify-between gap-4 bg-[#E06A4E] text-white shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="flex items-center gap-1.5 shrink-0"
                    aria-hidden="true"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-[#84BA77] border-2 border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
                  </div>
                  <div className="min-w-0">
                    {issuer && (
                      <span className="font-mono text-[11px] uppercase tracking-wider text-white/90 block truncate">
                        {issuer}
                      </span>
                    )}
                    <h3 className="font-extrabold text-white text-sm sm:text-base truncate">
                      {title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-btn-yellow hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold"
                  >
                    <span>Abrir en pestaña</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar visor PDF"
                    className="p-1.5 rounded-lg bg-white text-[#1E242B] border-2 border-[#1E242B] hover:bg-[#F6CE3E] transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="flex-1 bg-[#EAECEF] p-2 sm:p-3 overflow-hidden">
                <iframe
                  src={`${pdfUrl}#view=FitH`}
                  title={title}
                  className="w-full h-full rounded-xl border-2 border-[#1E242B] bg-white"
                />
              </div>

              {/* Mobile Footer Fallback */}
              <div className="sm:hidden px-4 py-2.5 border-t-2 border-[#1E242B] bg-white flex justify-end">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn-yellow inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold w-full justify-center"
                >
                  <span>Abrir / Descargar PDF Completo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

