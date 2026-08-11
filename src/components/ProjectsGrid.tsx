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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Project 1: Yape Track AI */}
          <div className="bento-glass p-8 gold-border flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Trophy className="w-3.5 h-3.5" /> PREMIO INTERNACIONAL - 2º PUESTO ITBA
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Ciberseguridad & Agentes de IA</span>
              <h3 className="text-xl font-bold text-white mb-3">Yape Track AI – Agente Autónomo Antifraude</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Co-desarrollador del agente inteligente de seguridad para billeteras digitales presentado en la <strong className="text-white">Hackathon de Ciberseguridad e IA del ITBA en Buenos Aires, Argentina (Agosto 2026)</strong>. Logró el <strong className="text-white">2º Puesto</strong> frente a 6 equipos internacionales.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Python</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">AI Autonomous Agents</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Anti-Fraud Engine</span>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/paulmr2704/yape-sentinel-ai-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF1E42] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#E6002E] transition-all"
              >
                <GithubIcon className="w-4 h-4" /> Repositorio GitHub <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Project 2: Arquitectura Zero Trust & STRIDE (Javeriana & UPC) */}
          <div className="bento-glass p-8 flex flex-col justify-between relative border-[#FF1E42]/30">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FF1E42]/10 border border-[#FF1E42]/30 text-[#FF1E42] font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5" /> CASO DE ESTUDIO - JAVERIANA & UPC
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Arquitectura de Ciberseguridad & Riesgos</span>
              <h3 className="text-xl font-bold text-white mb-3">Diseño Zero Trust & Evaluación de Riesgos STRIDE</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Análisis de vulnerabilidades (SQLi, Broken Auth) y modelado de amenazas <strong className="text-white">STRIDE</strong> para portal transaccional corporativo. Diseño de solución de <strong className="text-white">Defensa en Profundidad (5 Anillos)</strong> con 13 controles integrados (ZTNA, Microsegmentación, WAF L7, EDR, mTLS, SIEM Inmutable) reduciendo el riesgo residual a niveles bajos.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Zero Trust</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">STRIDE</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">WAF L7</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">ISO 27001</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">OWASP Top 10</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
              🛡️ Pontificia Universidad Javeriana & UPC (2026)
            </div>
          </div>

          {/* Project 3: Beauty Salon App */}
          <div className="bento-glass p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5" /> UX/UI + AI AGENT
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Diseño de Producto & Desarrollo asistido por IA</span>
              <h3 className="text-xl font-bold text-white mb-3">App de Gestión para Salón de Belleza</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Conceptualización del flujo de usuarios, bocetado e interfaz en Figma. Implementación de lógica con modelos generativos (Figma AI) y desarrollo asistido por la plataforma <strong className="text-white">Google Antigravity IDE</strong>.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Figma UX/UI</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Figma AI</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Google Antigravity IDE</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 font-mono">
              ⚡ En fase de prototipado asistido por IA
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
