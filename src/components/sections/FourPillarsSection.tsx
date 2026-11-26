import SectionHeader from "@/components/ui/SectionHeader";
import FourPillarsTabs from "@/components/sections/FourPillarsTabs";
import { PILLARS_DATA } from "@/data/pillars";

export default function FourPillarsSection() {
  return (
    <section
      id="pilares"
      className="py-20 bg-[#EAECEF] border-y-2 border-[#1E242B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          eyebrow="LAYOUT · COMPETENCIAS CORE"
          title="Los 4 Pilares de mi Perfil Técnico y Humano"
          description="Selecciona cada bloque para explorar cómo integro Operaciones SOC, Psicología del comportamiento, Agentes de IA y Diseño UX/UI basado en datos."
        />

        <FourPillarsTabs pillars={PILLARS_DATA} />
      </div>
    </section>
  );
}
