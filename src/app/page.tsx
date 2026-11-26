import HeroSection from "@/components/sections/HeroSection";
import FourPillarsSection from "@/components/sections/FourPillarsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ContactSection from "@/components/sections/ContactSection";
import { buildHomeJsonLd, serializeJsonLd } from "@/lib/seo/json-ld";

export default function HomePage() {
  const jsonLd = buildHomeJsonLd();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />
      <HeroSection />
      <FourPillarsSection />
      <ProjectsSection />
      <CredentialsSection />
      <TimelineSection />
      <ContactSection />
    </main>
  );
}
