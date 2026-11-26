import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";
import { getProjectBySlug, PROJECTS_DATA } from "@/data/projects";
import { buildProjectJsonLd, serializeJsonLd } from "@/lib/seo/json-ld";
import EvidenceModal from "@/components/ui/EvidenceModal";
import { GithubIcon } from "@/components/ui/Icons";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Caso de Estudio no encontrado",
    };
  }

  return {
    title: project.title,
    description: project.shortSummary,
    keywords: project.technologies,
    alternates: {
      canonical: `/proyectos/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Caso de Estudio`,
      description: project.shortSummary,
      url: `/proyectos/${project.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.slug !== project.slug);
  const jsonLd = buildProjectJsonLd(project);

  return (
    <main className="py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Breadcrumb & Back */}
        <nav
          aria-label="Ruta de navegación"
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href="/#proyectos"
            className="sketch-btn-white inline-flex items-center gap-2 text-xs font-extrabold px-4 py-2 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 text-[#E06A4E]" />
            Volver a Casos de Estudio
          </Link>

          <span className="font-mono text-xs font-extrabold bg-[#F6CE3E] text-[#1E242B] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] px-3 py-1 rounded-full">
            {project.badge}
          </span>
        </nav>

        {/* Header Window */}
        <header className="sketch-card overflow-hidden">
          <div className="bg-[#E06A4E] border-b-2 border-[#1E242B] px-5 py-3 flex items-center justify-between text-white">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
              <span className="w-3 h-3 rounded-full bg-[#84BA77] border-2 border-[#1E242B]" />
              <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
            </div>
            <span className="font-mono text-xs font-bold bg-white text-[#1E242B] border-2 border-[#1E242B] px-2.5 py-0.5 rounded">
              &lt;/CASE_STUDY&gt;
            </span>
          </div>

          <div className="p-7 sm:p-10 bg-white space-y-5">
            <span className="font-sketch text-sm uppercase font-bold text-[#E06A4E] block">
              {project.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-[#1E242B] leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#3A434E] font-medium leading-relaxed">
              {project.shortSummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {project.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] rounded-xl p-4 ${
                    idx === 0
                      ? "bg-[#FEF3C7]"
                      : idx === 1
                        ? "bg-[#E0F4FC]"
                        : "bg-[#E6F4E2]"
                  }`}
                >
                  <span className="font-mono text-[11px] uppercase font-bold text-[#3A434E] block">
                    {metric.label}
                  </span>
                  <span className="text-base font-extrabold text-[#1E242B] mt-1 block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn-coral inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspeccionar Repositorio en GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {project.evidences && project.evidences.length > 0 && (
                <EvidenceModal
                  projectTitle={project.title}
                  evidences={project.evidences}
                  buttonLabel={`Abrir Visor Interactivo (${project.evidences.length} vistas)`}
                />
              )}
            </div>
          </div>
        </header>

        {/* Challenge / Architecture / Impact Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="sketch-card p-6 bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B]">
              <Target className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-extrabold text-[#1E242B]">
              1. El Reto &amp; Contexto
            </h2>
            <p className="text-sm text-[#3A434E] font-medium leading-relaxed">
              {project.challenge}
            </p>
          </section>

          <section className="sketch-card p-6 bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E0F4FC] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B]">
              <Layers className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-extrabold text-[#1E242B]">
              2. Arquitectura &amp; Solución
            </h2>
            <p className="text-sm text-[#3A434E] font-medium leading-relaxed">
              {project.architecture}
            </p>
          </section>

          <section className="sketch-card p-6 bg-white space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E6F4E2] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-extrabold text-[#1E242B]">
              3. Impacto &amp; Valor
            </h2>
            <p className="text-sm text-[#3A434E] font-medium leading-relaxed">
              {project.impact}
            </p>
          </section>
        </div>

        {/* Technical Highlights & Stack */}
        <section className="sketch-card p-7 sm:p-8 bg-white space-y-6">
          <h2 className="text-xl font-extrabold text-[#1E242B] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#E06A4E]" />
            Decisiones Clave de Ingeniería y Seguridad
          </h2>

          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-[#3A434E] font-medium leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t-2 border-[#1E242B]/15">
            <span className="font-sketch block text-sm font-bold text-[#1E242B] mb-3">
              Tecnologías y Estándares Aplicados:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg bg-[#E0F4FC] border-2 border-[#1E242B] text-[#1E242B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Indexed Evidence Gallery */}
        {project.evidences && project.evidences.length > 0 && (
          <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#1E242B] uppercase">
              Galería de Evidencias y Entregables Técnicos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.evidences.map((evidence) => (
                <figure
                  key={evidence.id}
                  className="sketch-card p-4 bg-white flex flex-col justify-between space-y-3"
                >
                  <div className="relative rounded-xl overflow-hidden border-2 border-[#1E242B] bg-[#F4F5F7] aspect-[16/10]">
                    <Image
                      src={evidence.src}
                      alt={evidence.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-contain p-2"
                    />
                  </div>
                  <figcaption className="px-1">
                    <p className="text-sm font-extrabold text-[#1E242B]">
                      {evidence.title}
                    </p>
                    <p className="text-xs text-[#3A434E] font-medium mt-0.5">
                      {evidence.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Other Case Studies */}
        <section className="pt-6 border-t-2 border-[#1E242B]/20 space-y-4">
          <h2 className="text-lg font-extrabold text-[#1E242B] uppercase">
            Explorar otros Casos de Estudio
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedProjects.map((other) => (
              <Link
                key={other.slug}
                href={`/proyectos/${other.slug}`}
                className="sketch-card sketch-card-hover p-4 bg-white flex flex-col justify-between gap-3"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#E06A4E] uppercase tracking-wider block mb-1">
                    {other.badge}
                  </span>
                  <h3 className="text-sm font-extrabold text-[#1E242B] leading-snug">
                    {other.title}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#1E242B]">
                  Ver estudio <ArrowUpRight className="w-3.5 h-3.5 text-[#E06A4E]" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
