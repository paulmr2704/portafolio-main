"use client";

import { useRef, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  LineChart,
  Lock,
  Network,
  Palette,
  Server,
  ShieldCheck,
} from "lucide-react";
import PdfPreviewModal from "@/components/ui/PdfPreviewModal";
import type { AcademyTrack, AcademyTrackId } from "@/types/portfolio";

const TRACK_ICONS: Record<AcademyTrackId, typeof ShieldCheck> = {
  "g-cyber": ShieldCheck,
  "g-analytics": LineChart,
  "g-ux": Palette,
  "g-it": Server,
  cisco: Network,
};

export default function AcademyExplorer({ tracks }: { tracks: AcademyTrack[] }) {
  const [activeTrackId, setActiveTrackId] = useState<AcademyTrackId>(
    tracks[0]?.id ?? "g-cyber"
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const currentTrack =
    tracks.find((track) => track.id === activeTrackId) ?? tracks[0];

  if (!currentTrack) return null;

  const handleTrackSelect = (id: AcademyTrackId) => {
    setActiveTrackId(id);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollByOffset = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const offset = direction === "left" ? -320 : 320;
    scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="mt-14 pt-12 border-t-2 border-[#1E242B]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-7">
        <div>
          <span className="font-sketch text-sm font-bold uppercase text-[#E06A4E] block mb-1">
            {"// ESPECIALIZACIONES MODULARES · GOOGLE & CISCO"}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1E242B] uppercase">
            Explorador de Rutas Certificadas (37 Módulos)
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-[#3A434E] font-medium max-w-md">
          Selecciona cada ruta para revisar los módulos completados y abrir sus
          enlaces oficiales de verificación.
        </p>
      </div>

      {/* Track Selector Cards */}
      <div
        role="tablist"
        aria-label="Rutas certificadas Google y Cisco"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-6"
      >
        {tracks.map((track) => {
          const Icon = TRACK_ICONS[track.id];
          const isSelected = track.id === currentTrack.id;

          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleTrackSelect(track.id)}
              className={`p-4 rounded-2xl border-2 border-[#1E242B] text-left transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#F6CE3E] -translate-y-0.5 shadow-[5px_5px_0px_#1E242B]"
                  : "bg-white shadow-[3px_3px_0px_#1E242B] hover:bg-[#FEF3C7]"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className={`w-8 h-8 rounded-lg border-2 border-[#1E242B] flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "bg-[#E06A4E] text-white"
                      : "bg-[#E0F4FC] text-[#1E242B]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <span className="block font-extrabold text-sm text-[#1E242B] truncate">
                    {track.shortTitle}
                  </span>
                  <span className="block font-mono text-[11px] font-bold text-[#3A434E]">
                    {track.courses.length} módulos
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#3A434E] font-medium line-clamp-2 leading-relaxed">
                {track.summary}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Track Modules Panel */}
      <div className="sketch-card overflow-hidden">
        <div className="bg-[#F6CE3E] border-b-2 border-[#1E242B] px-5 py-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] font-extrabold text-[#1E242B] uppercase tracking-wider">
              {currentTrack.provider}
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#1E242B] flex items-center gap-2 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-[#1E242B] shrink-0" />
              <span>{currentTrack.title}</span>
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {currentTrack.verifyUrl && (
              <a
                href={currentTrack.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn-coral inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-xl font-extrabold"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Verificar en Coursera</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {/* Explicit Affordance Controls */}
            <div className="inline-flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByOffset("left")}
                aria-label="Desplazar módulos hacia la izquierda"
                className="sketch-btn-white p-2 rounded-xl cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByOffset("right")}
                aria-label="Desplazar módulos hacia la derecha"
                className="sketch-btn-white p-2 rounded-xl cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollRef}
          className="p-5 sm:p-6 bg-white flex overflow-x-auto gap-4 scroll-smooth"
        >
          {currentTrack.courses.map((course) => (
            <div
              key={course.code + course.title}
              className="min-w-[250px] sm:min-w-[275px] max-w-[285px] shrink-0 bg-[#F4F5F7] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] p-5 rounded-xl flex flex-col justify-between"
            >
              <div>
                <span className="inline-block font-mono text-[11px] font-bold bg-[#53B8E2] text-[#1E242B] border border-[#1E242B] px-2 py-0.5 rounded mb-2">
                  {course.code}
                </span>
                <h5 className="font-extrabold text-[#1E242B] text-sm sm:text-base leading-snug mb-2">
                  {course.title}
                </h5>
                <p className="text-xs text-[#3A434E] font-medium leading-relaxed">
                  {course.description}
                </p>

                {course.skills && course.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {course.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-[#1E242B] text-[#1E242B]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {course.pdfUrl && (
                <div className="mt-4 pt-3 border-t-2 border-[#1E242B]/15">
                  <PdfPreviewModal
                    title={course.title}
                    issuer={currentTrack.provider}
                    pdfUrl={course.pdfUrl}
                    buttonLabel="Ver Certificado PDF"
                    variant="yellow"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
