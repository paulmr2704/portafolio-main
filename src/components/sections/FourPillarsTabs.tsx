"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Bot,
  Brain,
  CheckCircle2,
  GraduationCap,
  Lock,
  PieChart,
  Shield,
  Trophy,
} from "lucide-react";
import type { PillarId, PillarItem } from "@/types/portfolio";

const PILLAR_ICONS: Record<PillarId, typeof Shield> = {
  ciberseguridad: Shield,
  psicologia: Brain,
  ia: Bot,
  "ux-data": PieChart,
};

const CARD_ICONS: Record<PillarId, typeof Lock> = {
  ciberseguridad: Lock,
  psicologia: GraduationCap,
  ia: Trophy,
  "ux-data": Award,
};

const TAB_ACTIVE_BG: Record<PillarId, string> = {
  ciberseguridad: "bg-[#F6CE3E]",
  psicologia: "bg-[#E0F4FC]",
  ia: "bg-[#E6F4E2]",
  "ux-data": "bg-[#F6CE3E]",
};

export default function FourPillarsTabs({ pillars }: { pillars: PillarItem[] }) {
  const [activeId, setActiveId] = useState<PillarId>(
    pillars[0]?.id ?? "ciberseguridad"
  );

  const activePillar =
    pillars.find((pillar) => pillar.id === activeId) ?? pillars[0];

  if (!activePillar) return null;

  const ActiveIcon = PILLAR_ICONS[activePillar.id];
  const CardIcon = CARD_ICONS[activePillar.id];

  return (
    <div>
      {/* Accessible Wireframe Tablist */}
      <div
        role="tablist"
        aria-label="Los 4 pilares de competencias"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-7"
      >
        {pillars.map((pillar) => {
          const Icon = PILLAR_ICONS[pillar.id];
          const isSelected = pillar.id === activePillar.id;

          return (
            <button
              key={pillar.id}
              type="button"
              role="tab"
              id={`tab-${pillar.id}`}
              aria-selected={isSelected}
              aria-controls={`panel-${pillar.id}`}
              onClick={() => setActiveId(pillar.id)}
              className={`relative p-4 rounded-2xl border-2 border-[#1E242B] text-left transition-all cursor-pointer ${
                isSelected
                  ? `${TAB_ACTIVE_BG[pillar.id]} text-[#1E242B] -translate-y-0.5 shadow-[5px_5px_0px_#1E242B]`
                  : "bg-white text-[#3A434E] shadow-[3px_3px_0px_#1E242B] hover:bg-[#FEF3C7]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-10 h-10 rounded-xl border-2 border-[#1E242B] flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "bg-[#E06A4E] text-white"
                      : "bg-[#F4F5F7] text-[#1E242B]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <span className="font-sketch block text-xs font-bold uppercase text-[#1E242B]">
                    Pilar {pillar.order}
                  </span>
                  <span className="block text-sm font-extrabold text-[#1E242B] truncate">
                    {pillar.shortTitle}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Animated Tab Panel Window */}
      <div
        role="tabpanel"
        id={`panel-${activePillar.id}`}
        aria-labelledby={`tab-${activePillar.id}`}
        className="sketch-card overflow-hidden"
      >
        {/* Window Top Strip */}
        <div className="bg-[#53B8E2] border-b-2 border-[#1E242B] px-5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
            <span className="w-3 h-3 rounded-full bg-[#E06A4E] border-2 border-[#1E242B]" />
            <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
          </div>
          <span className="font-mono text-xs font-extrabold text-[#1E242B]">
            &lt;/PILAR_{activePillar.order}&gt;
          </span>
        </div>

        <div className="p-6 sm:p-8 lg:p-10 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Left Narrative & Stack */}
              <div className="lg:col-span-8 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] flex items-center justify-center shrink-0">
                      <ActiveIcon className="w-5 h-5 text-[#1E242B]" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E242B]">
                      {activePillar.title}
                    </h3>
                  </div>

                  <p className="text-[#3A434E] text-sm sm:text-base leading-relaxed font-medium">
                    {activePillar.description}
                  </p>

                  <ul className="space-y-3 pt-1">
                    {activePillar.highlights.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-start gap-2.5 text-sm text-[#3A434E]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E06A4E] shrink-0 mt-1" />
                        <span>
                          <strong className="text-[#1E242B] font-extrabold">
                            {item.label}:
                          </strong>{" "}
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Tools Strip */}
                <div className="pt-4 border-t-2 border-[#1E242B]/15">
                  <span className="font-sketch block text-sm font-bold text-[#1E242B] mb-2.5">
                    Herramientas, Marcos &amp; Metodologías:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activePillar.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-[#FEF3C7] border-2 border-[#1E242B] text-[#1E242B]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual Framed Card */}
              <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border-2 border-[#1E242B] shadow-[4px_4px_0px_#1E242B] overflow-hidden bg-[#F4F5F7]">
                <div className="relative h-48 w-full border-b-2 border-[#1E242B] overflow-hidden">
                  <Image
                    src={activePillar.imageSrc}
                    alt={activePillar.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover"
                  />
                </div>

                <div className="p-5 space-y-2 bg-white flex-1 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 self-start font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#E6F4E2] border-2 border-[#1E242B] text-[#1E242B]">
                    <CardIcon className="w-3.5 h-3.5 text-[#2E7D32]" />
                    {activePillar.cardBadge}
                  </div>
                  <h4 className="font-extrabold text-lg text-[#1E242B]">
                    {activePillar.cardTitle}
                  </h4>
                  <p className="text-xs text-[#3A434E] font-medium leading-relaxed">
                    {activePillar.cardSubtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
