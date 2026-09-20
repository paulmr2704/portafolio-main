'use client';

import { useState } from 'react';
import { Brain, Shield, Bot, PieChart, CheckCircle2, GraduationCap, Lock, Trophy, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FourPillars() {
  const [activeTab, setActiveTab] = useState<'psicologia' | 'ciberseguridad' | 'ia' | 'ux-data'>('psicologia');

  return (
    <section 
      id="pilares" 
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C7B8A6] bg-[#1F2A44] border border-[#C7B8A6]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            COMPETENCIAS CORE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F2EFE8]">Los 4 Pilares de mi Perfil Técnico y Humano</h2>
          <p className="text-[#C7B8A6] mt-2">Selecciona cada área para conocer cómo integro la ciencia del comportamiento con la tecnología.</p>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('psicologia')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              activeTab === 'psicologia'
                ? 'bg-[#B46A55] border-[#B46A55] shadow-[0_4px_20px_rgba(180,106,85,0.4)] text-[#F2EFE8]'
                : 'bento-glass text-[#C7B8A6] hover:border-[#C7B8A6]/30'
            }`}
          >
            <Brain className="w-5 h-5" /> 1. Psicología & Factor Humano
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ciberseguridad')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              activeTab === 'ciberseguridad'
                ? 'bg-[#B46A55] border-[#B46A55] shadow-[0_4px_20px_rgba(180,106,85,0.4)] text-[#F2EFE8]'
                : 'bento-glass text-[#C7B8A6] hover:border-[#C7B8A6]/30'
            }`}
          >
            <Shield className="w-5 h-5" /> 2. Ciberseguridad & SOC
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ia')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              activeTab === 'ia'
                ? 'bg-[#B46A55] border-[#B46A55] shadow-[0_4px_20px_rgba(180,106,85,0.4)] text-[#F2EFE8]'
                : 'bento-glass text-[#C7B8A6] hover:border-[#C7B8A6]/30'
            }`}
          >
            <Bot className="w-5 h-5" /> 3. IA & Agentes Autónomos
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ux-data')}
            className={`p-4 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
              activeTab === 'ux-data'
                ? 'bg-[#B46A55] border-[#B46A55] shadow-[0_4px_20px_rgba(180,106,85,0.4)] text-[#F2EFE8]'
                : 'bento-glass text-[#C7B8A6] hover:border-[#C7B8A6]/30'
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
                <h3 className="text-2xl font-bold text-[#F2EFE8] flex items-center gap-2">
                  <Brain className="w-7 h-7 text-[#C7B8A6]" /> Psicología Organizacional & Factor Humano en Tecnología
                </h3>
                <p className="text-[#C7B8A6] leading-relaxed">
                  Cursando el 3er ciclo en la <strong className="text-[#F2EFE8]">Universidad Peruana de Ciencias Aplicadas (UPC)</strong>. Enfocado en la ingeniería social, la mitigación de riesgos humanos en ciberseguridad, el diseño centrado en personas y la dinámica de grupos de alto rendimiento.
                </p>
                <ul className="space-y-2.5 pt-2 text-[#C7B8A6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Ingeniería Social & Phishing Defensivo:</strong> Análisis del comportamiento humano ante vectores de ataque.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Psicología de la Usabilidad:</strong> Diseño intuitivo que minimiza el error humano en software crítico.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Resolución de Conflictos & Trabajo bajo Presión:</strong> Comprobado en entornos operativos de alta demanda.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-[#C7B8A6]/30 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/upc-campus.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#1F2A44] border border-[#C7B8A6]/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <GraduationCap className="w-7 h-7 text-[#C7B8A6]" />
                  </div>
                  <h4 className="font-bold text-[#F2EFE8] text-lg drop-shadow">UPC - Psicología</h4>
                  <p className="text-xs text-[#C7B8A6] mt-2 leading-relaxed">
                    Aplicación práctica en Ciberpsicología, Seguridad de la Información y Arquitectura Organizacional.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ciberseguridad' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#F2EFE8] flex items-center gap-2">
                  <Shield className="w-7 h-7 text-[#C7B8A6]" /> Ciberseguridad, Operaciones SOC & Threat Hunting
                </h3>
                <p className="text-[#C7B8A6] leading-relaxed">
                  Certificado por la <strong className="text-[#F2EFE8]">UPC, ITBA (Argentina), Universidad Javeriana y Google</strong>. Especializado en monitoreo proactivo, análisis de logs y arquitectura de seguridad Zero Trust.
                </p>
                <ul className="space-y-2.5 pt-2 text-[#C7B8A6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">SIEM & Threat Hunting:</strong> Elastic / Kibana, sintaxis ES|QL y mapeo con MITRE ATT&CK.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Arquitectura Segura:</strong> Modelado de amenazas STRIDE, Defensa en Profundidad y prevención de SQLi.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Herramientas Defensivas:</strong> Nmap, Wireshark, análisis de paquetes, SOAR y auditorías de seguridad.</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-4 relative overflow-hidden rounded-2xl border border-[#C7B8A6]/30 p-6 text-center group min-h-[220px] flex flex-col justify-center items-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('/cyber-padlock.png')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0608] via-[#0A0608]/90 to-[#0A0608]/75" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-[#1F2A44] border border-[#C7B8A6]/30 flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                    <Lock className="w-7 h-7 text-[#C7B8A6]" />
                  </div>
                  <h4 className="font-bold text-[#F2EFE8] text-lg drop-shadow">ISO/IEC 27001 & Zero Trust</h4>
                  <p className="text-xs text-[#C7B8A6] mt-2 leading-relaxed">
                    Aplicación de la tríada CIA (Confidencialidad, Integridad y Disponibilidad).
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ia' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#F2EFE8] flex items-center gap-2">
                  <Bot className="w-7 h-7 text-[#C7B8A6]" /> Inteligencia Artificial & Desarrollo de Agentes Autónomos
                </h3>
                <p className="text-[#C7B8A6] leading-relaxed">
                  Co-desarrollador del proyecto <strong className="text-[#F2EFE8]">Yape Track AI</strong> galardonado con el <strong className="text-[#F2EFE8]">2º Puesto en la Hackathon Internacional de Ciberseguridad e IA</strong> (ITBA, Buenos Aires).
                </p>
                <ul className="space-y-2.5 pt-2 text-[#C7B8A6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Agentes de Seguridad:</strong> Automatización de respuesta ante fraudes en tiempo real.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Prompt Engineering & Seguridad LLM:</strong> Prevención de Prompt Injection y Jailbreaking.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Desarrollo con Agentes:</strong> Uso avanzado de plataformas como Google Antigravity IDE.</span>
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
                  <h4 className="font-bold text-[#F2EFE8] text-lg drop-shadow">2º Puesto ITBA Argentina</h4>
                  <p className="text-xs text-[#C7B8A6] mt-2 leading-relaxed">
                    Competencia técnica contra 6 equipos internacionales de alto rendimiento.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ux-data' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl font-bold text-[#F2EFE8] flex items-center gap-2">
                  <PieChart className="w-7 h-7 text-[#C7B8A6]" /> Diseño UX/UI, Prototipado & Análisis de Datos
                </h3>
                <p className="text-[#C7B8A6] leading-relaxed">
                  Certificado por <strong className="text-[#F2EFE8]">Google en UX Design y Data Analytics</strong>. Combino la recolección de datos cuantitativos con el diseño visual de alta fidelidad.
                </p>
                <ul className="space-y-2.5 pt-2 text-[#C7B8A6]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Ecosistema Web & Consola SOC:</strong> Diseño UX/UI Glassmorphism, telemetría en tiempo real y base de datos Serverless Neon PostgreSQL.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Diseño de Experiencia (UX):</strong> Wireframing Low-Fi y prototipado Hi-Fi en Figma para la plataforma de reservas de belleza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#C7B8A6] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F2EFE8]">Análisis de Datos & R:</strong> Limpieza de datos, consultas complejas en SQL, programación en R y visualización de métricas.</span>
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
                  <h4 className="font-bold text-[#F2EFE8] text-lg drop-shadow">Google Double Professional</h4>
                  <p className="text-xs text-[#C7B8A6] mt-2 leading-relaxed">
                    Certificación Dual Oficial en UX Design y Análisis de Datos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
