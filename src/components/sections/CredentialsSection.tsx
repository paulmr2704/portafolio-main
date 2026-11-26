import { Award, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import PdfPreviewModal from "@/components/ui/PdfPreviewModal";
import AcademyExplorer from "@/components/sections/AcademyExplorer";
import { CERTIFICATIONS_DATA } from "@/data/certifications";
import { ACADEMY_TRACKS } from "@/data/courses";

export default function CredentialsSection() {
  return (
    <section
      id="credenciales"
      className="py-20 bg-[#EAECEF] border-y-2 border-[#1E242B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="TEST & VERIFICATION · CERTIFICACIONES"
          title="Acreditaciones Internacionales, Cloud & Ciberseguridad"
          description="Certificaciones verificables emitidas por instituciones líderes (ITBA, Javeriana, Microsoft, EC-Council, Google, Cisco, UPC y PRONABEC)."
        />

        {/* Institutional Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CERTIFICATIONS_DATA.map((cert) => (
            <article
              key={cert.id}
              className="sketch-card sketch-card-hover p-5 flex flex-col justify-between bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1 font-mono text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border-2 border-[#1E242B] ${
                      cert.featured ? "bg-[#F6CE3E]" : "bg-[#E0F4FC]"
                    } text-[#1E242B]`}
                  >
                    <Award className="w-3 h-3" />
                    {cert.category}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-[#5F6B7A]">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-extrabold text-base text-[#1E242B] leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-bold text-[#E06A4E] mb-1">
                  {cert.issuer}
                </p>
                {cert.hoursOrCode && (
                  <p className="font-mono text-[11px] font-semibold text-[#5F6B7A] mb-3">
                    {cert.hoursOrCode}
                  </p>
                )}

                <p className="text-xs text-[#3A434E] font-medium leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              <div className="mt-auto pt-3 border-t-2 border-[#1E242B]/10">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sketch-btn-yellow inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl text-xs font-extrabold"
                  >
                    <span>{cert.verifyLabel || "Verificar Credencial"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {cert.pdfUrl && (
                  <PdfPreviewModal
                    title={cert.title}
                    issuer={cert.issuer}
                    pdfUrl={cert.pdfUrl}
                    buttonLabel={cert.verifyLabel || "Ver Certificado PDF"}
                    variant={cert.featured ? "yellow" : "white"}
                  />
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Google & Cisco 37 Modules Explorer */}
        <AcademyExplorer tracks={ACADEMY_TRACKS} />
      </div>
    </section>
  );
}
