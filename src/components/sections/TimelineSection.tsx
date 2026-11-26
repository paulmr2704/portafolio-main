import { ShieldAlert } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE_DATA } from "@/data/experience";

export default function TimelineSection() {
  return (
    <section id="experiencia" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="EXPERIENCIA · RESILIENCIA OPERATIVA"
          title="Trayectoria Real Conectada a Competencias SOC"
          description="Roles operativos de alta exigencia donde consolidé vigilancia continua, gestión documental de incidentes, autonomía nocturna y comunicación efectiva."
        />

        <div className="max-w-4xl mx-auto relative border-l-4 border-[#1E242B] pl-6 sm:pl-9 space-y-6">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <article key={exp.id} className="relative">
              {/* Timeline Sketch Node */}
              <span
                aria-hidden="true"
                className={`absolute -left-[35px] sm:-left-[47px] top-6 w-5 h-5 rounded-full border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] ${
                  idx % 2 === 0 ? "bg-[#F6CE3E]" : "bg-[#E06A4E]"
                }`}
              />

              <div className="sketch-card sketch-card-hover p-6 sm:p-7 bg-white">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-extrabold bg-[#FEF3C7] border border-[#1E242B] px-2.5 py-0.5 rounded-md text-[#1E242B]">
                    {exp.period}
                  </span>
                  <span className="text-xs font-bold text-[#5F6B7A]">
                    {exp.organization}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-[#1E242B] mb-2">
                  {exp.role}
                </h3>

                <p className="text-sm text-[#3A434E] font-medium leading-relaxed mb-4">
                  {exp.summary}
                </p>

                {/* Bridge to SOC Competency */}
                <div className="bg-[#E6F4E2] border-2 border-[#1E242B] rounded-xl p-3.5 flex items-start gap-2.5 mb-4">
                  <ShieldAlert className="w-4 h-4 text-[#1E242B] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#1E242B] font-semibold leading-relaxed">
                    <span className="font-sketch uppercase text-xs font-bold text-[#2E7D32] block mb-0.5">
                      Valor Transferible a Operaciones SOC / TI
                    </span>
                    {exp.socTransferableSkill}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-[#F4F5F7] text-[#1E242B] border border-[#1E242B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
