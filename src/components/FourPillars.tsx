'use client';

import { useState } from 'react';
import { Brain, Shield, Bot, PieChart, CheckCircle2, GraduationCap, Lock, Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FourPillars() {
  const [activeTab, setActiveTab] = useState<'psicologia' | 'ciberseguridad' | 'ia' | 'ux-data'>('psicologia');

  return (
    <motion.section 
      id="pilares" 
      className="py-20 relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            COMPETENCIAS CORE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Los 4 Pilares de mi Perfil Técnico y Humano</h2>
          <p className="text-slate-400 mt-2">Selecciona cada área para conocer cómo integro la ciencia del comportamiento con la tecnología.</p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <button
            onClick={() => setActiveTab('psicologia')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'psicologia'
                ? 'bg-[#FF1E42] border-[#FF1E42] text-white shadow-[0_4px_20px_rgba(255,30,66,0.4)]'
                : 'bento-glass text-slate-300 hover:border-[#FF1E42]'
            }`}
          >
            <Brain className="w-5 h-5" /> 1. Psicología & Factor Humano
          </button>

          <button
            onClick={() => setActiveTab('ciberseguridad')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ciberseguridad'
                ? 'bg-[#FF1E42] border-[#FF1E42] text-white shadow-[0_4px_20px_rgba(255,30,66,0.4)]'
                : 'bento-glass text-slate-300 hover:border-[#FF1E42]'
            }`}
          >
            <Shield className="w-5 h-5" /> 2. Ciberseguridad & SOC
          </button>

          <button
            onClick={() => setActiveTab('ia')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ia'
                ? 'bg-[#FF1E42] border-[#FF1E42] text-white shadow-[0_4px_20px_rgba(255,30,66,0.4)]'
                : 'bento-glass text-slate-300 hover:border-[#FF1E42]'
            }`}
          >
            <Bot className="w-5 h-5" /> 3. IA & Agentes Autónomos
          </button>

          <button
            onClick={() => setActiveTab('ux-data')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              activeTab === 'ux-data'
                ? 'bg-[#FF1E42] border-[#FF1E42] text-white shadow-[0_4px_20px_rgba(255,30,66,0.4)]'
                : 'bento-glass text-slate-300 hover:border-[#FF1E42]'
            }`}
          >
            <PieChart className="w-5 h-5" /> 4. UX/UI & Análisis de Datos
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="bento-glass p-8 md:p-10">
          {activeTab === 'psicologia' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Brain className="w-7 h-7 text-[#FF1E42]" /> Psicología Organizacional & Factor Humano en Tecnología
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Cursando el 3er ciclo en la <strong className="text-white">Universidad Peruana de Ciencias Aplicadas (UPC)</strong>. Enfocado en la ingeniería social, la mitigación de riesgos humanos en ciberseguridad, el diseño centrado en personas y la dinámica de grupos de alto rendimiento.
                </p>
                <ul className="space-y-2.5 pt-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Ingeniería Social & Phishing Defensivo:</strong> Análisis del comportamiento humano ante vectores de ataque.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Psicología de la Usabilidad:</strong> Diseño intuitivo que minimiza el error humano en software crítico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Resolución de Conflictos & Trabajo bajo Presión:</strong> Comprobado en entornos operativos de alta demanda.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-white/10 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/upc-campus.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#FF1E42]/10 border border-[#FF1E42]/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-[#FF1E42]" />
                  </div>
                  <h4 className="font-bold text-white text-lg drop-shadow">UPC - Psicología</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Aplicación práctica en Ciberpsicología, Seguridad de la Información y Arquitectura Organizacional.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ciberseguridad' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Shield className="w-7 h-7 text-[#FF1E42]" /> Ciberseguridad, Operaciones SOC & Threat Hunting
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Certificado por la <strong className="text-white">UPC, ITBA (Argentina), Universidad Javeriana y Google</strong>. Especializado en monitoreo proactivo, análisis de logs y arquitectura de seguridad Zero Trust.
                </p>
                <ul className="space-y-2.5 pt-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">SIEM & Threat Hunting:</strong> Elastic / Kibana, sintaxis ES|QL y mapeo con MITRE ATT&CK.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Arquitectura Segura:</strong> Modelado de amenazas STRIDE, Defensa en Profundidad y prevención de SQLi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Herramientas Defensivas:</strong> Nmap, Wireshark, análisis de paquetes, SOAR y auditorías de seguridad.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-white/10 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/cyber-padlock.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#FF1E42]/10 border border-[#FF1E42]/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Lock className="w-7 h-7 text-[#FF1E42]" />
                  </div>
                  <h4 className="font-bold text-white text-lg drop-shadow">ISO/IEC 27001 & Zero Trust</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Aplicación de la tríada CIA (Confidencialidad, Integridad y Disponibilidad).
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ia' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Bot className="w-7 h-7 text-[#FF1E42]" /> Inteligencia Artificial & Desarrollo de Agentes Autónomos
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Co-desarrollador del proyecto <strong className="text-white">Yape Track AI</strong> galardonado con el <strong className="text-white">2º Puesto en la Hackathon Internacional de Ciberseguridad e IA</strong> (ITBA, Buenos Aires).
                </p>
                <ul className="space-y-2.5 pt-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Agentes de Seguridad:</strong> Automatización de respuesta ante fraudes en tiempo real.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Prompt Engineering & Seguridad LLM:</strong> Prevención de Prompt Injection y Jailbreaking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Desarrollo con Agentes:</strong> Uso avanzado de plataformas como Google Antigravity IDE.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-amber-500/30 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/itba-group.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Trophy className="w-7 h-7 text-amber-400" />
                  </div>
                  <h4 className="font-bold text-white text-lg drop-shadow">2º Puesto ITBA Argentina</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Competencia técnica contra 6 equipos internacionales de alto rendimiento.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ux-data' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <PieChart className="w-7 h-7 text-[#FF1E42]" /> Diseño UX/UI, Prototipado & Análisis de Datos
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Certificado por <strong className="text-white">Google en UX Design y Data Analytics</strong>. Combino la recolección de datos cuantitativos con el diseño visual de alta fidelidad.
                </p>
                <ul className="space-y-2.5 pt-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Diseño de Experiencia (UX):</strong> Wireframing, prototipos interactivos en Figma, mapas de empatía.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Análisis de Datos:</strong> Limpieza de datos, consultas SQL, programación en R y visualización.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1E42] shrink-0 mt-0.5" />
                    <span><strong className="text-white">Desarrollo Web & UI:</strong> Creación de interfaces dinámicas y responsive design.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-cyan-500/30 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/ux-data.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Award className="w-7 h-7 text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-white text-lg drop-shadow">Google Double Professional</h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Certificación Dual Oficial en UX Design y Análisis de Datos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </motion.section>
  );
}
