'use client';

import { Trophy, Rocket, Brain, Shield, Bot, Palette, LineChart, Lock, Cloud } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <motion.section 
      id="hero" 
      className="py-20 md:py-28 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Stats */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-amber-400 text-xs font-semibold">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>2º Puesto - Hackathon Internacional de Ciberseguridad e IA | ITBA Argentina</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Comprendiendo la <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Mente Humana</span> para Diseñar y Defender Soluciones con <span className="bg-gradient-to-r from-[#FF1E42] to-[#FF4D6D] bg-clip-text text-transparent">IA & Ciberseguridad</span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Hola, soy <strong className="text-white">Paulo Cesar Meza Rojas (Paul)</strong>. Estudiante de <strong className="text-white">Psicología Organizacional (UPC)</strong> especializado en <strong className="text-white">Operaciones SOC, Threat Hunting, Agentes de IA y Diseño UX/UI</strong>. Conecto el comportamiento humano con defensas digitales infranqueables y sistemas inteligentes.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4">
            <div className="bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#FF1E42]">2º</div>
              <div className="text-xs text-slate-400 mt-1">Puesto ITBA Argentina</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#FF1E42]">31</div>
              <div className="text-xs text-slate-400 mt-1">Cursos Google / Coursera</div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl text-center">
              <div className="text-2xl font-black text-[#FF1E42]">4</div>
              <div className="text-xs text-slate-400 mt-1">Certificados Dual Google</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#proyectos" className="inline-flex items-center gap-2 bg-[#FF1E42] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#E6002E] transition-all">
              <Rocket className="w-4 h-4" /> Ver Proyectos Destacados
            </a>
            <a href="https://github.com/paulmr2704" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/15 hover:bg-white/20 transition-all">
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/paulomezaupc/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#FF1E42] text-[#FF1E42] px-6 py-3 rounded-lg font-semibold hover:bg-[#FF1E42]/10 transition-all">
              <LinkedinIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column: Glassmorphism Card */}
        <div className="lg:col-span-5">
          <div className="bento-glass p-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3 py-1 rounded-full text-xs font-mono text-[#FF1E42] mb-6">
              <Shield className="w-3.5 h-3.5" /> PERFIL INTEGRAL & HYBRID
            </div>

            <div className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-[#FF1E42] flex items-center justify-center overflow-hidden bg-[#FF1E42]/10">
              <img src="/perfil.jpg" alt="Paulo Cesar Meza Rojas" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Paulo Cesar Meza Rojas</h3>
            <p className="text-slate-400 text-sm mb-6">Psicología Organizacional x Ciberseguridad SOC</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#FF1E42]" /> Threat Hunter
              </span>
              <span className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Bot className="w-3.5 h-3.5 text-[#FF1E42]" /> AI Agents Dev
              </span>
              <span className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5 text-[#FF1E42]" /> UX/UI Designer
              </span>
              <span className="bg-white/5 border border-white/10 text-slate-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <LineChart className="w-3.5 h-3.5 text-[#FF1E42]" /> Data Analyst
              </span>
            </div>


          </div>
        </div>

      </div>
    </motion.section>
  );
}
