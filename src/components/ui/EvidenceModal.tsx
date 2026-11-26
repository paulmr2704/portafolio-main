"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import type { ProjectEvidence } from "@/types/portfolio";

interface EvidenceModalProps {
  projectTitle: string;
  evidences: ProjectEvidence[];
  buttonLabel?: string;
}

export default function EvidenceModal({
  projectTitle,
  evidences,
  buttonLabel,
}: EvidenceModalProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % evidences.length);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + evidences.length) % evidences.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, evidences.length]);

  if (evidences.length === 0) return null;

  const currentEvidence = evidences[activeIndex] ?? evidences[0];

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveIndex(0);
          setOpen(true);
        }}
        className="sketch-btn-yellow inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-extrabold cursor-pointer"
      >
        <Eye className="w-4 h-4 text-[#1E242B]" />
        <span>{buttonLabel || `Evidencias (${evidences.length})`}</span>
      </button>

      <AnimatePresence>
        {open && currentEvidence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Evidencias técnicas de ${projectTitle}`}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1E242B]/75 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-[#1E242B] shadow-[8px_8px_0px_#1E242B] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col"
            >
              {/* Browser Window Top Bar [o o o] */}
              <div className="px-5 py-3.5 border-b-2 border-[#1E242B] flex items-center justify-between gap-4 bg-[#E06A4E] text-white">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-[#84BA77] border border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-white border border-[#1E242B]" />
                  </div>
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-white/90 block">
                      VISTA {activeIndex + 1} DE {evidences.length}
                    </span>
                    <h3 className="font-extrabold text-white text-sm sm:text-base truncate">
                      {projectTitle}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar visor de evidencias"
                  className="p-1.5 rounded-lg bg-white text-[#1E242B] border-2 border-[#1E242B] hover:bg-[#F6CE3E] transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Selector Tabs */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-[#1E242B] bg-[#F4F5F7] overflow-x-auto">
                {evidences.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border-2 ${
                      idx === activeIndex
                        ? "bg-[#F6CE3E] text-[#1E242B] border-[#1E242B] shadow-[2px_2px_0px_#1E242B]"
                        : "bg-white text-[#3A434E] border-[#1E242B]/30 hover:border-[#1E242B]"
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>

              {/* Body */}
              <div className="p-4 sm:p-6 overflow-auto flex-1 flex flex-col items-center justify-center bg-[#F4F5F7] bg-studio-grid">
                <div className="text-center mb-3 max-w-2xl">
                  <p className="text-sm font-extrabold text-[#1E242B]">
                    {currentEvidence.title}
                  </p>
                  <p className="text-xs text-[#3A434E] font-medium mt-0.5">
                    {currentEvidence.caption}
                  </p>
                </div>

                <div className="relative rounded-xl overflow-hidden border-2 border-[#1E242B] shadow-[4px_4px_0px_#1E242B] bg-white max-h-[60vh] flex items-center justify-center">
                  <Image
                    src={currentEvidence.src}
                    alt={currentEvidence.title}
                    width={currentEvidence.width}
                    height={currentEvidence.height}
                    className="max-h-[60vh] w-auto object-contain"
                  />
                </div>
              </div>

              {/* Footer Controls */}
              <div className="px-5 py-3 border-t-2 border-[#1E242B] bg-white flex items-center justify-between text-xs text-[#3A434E]">
                <span className="hidden sm:inline font-sketch text-sm text-[#1E242B]">
                  Tip: Usa las flechas ← → o ESC para navegar
                </span>
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        (prev) => (prev - 1 + evidences.length) % evidences.length
                      )
                    }
                    className="sketch-btn-white inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Anterior
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((prev) => (prev + 1) % evidences.length)
                    }
                    className="sketch-btn-yellow inline-flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold cursor-pointer"
                  >
                    Siguiente <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
