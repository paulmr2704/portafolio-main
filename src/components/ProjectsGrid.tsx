'use client';

import { useState } from 'react';
import { Trophy, Compass, ExternalLink, Eye, X, FileText, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GithubIcon } from '@/components/Icons';

export default function ProjectsGrid() {
  const [selectedDiagram, setSelectedDiagram] = useState<string | null>(null);
  const [activeTabDiagram, setActiveTabDiagram] = useState<'zerotrust' | 'stride' | 'riesgos'>('zerotrust');

  const [activeModalSalon, setActiveModalSalon] = useState<boolean>(false);
  const [activeTabSalon, setActiveTabSalon] = useState<'inicio' | 'reservar' | 'portafolio' | 'perfil'>('inicio');

  const diagramMap = {
    zerotrust: {
      title: 'Arquitectura Objetivo (TO-BE) - Zero Trust Implementada (13 Controles)',
      src: '/javeriana-zerotrust.jpg',
    },
    stride: {
      title: 'Taller Escritura de Riesgos - Framework STRIDE',
      src: '/javeriana-stride.jpg',
    },
    riesgos: {
      title: 'Taller de Escritura de Riesgos - Formato Gerencial / C-Suite',
      src: '/javeriana-riesgos.jpg',
    },
  };

  const salonMap = {
    inicio: {
      title: 'Pantalla de Inicio — Servicios Disponibles',
      src: '/salon-inicio.png',
    },
    reservar: {
      title: 'Formulario de Reserva — Fecha, Hora y Estilista',
      src: '/salon-reservar.png',
    },
    portafolio: {
      title: 'Catálogo de Cortes y Trabajos Realizados',
      src: '/salon-portafolio.png',
    },
    perfil: {
      title: 'Panel de Perfil de Cliente y Citas Agendadas',
      src: '/salon-perfil.png',
    },
  };

  return (
    <section 
      id="proyectos" 
      className="py-20 bg-[#060304] relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            LOGROS Y PROYECTOS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proyectos Destacados y Soluciones de Alto Impacto</h2>
          <p className="text-slate-400 mt-2">Soluciones desarrolladas bajo altos estándares de ciberseguridad e Inteligencia Artificial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Project 1: Yape Track AI */}
          <div className="bento-glass p-8 gold-border flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Trophy className="w-3.5 h-3.5" /> 2º PUESTO - HACKATHON DE CIBERSEGURIDAD & IA (ITBA)
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Ciberseguridad & Agentes de IA</span>
              <h3 className="text-xl font-bold text-white mb-3">Yape Track AI – Agente Autónomo Antifraude</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Co-desarrollador del agente inteligente antifraude para billeteras digitales presentado en la Hackathon del curso de inmersión en el <strong className="text-white">ITBA (Buenos Aires, Argentina)</strong>. Logró el <strong className="text-white">2º Puesto</strong> compitiendo entre los 6 equipos de la delegación.
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

          {/* Project 2: Ecosistema Portafolio Web & Consola Admin SOC */}
          <div className="bento-glass p-8 flex flex-col justify-between relative border-[#FF1E42]/40 gold-border">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FF1E42]/10 border border-[#FF1E42]/30 text-[#FF1E42] font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5" /> PROYECTO PRINCIPAL UX/UI & FULLSTACK
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Diseño de Producto Web, UX/UI & Consola SOC</span>
              <h3 className="text-xl font-bold text-white mb-3">Ecosistema Portafolio Web + Consola Admin SOC</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Diseño UX/UI integral con arquitectura <strong className="text-white">Bento Grid Dark Glassmorphism</strong> adaptativa y accesible (WCAG 2.1). Integrado con una <strong className="text-white">Consola Administrativa SOC</strong> con autenticación Bearer, visualización de telemetría de mensajes y almacenamiento Serverless en <strong className="text-white">Neon PostgreSQL</strong>.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Next.js 16</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">UX/UI Glassmorphism</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Tailwind CSS</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Neon PostgreSQL</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">SOC Admin Panel</span>
              </div>
            </div>

            <div>
              <a
                href="https://github.com/paulmr2704/portafolio-main"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF1E42] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#E6002E] transition-all"
              >
                <GithubIcon className="w-4 h-4" /> Repositorio GitHub <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Project 3: Beauty Salon Web Platform (Google UX Coursera) */}
          <div className="bento-glass p-8 flex flex-col justify-between border-cyan-500/30">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs px-3 py-1 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5" /> PROYECTO EN PROCESO - GOOGLE UX DESIGN
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Caso de Estudio UX (Design Thinking en 5 Fases)</span>
              <h3 className="text-xl font-bold text-white mb-3">Plataforma Web de Gestión & Reserva de Citas - Salón de Belleza</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Caso de estudio del certificado profesional <strong className="text-white">Google UX Design</strong>. Proceso completo de investigación de usuarios, flujos de reserva sin fricción, Wireframes Low-Fi y diseño de alta fidelidad (Hi-Fi) en Figma, con desarrollo de prototipo frontend interactivo en Vite y React.
              </p>

              <div className="flex flex-wrap gap-2 mb-6 font-mono text-xs">
                <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded border border-cyan-500/20">Google UX</span>
                <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded border border-cyan-500/20">Figma Hi-Fi</span>
                <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded border border-cyan-500/20">Design Thinking</span>
                <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded border border-cyan-500/20">React + Vite</span>
              </div>
            </div>

            <div className="space-y-3 bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-3.5">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Estado: En desarrollo local
                </span>
                <span className="font-bold">75%</span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-3">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-[75%]" />
              </div>
              
              <button
                type="button"
                onClick={() => setActiveModalSalon(true)}
                className="w-full bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all group hover:bg-cyan-500/20 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Ver Capturas de Avance (4 Pantallas)</span>
              </button>
            </div>
          </div>

          {/* Project 4: Arquitectura Zero Trust & STRIDE (Javeriana & UPC) */}
          <div className="bento-glass p-8 flex flex-col justify-between relative border-[#FF1E42]/30">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-[#FF1E42]/10 border border-[#FF1E42]/30 text-[#FF1E42] font-mono text-xs px-3 py-1 rounded-full mb-4">
                <ShieldCheck className="w-3.5 h-3.5" /> CASO DE ESTUDIO - JAVERIANA & UPC
              </div>

              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Arquitectura de Ciberseguridad & Riesgos</span>
              <h3 className="text-xl font-bold text-white mb-3">Diseño Zero Trust & Evaluación de Riesgos STRIDE</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Análisis de vulnerabilidades (SQLi, Broken Auth) y modelado de amenazas <strong className="text-white">STRIDE</strong> para portal transaccional corporativo. Diseño de solución de <strong className="text-white">Defensa en Profundidad (5 Anillos)</strong> con 13 controles integrados (ZTNA, Microsegmentación, WAF L7, EDR, mTLS, SIEM Inmutable).
              </p>

              <div className="flex flex-wrap gap-2 mb-4 font-mono text-xs">
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">Zero Trust</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">STRIDE</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">WAF L7</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">ISO 27001</span>
                <span className="bg-[#FF1E42]/10 text-[#FF1E42] px-2.5 py-1 rounded border border-[#FF1E42]/20">OWASP Top 10</span>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setSelectedDiagram('/javeriana-zerotrust.jpg')}
                className="w-full mb-3 bg-white/5 border border-white/10 hover:border-[#FF1E42] text-white py-2.5 px-4 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all group hover:bg-[#FF1E42]/10 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#FF1E42] group-hover:scale-110 transition-transform" />
                <span>Ver Evidencias del Caso (3 Diagramas)</span>
              </button>

              <div className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                Pontificia Universidad Javeriana & UPC (2026)
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Evidence Modal: Javeriana */}
      <AnimatePresence>
        {selectedDiagram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedDiagram(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D080A] border border-[#FF1E42]/40 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(255,30,66,0.3)]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#060304]">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#FF1E42]" />
                  <h3 className="font-bold text-white text-sm md:text-base">
                    Evidencias Técnicas — Pontificia Universidad Javeriana & UPC
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDiagram(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Diagram Selector Tabs */}
              <div className="flex border-b border-white/10 bg-white/[0.02] p-2 gap-2 text-xs overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTabDiagram('zerotrust')}
                  className={`px-3.5 py-2 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabDiagram === 'zerotrust'
                      ? 'bg-[#FF1E42] text-white shadow-[0_0_15px_rgba(255,30,66,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  1. Arquitectura Zero Trust (TO-BE)
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabDiagram('stride')}
                  className={`px-3.5 py-2 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabDiagram === 'stride'
                      ? 'bg-[#FF1E42] text-white shadow-[0_0_15px_rgba(255,30,66,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  2. Matriz de Riesgos STRIDE
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabDiagram('riesgos')}
                  className={`px-3.5 py-2 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabDiagram === 'riesgos'
                      ? 'bg-[#FF1E42] text-white shadow-[0_0_15px_rgba(255,30,66,0.4)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  3. Formato Gerencial / C-Suite
                </button>
              </div>

              {/* Modal Body / Image Viewer */}
              <div className="p-4 overflow-auto flex-1 flex flex-col items-center justify-center bg-black/40">
                <p className="text-xs text-slate-400 font-mono mb-3 text-center">
                  {diagramMap[activeTabDiagram].title}
                </p>
                <div className="relative rounded-lg overflow-hidden border border-white/10 max-h-[60vh] flex items-center justify-center">
                  <img
                    src={diagramMap[activeTabDiagram].src}
                    alt={diagramMap[activeTabDiagram].title}
                    className="max-h-[60vh] w-auto object-contain rounded"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Evidence Modal: Beauty Salon */}
      <AnimatePresence>
        {activeModalSalon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveModalSalon(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0D080A] border border-cyan-500/40 rounded-2xl max-w-md w-full max-h-[95vh] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(6,182,212,0.2)]"
            >
              {/* Modal Header */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#060304]">
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-sm md:text-base">
                    Capturas de Avance — Salón de Belleza
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModalSalon(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tab Selector */}
              <div className="flex border-b border-white/10 bg-white/[0.02] p-2 gap-2 text-xs overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTabSalon('inicio')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabSalon === 'inicio'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  1. Inicio
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabSalon('reservar')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabSalon === 'reservar'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  2. Reservar
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabSalon('portafolio')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabSalon === 'portafolio'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  3. Portafolio
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTabSalon('perfil')}
                  className={`px-3 py-1.5 rounded-lg font-semibold transition-all shrink-0 cursor-pointer ${
                    activeTabSalon === 'perfil'
                      ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  4. Perfil
                </button>
              </div>

              {/* Image Viewer */}
              <div className="p-4 overflow-auto flex-1 flex flex-col items-center justify-center bg-black/40">
                <p className="text-xs text-slate-400 font-mono mb-3 text-center">
                  {salonMap[activeTabSalon].title}
                </p>
                <div className="relative rounded-lg overflow-hidden border border-white/10 max-h-[60vh] flex items-center justify-center">
                  <img
                    src={salonMap[activeTabSalon].src}
                    alt={salonMap[activeTabSalon].title}
                    className="max-h-[60vh] w-auto object-contain rounded"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
