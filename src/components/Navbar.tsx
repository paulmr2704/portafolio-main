'use client';

import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0608]/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="flex items-center gap-2 font-bold text-xl tracking-tight cursor-pointer">
          <Shield className="w-6 h-6 text-[#FF1E42]" />
          <span>PAUL<span className="text-[#FF1E42]">MEZA</span></span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')} className="hover:text-[#FF1E42] transition-colors cursor-pointer">Perfil</a>
          <a href="#pilares" onClick={(e) => scrollToSection(e, 'pilares')} className="hover:text-[#FF1E42] transition-colors cursor-pointer">4 Pilares</a>
          <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')} className="hover:text-[#FF1E42] transition-colors cursor-pointer">Proyectos</a>
          <a href="#certificaciones" onClick={(e) => scrollToSection(e, 'certificaciones')} className="hover:text-[#FF1E42] transition-colors cursor-pointer">Certificaciones</a>
          <a href="#habilidades" onClick={(e) => scrollToSection(e, 'habilidades')} className="hover:text-[#FF1E42] transition-colors cursor-pointer">Cursos Google</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="bg-[#FF1E42] text-white px-4 py-2 rounded-lg hover:bg-[#E6002E] transition-all cursor-pointer">Contacto</a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0608]/95 border-b border-[#FF1E42]/30 px-4 py-4 flex flex-col gap-3 text-sm font-medium text-slate-300">
          <a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')} className="hover:text-[#FF1E42] cursor-pointer">Perfil</a>
          <a href="#pilares" onClick={(e) => scrollToSection(e, 'pilares')} className="hover:text-[#FF1E42] cursor-pointer">4 Pilares</a>
          <a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')} className="hover:text-[#FF1E42] cursor-pointer">Proyectos</a>
          <a href="#certificaciones" onClick={(e) => scrollToSection(e, 'certificaciones')} className="hover:text-[#FF1E42] cursor-pointer">Certificaciones</a>
          <a href="#habilidades" onClick={(e) => scrollToSection(e, 'habilidades')} className="hover:text-[#FF1E42] cursor-pointer">Cursos Google</a>
          <a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')} className="bg-[#FF1E42] text-white text-center py-2 rounded-lg cursor-pointer">Contacto</a>
        </div>
      )}
    </header>
  );
}
