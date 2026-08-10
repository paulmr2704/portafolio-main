'use client';

import { Trophy, Compass, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsGrid() {
  return (
    <motion.section 
      id="proyectos" 
      className="py-20 bg-[#060304] relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            LOGROS Y PROYECTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proyectos Destacados e Impacto Internacional</h2>
          <p className="text-slate-400 mt-2">Soluciones desarrolladas bajo altos estándares de ciberseguridad e Inteligencia Artificial.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Project 1: Yape Track AI */}
          <div className="bento-glass p-8 gold-border flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Trophy className="w-3.5 h-3.5" /> PREMIO INTERNACIONAL - 2º PUESTO ITBA
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Ciberseguridad & Agentes de IA</span>
              <h3 className="text-2xl font-bold text-white mb-3">Yape Track AI – Agente Autónomo Antifraude en Tiempo Real</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Co-desarrollador del agente inteligente de seguridad para billeteras digitales presentado en la <strong className="text-white">Hackathon de Ciberseguridad e IA del ITBA en Buenos Aires, Argentina (Agosto 2026)</strong>. Logró el <strong className="text-white">2º Puesto</strong> frente a 6 equipos internacionales. Detecta y mitiga transacciones anómalas en tiempo real combinando modelos conductuales y respuesta automatizada.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Python</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">AI Autonomous Agents</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Anti-Fraud Engine</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">SOC Automation</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">ITBA Argentina</span>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/paulmr2704/yape-sentinel-ai-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF1E42] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#E6002E] transition-all shadow-[0_0_15px_rgba(255,30,66,0.4)]"
              >
                <GithubIcon className="w-4 h-4" /> Ver Repositorio en GitHub <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Project 2: Beauty Salon App */}
          <div className="bento-glass p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5" /> UX/UI + AI AGENT
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Diseño de Producto & Desarrollo asistido por IA</span>
              <h3 className="text-2xl font-bold text-white mb-3">App de Gestión para Salón de Belleza</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Conceptualización integral del flujo de usuarios, bocetado de baja fidelidad y prototipado interactivo de alta fidelidad en Figma. Implementación de la lógica del sistema mediante modelos generativos (Figma AI) y desarrollo de código con la plataforma de agentes <strong className="text-white">Google Antigravity IDE</strong>.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Figma UX/UI</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Figma AI</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Google Antigravity IDE</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">User Flows</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              ⚡ En fase de prototipado e integración asistida por IA
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
