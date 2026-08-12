'use client';

import { useState, useRef } from 'react';
import { LineChart, ShieldCheck, Palette, Server, ExternalLink, CheckCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

interface Course {
  num: string;
  title: string;
  desc: string;
}

interface CertGroup {
  title: string;
  courseraUrl: string;
  courses: Course[];
}

export default function GoogleCourses() {
  const [activeCert, setActiveCert] = useState<'g-analytics' | 'g-cyber' | 'g-ux' | 'g-it'>('g-analytics');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCertChange = (key: 'g-analytics' | 'g-cyber' | 'g-ux' | 'g-it') => {
    setActiveCert(key);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };

  const certificatesData: Record<string, CertGroup> = {
    'g-analytics': {
      title: 'Google Data Analytics Certificado Profesional (9 Cursos)',
      courseraUrl: 'https://coursera.org/share/c344e45efd285305ddc11440428980bb',
      courses: [
        { num: 'Curso 1 de 9', title: 'Foundations: Data, Data, Everywhere', desc: 'Introducción al ecosistema de datos, pensamiento analítico, ética de datos y toma de decisiones empresariales.' },
        { num: 'Curso 2 de 9', title: 'Ask Questions to Make Data-Driven Decisions', desc: 'Formulación de preguntas de negocio, comunicación con stakeholders y estructuración de proyectos de análisis.' },
        { num: 'Curso 3 de 9', title: 'Prepare Data for Exploration', desc: 'Recolección y almacenamiento de datos, estructuras de base de datos, privacidad e integridad de fuentes de información.' },
        { num: 'Curso 4 de 9', title: 'Process Data from Dirty to Clean', desc: 'Técnicas avanzadas de limpieza de datos con SQL y hojas de cálculo, eliminación de duplicados e inconsistencias.' },
        { num: 'Curso 5 de 9', title: 'Analyze Data to Answer Questions', desc: 'Filtrado, ordenamiento, consultas compuestas con SQL y agregación de datos para responder preguntas clave.' },
        { num: 'Curso 6 de 9', title: 'Share Data Through the Art of Visualization', desc: 'Storytelling interactivo de datos, creación de dashboards eficientes y presentación de hallazgos visuales.' },
        { num: 'Curso 7 de 9', title: 'Data Analysis with R Programming', desc: 'Programación estadística en R, paquetes RStudio (Tidyverse, ggplot2) y automatización de reportes.' },
        { num: 'Curso 8 de 9', title: 'Google Data Analytics Capstone: Case Study', desc: 'Desarrollo de un caso de estudio real end-to-end aplicando limpieza, análisis, R y visualización.' },
        { num: 'Curso 9 de 9', title: 'Accelerate Your Job Search with AI', desc: 'Uso estratégico de Inteligencia Artificial para optimización de análisis de datos y flujo de trabajo.' }
      ]
    },
    'g-cyber': {
      title: 'Google Cybersecurity Certificado Profesional (8 Cursos)',
      courseraUrl: 'https://coursera.org/share/787a71d232444e67deff15a385dec27b',
      courses: [
        { num: 'Curso 1 de 8', title: 'Foundations of Cybersecurity', desc: 'Principios de seguridad de la información, marco de ciberseguridad NIST y la tríada CIA (Confidencialidad, Integridad y Disponibilidad).' },
        { num: 'Curso 2 de 8', title: 'Play It Safe: Manage Security Risks', desc: 'Evaluación y gestión de riesgos, auditoría de seguridad, respuesta ante incidentes y normativas.' },
        { num: 'Curso 3 de 8', title: 'Connect and Protect: Networks and Network Security', desc: 'Arquitectura de redes informáticas, modelo TCP/IP, Firewalls, VPNs y protección contra intrusiones.' },
        { num: 'Curso 4 de 8', title: 'Tools of the Trade: Linux and SQL', desc: 'Administración de sistemas mediante consola Bash de Linux y análisis de bases de datos de eventos con SQL.' },
        { num: 'Curso 5 de 8', title: 'Assets, Threats, and Vulnerabilities', desc: 'Identificación de activos críticos, vectores de ataque, tipos de malware y superficie de exposición.' },
        { num: 'Curso 6 de 8', title: 'Sound the Alarm: Detection and Response', desc: 'Operaciones de SOC, SIEM (Elastic/Kibana), análisis de paquetes (PCAP) e investigación de incidentes.' },
        { num: 'Curso 7 de 8', title: 'Automate Cybersecurity Tasks with Python', desc: 'Scripting defensivo en Python para automatizar el análisis de logs y la detección proactiva de amenazas.' },
        { num: 'Curso 8 de 8', title: 'Put It to Work: Prepare for Cybersecurity Jobs', desc: 'Simulación de respuesta ante incidentes cibernéticos reales, documentación y comunicación de riesgos.' }
      ]
    },
    'g-ux': {
      title: 'Google UX Design Certificado Profesional (8 Cursos)',
      courseraUrl: 'https://coursera.org/share/35be34b72871a2fcf3c51551c85582bf',
      courses: [
        { num: 'Curso 1 de 8', title: 'Foundations of User Experience (UX) Design', desc: 'Principios del diseño centrado en el usuario, accesibilidad (WCAG) e investigación de usuarios.' },
        { num: 'Curso 2 de 8', title: 'Start the UX Design Process: Empathize, Define, Ideate', desc: 'Mapas de empatía, creación de personas de usuario, historias de usuario y planteamiento de problemas.' },
        { num: 'Curso 3 de 8', title: 'Build Wireframes and Low-Fidelity Prototypes', desc: 'Bocetado rápido (Crazy Eights), arquitectura de información y prototipado interactivo de baja fidelidad.' },
        { num: 'Curso 4 de 8', title: 'Conduct UX Research and Test Early Concepts', desc: 'Planificación y ejecución de pruebas de usabilidad, recolección de feedback cualitativo y cuantitativo.' },
        { num: 'Curso 5 de 8', title: 'Create High-Fidelity Designs and Prototypes in Figma', desc: 'Sistemas de diseño, componentes reutilizables, variantes y prototipos interactivos avanzados en Figma.' },
        { num: 'Curso 6 de 8', title: 'Build Dynamic User Interfaces (UI) for Websites', desc: 'Principios de diseño visual, jerarquía tipográfica, teoría del color y diseño responsive adaptativo.' },
        { num: 'Curso 7 de 8', title: 'Design a User Experience for Social Good', desc: 'Diseño UX orientado a productos de impacto social y preparación de casos de estudio de producto.' },
        { num: 'Curso 8 de 8', title: 'Accelerate Your Job Search with AI', desc: 'Uso de herramientas de IA Generativa (Figma AI) para acelerar el prototipado y flujos UX.' }
      ]
    },
    'g-it': {
      title: 'Google IT Support Certificado Profesional (6 Cursos)',
      courseraUrl: 'https://coursera.org/share/41fdf4c63b1cef7fbc245b050c0f111b',
      courses: [
        { num: 'Curso 1 de 6', title: 'Technical Support Fundamentals', desc: 'Fundamentos de hardware, código binario, sistemas operativos, redes y resolución de problemas técnicos.' },
        { num: 'Curso 2 de 6', title: 'The Bits and Bytes of Computer Networking', desc: 'Modelo OSI, subredes IP, protocolos de enrutamiento, DNS, DHCP y diagnóstico de redes.' },
        { num: 'Curso 3 de 6', title: 'Operating Systems and You: Becoming a Power User', desc: 'Administración avanzada de Windows (PowerShell/Active Directory) y Linux (CLI/Permisos).' },
        { num: 'Curso 4 de 6', title: 'System Administration and IT Infrastructure Services', desc: 'Gestión de servidores, servicios de red, almacenamiento en la nube e infraestructura TI.' },
        { num: 'Curso 5 de 6', title: 'IT Security: Defense against the digital dark arts', desc: 'Criptografía (simétrica/asimétrica), autenticación multifactor (MFA), seguridad WiFi y defensas.' },
        { num: 'Curso 6 de 6', title: 'Accelerate Your Job Search with AI', desc: 'Integración de IA para soporte de infraestructura e investigación de soluciones tecnológicas.' }
      ]
    }
  };

  const currentGroup = certificatesData[activeCert];

  return (
    <section 
      id="habilidades" 
      className="py-20 bg-[#060304] relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            FORMACIÓN CERTIFICADA GOOGLE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Desglose de Cursos y Habilidades Certificadas (31 Cursos)</h2>
          <p className="text-slate-400 mt-2">Explora los módulos completados con sus enlaces de verificación oficial en Coursera.</p>
        </div>

        {/* Certificate Selectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <button
            type="button"
            onClick={() => handleCertChange('g-analytics')}
            className={`bento-glass p-5 text-left transition-all cursor-pointer active:scale-95 ${
              activeCert === 'g-analytics' ? 'border-[#FF1E42] bg-[#FF1E42]/10' : 'hover:border-[#FF1E42]/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <LineChart className="w-6 h-6 text-[#FF1E42]" />
              <div>
                <h3 className="font-bold text-white text-base">Data Analytics</h3>
                <span className="text-xs text-slate-400">9 Cursos completados</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">Limpieza de datos, SQL, R Programming y Storytelling.</p>
          </button>

          <button
            type="button"
            onClick={() => handleCertChange('g-cyber')}
            className={`bento-glass p-5 text-left transition-all cursor-pointer active:scale-95 ${
              activeCert === 'g-cyber' ? 'border-[#FF1E42] bg-[#FF1E42]/10' : 'hover:border-[#FF1E42]/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-[#FF1E42]" />
              <div>
                <h3 className="font-bold text-white text-base">Cybersecurity</h3>
                <span className="text-xs text-slate-400">8 Cursos completados</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">Redes, Linux, SIEM Elastic, Python y NIST.</p>
          </button>

          <button
            type="button"
            onClick={() => handleCertChange('g-ux')}
            className={`bento-glass p-5 text-left transition-all cursor-pointer active:scale-95 ${
              activeCert === 'g-ux' ? 'border-[#FF1E42] bg-[#FF1E42]/10' : 'hover:border-[#FF1E42]/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Palette className="w-6 h-6 text-[#FF1E42]" />
              <div>
                <h3 className="font-bold text-white text-base">UX Design</h3>
                <span className="text-xs text-slate-400">8 Cursos completados</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">Diseño centrado en el usuario, Figma y Wireframes.</p>
          </button>

          <button
            type="button"
            onClick={() => handleCertChange('g-it')}
            className={`bento-glass p-5 text-left transition-all cursor-pointer active:scale-95 ${
              activeCert === 'g-it' ? 'border-[#FF1E42] bg-[#FF1E42]/10' : 'hover:border-[#FF1E42]/50'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Server className="w-6 h-6 text-[#FF1E42]" />
              <div>
                <h3 className="font-bold text-white text-base">IT Support</h3>
                <span className="text-xs text-slate-400">6 Cursos completados</span>
              </div>
            </div>
            <p className="text-xs text-slate-400">Administración de sistemas, redes e infraestructura.</p>
          </button>

        </div>

        {/* Courses Display Area */}
        <div className="bento-glass p-5 md:p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-5 mb-5 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#FF1E42]" /> {currentGroup.title}
              </h3>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 mt-1">
                <Lock className="w-3.5 h-3.5" /> Verificado por Google & Coursera
              </span>
            </div>

            <a
              href={currentGroup.courseraUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF1E42] text-white text-xs px-4 py-2 rounded-lg font-semibold hover:bg-[#E6002E] transition-all shadow-[0_0_15px_rgba(255,30,66,0.4)]"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Verificar Credencial Oficial en Coursera
            </a>
          </div>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-3.5 pb-3 scroll-smooth [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-[#FF1E42]/40 [&::-webkit-scrollbar-thumb]:rounded-full"
          >
            {currentGroup.courses.map((course, idx) => (
              <div 
                key={idx} 
                className="min-w-[210px] sm:min-w-[240px] md:min-w-[260px] max-w-[270px] shrink-0 bg-white/[0.02] border border-white/5 p-4 rounded-xl hover:border-[#FF1E42]/50 hover:bg-[#FF1E42]/[0.02] transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E42]/0 via-[#FF1E42]/5 to-[#FF1E42]/0 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
                <div>
                  <span className="text-[11px] font-mono text-[#FF1E42] block mb-1">{course.num}</span>
                  <h4 className="font-bold text-white text-sm md:text-base mb-1.5 leading-snug">{course.title}</h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{course.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

