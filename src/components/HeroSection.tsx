'use client';

import { Trophy, Rocket, Brain, Shield, Bot, Palette, LineChart, Lock, Cloud, FileText, MapPin, Briefcase, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="py-12 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Stats */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-semibold">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>2º Puesto - Hackathon de Ciberseguridad e IA | ITBA Buenos Aires (Delegación UPC)</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-full text-emerald-400 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" /> Lima, Perú (Remoto/Híbrido)
            </div>
            <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 px-3 py-1.5 rounded-full text-blue-400 text-xs font-semibold">
              <Briefcase className="w-3.5 h-3.5" /> Open to Work
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#F2EFE8]">
            Comprendiendo la Mente Humana para Diseñar y Defender Soluciones con <span className="text-[#F2EFE8]">IA & Ciberseguridad</span>
          </h1>

          <p className="text-[#C7B8A6] text-lg max-w-2xl leading-relaxed">
            Hola, soy <strong className="text-[#F2EFE8]">Paulo Cesar Meza Rojas (Paul)</strong>. Estudiante de <strong className="text-[#F2EFE8]">Psicología Organizacional (UPC)</strong> especializado en <strong className="text-[#F2EFE8]">Operaciones SOC, Threat Hunting, Agentes de IA y Diseño UX/UI</strong>. Conecto el comportamiento humano con defensas digitales infranqueables y sistemas inteligentes.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
            <div className="bg-[#1F2A44] border border-[#C7B8A6]/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#F2EFE8]">2º</div>
              <div className="text-xs text-[#C7B8A6] mt-1">Puesto ITBA Argentina</div>
            </div>
            <div className="bg-[#1F2A44] border border-[#C7B8A6]/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#F2EFE8]">31</div>
              <div className="text-xs text-[#C7B8A6] mt-1">Cursos Google / Coursera</div>
            </div>
            <div className="bg-[#1F2A44] border border-[#C7B8A6]/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#F2EFE8]">4</div>
              <div className="text-xs text-[#C7B8A6] mt-1">Certificados Dual Google</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#proyectos" className="inline-flex items-center gap-2 bg-[#B46A55] text-[#F2EFE8] px-6 py-3 rounded-lg font-bold hover:bg-[#9c5946] transition-all">
              <Rocket className="w-4 h-4" /> Ver Proyectos Destacados
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1F2A44] text-[#F2EFE8] px-6 py-3 rounded-lg font-semibold border border-[#C7B8A6]/30 hover:bg-[#1F2A44]/80 transition-all">
              <FileText className="w-4 h-4" /> Descargar CV (PDF)
            </a>
            <a href="https://github.com/paulmr2704" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#1F2A44] text-[#C7B8A6] px-6 py-3 rounded-lg font-semibold border border-[#C7B8A6]/30 hover:bg-[#1F2A44]/80 hover:text-[#F2EFE8] transition-all">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/paulomezaupc/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#C7B8A6]/30 text-[#C7B8A6] px-6 py-3 rounded-lg font-semibold hover:bg-[#1F2A44] hover:text-[#F2EFE8] transition-all">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://www.credly.com/users/paulo-cesar-meza-rojas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#FF9900] text-[#FF9900] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF9900]/10 transition-all">
              <Award className="w-4 h-4" /> Credly
            </a>
          </div>
        </div>

        {/* Right Column: Glassmorphism Card */}
        <div className="lg:col-span-5">
          <div className="bento-glass p-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-[#1F2A44] border border-[#C7B8A6]/30 px-3 py-1 rounded-full text-xs font-mono text-[#C7B8A6] mb-6">
              <Shield className="w-3.5 h-3.5" /> PERFIL INTEGRAL & HYBRID
            </div>

            <div className="w-28 h-28 mx-auto mb-6 rounded-full border border-[#C7B8A6]/30 flex items-center justify-center overflow-hidden bg-[#1F2A44]">
              <img src="/perfil.jpg" alt="Paulo Cesar Meza Rojas" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-bold text-[#F2EFE8] mb-1">Paulo Cesar Meza Rojas</h3>
            <p className="text-[#C7B8A6] text-sm mb-6">Analista de Ciberseguridad (SOC) & Desarrollador de IA</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-[#1F2A44] border border-[#C7B8A6]/20 text-[#C7B8A6] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C7B8A6]" /> Threat Hunter
              </span>
              <span className="bg-[#1F2A44] border border-[#C7B8A6]/20 text-[#C7B8A6] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#C7B8A6]" /> AI Agents Dev
              </span>
              <span className="bg-[#1F2A44] border border-[#C7B8A6]/20 text-[#C7B8A6] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#C7B8A6]" /> UX/UI Designer
              </span>
              <span className="bg-[#1F2A44] border border-[#C7B8A6]/20 text-[#C7B8A6] text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <LineChart className="w-3.5 h-3.5 text-[#C7B8A6]" /> Data Analyst
              </span>
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
