import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FourPillars from '@/components/FourPillars';
import ProjectsGrid from '@/components/ProjectsGrid';
import CertificationsGrid from '@/components/CertificationsGrid';
import GoogleCourses from '@/components/GoogleCourses';
import Timeline from '@/components/Timeline';
import ContactForm from '@/components/ContactForm';
import { Cloud, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0608] text-slate-100 relative selection:bg-[#FF1E42] selection:text-white">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <FourPillars />
        <ProjectsGrid />
        <CertificationsGrid />
        <GoogleCourses />
        <Timeline />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#060304] text-xs text-slate-400 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Paulo Cesar Meza Rojas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
