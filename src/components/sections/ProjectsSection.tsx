import Link from "next/link";
import { ArrowUpRight, ExternalLink, ShieldCheck, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import EvidenceModal from "@/components/ui/EvidenceModal";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS_DATA } from "@/data/projects";
import type { ProjectCaseStudy } from "@/types/portfolio";

function getWindowHeaderBar(tone: ProjectCaseStudy["badgeTone"]) {
  switch (tone) {
    case "amber":
      return "bg-[#F6CE3E] text-[#1E242B]";
    case "terracotta":
      return "bg-[#E06A4E] text-white";
    case "emerald":
      return "bg-[#84BA77] text-[#1E242B]";
    default:
      return "bg-[#53B8E2] text-[#1E242B]";
  }
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="PROGRAMMING & UX · CASOS DE ESTUDIO"
          title="Proyectos Destacados y Soluciones de Alto Impacto"
          description="Documentados bajo estructura de Caso de Estudio (Reto, Arquitectura e Impacto) con repositorios públicos y evidencias interactivas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <article
              key={project.slug}
              className="sketch-card sketch-card-hover overflow-hidden flex flex-col justify-between"
            >
              {/* Browser Window Top Header [o o o] */}
              <div
                className={`px-5 py-3 border-b-2 border-[#1E242B] flex items-center justify-between gap-3 ${getWindowHeaderBar(
                  project.badgeTone
                )}`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
                    <span className="w-3 h-3 rounded-full bg-[#1E242B]" />
                  </div>
                  <span className="font-mono text-xs font-extrabold truncate">
                    {project.badgeTone === "amber" ? (
                      <Trophy className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                    ) : (
                      <ShieldCheck className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                    )}
                    {project.badge}
                  </span>
                </div>

                <span className="font-mono text-[11px] font-bold bg-white text-[#1E242B] border-2 border-[#1E242B] px-2 py-0.5 rounded shrink-0">
                  &lt;/0{index + 1}&gt;
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-sketch text-xs font-bold uppercase text-[#E06A4E]">
                      {project.category}
                    </span>
                    {project.institution && (
                      <span className="font-mono text-[11px] font-semibold text-[#5F6B7A]">
                        {project.institution}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E242B] mb-3 leading-snug">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="hover:text-[#E06A4E] transition-colors"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#3A434E] font-medium leading-relaxed mb-5">
                    {project.shortSummary}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-3 py-2.5"
                      >
                        <span className="block font-mono text-[10px] uppercase font-bold text-[#5F6B7A]">
                          {metric.label}
                        </span>
                        <span className="block text-xs sm:text-sm font-extrabold text-[#1E242B] mt-0.5">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress Bar if in-progress prototype */}
                  {project.progress && (
                    <div className="mb-5 bg-[#E6F4E2] border-2 border-[#1E242B] rounded-xl p-3.5">
                      <div className="flex items-center justify-between text-xs font-mono font-extrabold text-[#1E242B] mb-2">
                        <span>{project.progress.label}</span>
                        <span>{project.progress.percent}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-white border-2 border-[#1E242B] rounded-full overflow-hidden p-0.5">
                        <div
                          className="h-full bg-[#84BA77] rounded-full"
                          style={{ width: `${project.progress.percent}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-lg bg-[#E0F4FC] text-[#1E242B] border-2 border-[#1E242B]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t-2 border-[#1E242B]/15 flex flex-wrap items-center gap-2.5">
                  <Link
                    href={`/proyectos/${project.slug}`}
                    className="sketch-btn-coral inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-extrabold"
                  >
                    <span>Leer Caso de Estudio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  {project.evidences && project.evidences.length > 0 && (
                    <EvidenceModal
                      projectTitle={project.title}
                      evidences={project.evidences}
                      buttonLabel={`Ver Evidencias (${project.evidences.length})`}
                    />
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-white inline-flex items-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-extrabold"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Código</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
