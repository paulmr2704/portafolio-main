import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  FileText,
  LineChart,
  MapPin,
  Rocket,
  Shield,
  Trophy,
} from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { TOTAL_ACADEMY_MODULES, TOTAL_GOOGLE_DUAL_CERTS } from "@/data/courses";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function HeroSection() {
  return (
    <section
      id="perfil"
      className="pt-10 pb-20 md:pt-14 md:pb-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Column: Studio Sketchbook Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] px-3.5 py-1.5 rounded-full text-[#1E242B] text-xs font-extrabold">
              <Trophy className="w-4 h-4 text-[#1E242B] shrink-0" />
              <span>2º Puesto Internacional · Hackathon Ciberseguridad & IA (ITBA)</span>
            </span>

            <span className="font-sketch inline-flex items-center gap-1.5 bg-white border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] px-3 py-1 rounded-full text-[#1E242B] text-xs font-bold">
              <MapPin className="w-3.5 h-3.5 text-[#E06A4E]" />
              {SITE_CONFIG.location} · {SITE_CONFIG.workMode}
            </span>
          </div>

          <div className="space-y-3">
            <span className="font-sketch text-sm sm:text-base font-bold text-[#E06A4E] uppercase block">
              {"// HOME PAGE · PSICOLOGÍA + DEFENSA DIGITAL + IA"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.35rem] font-extrabold tracking-tight leading-[1.12] text-[#1E242B]">
              Comprendiendo la Mente Humana para Diseñar y Defender Sistemas con{" "}
              <span className="marker-box-yellow mt-1">IA &amp; Ciberseguridad</span>
            </h1>

            {/* Signature Green Sketch Bar (Inspired by reference screen bar) */}
            <div
              aria-hidden="true"
              className="w-52 max-w-full h-3 rounded-full bg-white border-2 border-[#1E242B] p-0.5 shadow-[2px_2px_0px_#1E242B]"
            >
              <div className="h-full w-4/5 rounded-full bg-[#84BA77]" />
            </div>
          </div>

          <p className="text-[#3A434E] text-base sm:text-lg max-w-2xl leading-relaxed font-medium">
            Hola, soy <strong className="text-[#1E242B] font-extrabold">{SITE_CONFIG.name}</strong>.
            Integro la <strong className="text-[#1E242B] font-extrabold">Psicología Organizacional (UPC)</strong> con{" "}
            <strong className="text-[#1E242B] font-extrabold">
              Operaciones SOC, Threat Hunting, Agentes Autónomos de IA y Diseño UX/UI
            </strong>{" "}
            para anticipar riesgos humanos y construir productos seguros.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="/#proyectos"
              className="sketch-btn-coral inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold"
            >
              <Rocket className="w-4 h-4" />
              Explorar Casos de Estudio
            </Link>

            <a
              href={SITE_CONFIG.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn-yellow inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-extrabold"
            >
              <FileText className="w-4 h-4" />
              Descargar CV (PDF)
            </a>
          </div>

          {/* Verified Profiles Strip */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-bold text-[#1E242B]">
            <span className="font-sketch text-sm text-[#3A434E] mr-1">
              Redes &amp; Verificación:
            </span>
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn-white inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
              LinkedIn
            </a>
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn-white inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#1E242B]" />
              GitHub
            </a>
            <a
              href={SITE_CONFIG.links.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn-white inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
            >
              <Award className="w-3.5 h-3.5 text-[#E06A4E]" />
              Credly Badges
            </a>
          </div>
        </div>

        {/* Right Column: Wireframe Browser Window Dossier [o o o] */}
        <div className="lg:col-span-5">
          <div className="sketch-card overflow-hidden">
            {/* Coral Browser Header Bar (Direct nod to reference image) */}
            <div className="bg-[#E06A4E] border-b-2 border-[#1E242B] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
                <span className="w-3 h-3 rounded-full bg-[#84BA77] border-2 border-[#1E242B]" />
                <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
              </div>

              <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold bg-[#53B8E2] text-[#1E242B] border-2 border-[#1E242B] px-2.5 py-0.5 rounded-md">
                <Code2 className="w-3 h-3" />
                &lt;/SOC_DOSSIER&gt;
              </span>
            </div>

            <div className="p-6 sm:p-7 bg-white">
              {/* Identity Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] overflow-hidden bg-[#F6CE3E] shrink-0">
                  <Image
                    src={SITE_CONFIG.profileImage}
                    alt={`Fotografía profesional de ${SITE_CONFIG.name}`}
                    fill
                    sizes="80px"
                    priority
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-sketch text-xs font-bold text-[#E06A4E] uppercase block">
                    Perfil Integral · Open to Work
                  </span>
                  <p className="text-lg font-extrabold text-[#1E242B] leading-snug">
                    Defensa Cibernética + Factor Humano
                  </p>
                  <p className="text-xs font-semibold text-[#5F6B7A] mt-0.5">
                    UPC · ITBA · Javeriana · Google · Microsoft
                  </p>
                </div>
              </div>

              {/* 3 Colorful Sketch Metric Blocks */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                <div className="bg-[#FEF3C7] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#1E242B] font-mono">
                    2º
                  </div>
                  <div className="text-[11px] font-bold text-[#1E242B] mt-0.5">
                    Podio ITBA Arg.
                  </div>
                </div>
                <div className="bg-[#E0F4FC] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#1E242B] font-mono">
                    {TOTAL_ACADEMY_MODULES}
                  </div>
                  <div className="text-[11px] font-bold text-[#1E242B] mt-0.5">
                    Módulos Certif.
                  </div>
                </div>
                <div className="bg-[#E6F4E2] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] rounded-xl p-3 text-center">
                  <div className="text-xl sm:text-2xl font-black text-[#1E242B] font-mono">
                    {TOTAL_GOOGLE_DUAL_CERTS}
                  </div>
                  <div className="text-[11px] font-bold text-[#1E242B] mt-0.5">
                    Google Dual
                  </div>
                </div>
              </div>

              {/* 4 Core Domains List */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-3.5 py-2.5">
                  <span className="flex items-center gap-2 font-extrabold text-[#1E242B]">
                    <Shield className="w-4 h-4 text-[#E06A4E]" />
                    SOC, SIEM &amp; Zero Trust
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#3A434E]">
                    Elastic · STRIDE
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-3.5 py-2.5">
                  <span className="flex items-center gap-2 font-extrabold text-[#1E242B]">
                    <Bot className="w-4 h-4 text-[#1E242B]" />
                    Agentes Autónomos de IA
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#3A434E]">
                    Python · Antifraude
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-3.5 py-2.5">
                  <span className="flex items-center gap-2 font-extrabold text-[#1E242B]">
                    <Brain className="w-4 h-4 text-[#E06A4E]" />
                    Psicología &amp; Factor Humano
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#3A434E]">
                    UPC · Anti-Phishing
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-3.5 py-2.5">
                  <span className="flex items-center gap-2 font-extrabold text-[#1E242B]">
                    <LineChart className="w-4 h-4 text-[#2E7D32]" />
                    Diseño UX/UI &amp; Analítica
                  </span>
                  <span className="font-mono text-[11px] font-semibold text-[#3A434E]">
                    Figma · SQL · R
                  </span>
                </div>
              </div>

              {/* Verified Industry Badges */}
              <div className="pt-3 border-t-2 border-[#1E242B]/15 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono font-bold text-[#1E242B]">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#4E9F3D]" />
                  Microsoft SC-900 &amp; AZ-900
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#4E9F3D]" />
                  EC-Council EHE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
