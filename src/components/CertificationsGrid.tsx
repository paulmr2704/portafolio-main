'use client';

import { Award, ExternalLink, ShieldAlert, PlaneTakeoff, Truck, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CertificationsGrid() {
  return (
    <section 
      id="certificaciones" 
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            RESPALDO ACADÉMICO Y CERTIFICACIONES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Certificaciones & Misiones Internacionales</h2>
          <p className="text-slate-400 mt-2">Acreditaciones oficiales emitidas por instituciones líderes de Perú, Argentina, Colombia y la Comunidad IA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Cert 1: PRONABEC Bootcamp de Empleabilidad 2026 */}
          <div className="bento-glass p-6 flex flex-col justify-between gold-border">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <span className="text-[11px] font-mono text-slate-400">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">Bootcamp de Empleabilidad (5 hrs)</h4>
              <p className="text-xs font-semibold text-blue-400 mb-2">PRONABEC – Minedu (Perú)</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Constancia de participación en el Bootcamp "Tu viaje al mundo laboral" (Edición 1 2026), otorgada por el Programa Nacional de Becas y Crédito Educativo.
              </p>
            </div>
            <div>
              <a
                href="/BOOTCAMP-EMPLEABILIDAD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/30 text-xs py-2 px-3 rounded-lg font-semibold hover:bg-blue-500/20 transition-all mb-3 w-full"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Ver Constancia PDF Oficial
              </a>
              <div className="rounded-lg overflow-hidden border border-white/10 relative h-44 bg-slate-900/80 p-1">
                <img src="/cert-bootcamp-empleabilidad.png" alt="Constancia Oficial PRONABEC" className="w-full h-full object-contain rounded" />
              </div>
            </div>
          </div>

          {/* Cert 2: Congreso IA LATAM 2026 */}
          <div className="bento-glass p-6 flex flex-col justify-between gold-border">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Sparkles className="w-8 h-8 text-amber-400" />
                <span className="text-[11px] font-mono text-slate-400">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">1er Congreso IA LATAM 2026 (20 hrs)</h4>
              <p className="text-xs font-semibold text-[#FF1E42] mb-2">Comunidad IA LATAM</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Participación certificada en conferencias internacionales sobre IA Generativa, arquitectura de modelos y ética digital.
              </p>
            </div>
            <div>
              <a
                href="https://openchapitas.org/credentials/a0c04b29-b0bc-4a44-be1d-a949157a9206?v=3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs py-2 px-3 rounded-lg font-semibold hover:bg-amber-500/20 transition-all mb-3 w-full"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Verificar Credencial OpenChapitas
              </a>
              <div className="rounded-lg overflow-hidden border border-white/10 relative h-40 bg-white/5">
                <img src="/cert-ia-latam.jpg" alt="Certificado 1er Congreso IA LATAM 2026" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Cert 3: Mision Buenos Aires (ITBA & UPC) */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <PlaneTakeoff className="w-8 h-8 text-[#FF1E42]" />
                <span className="text-[11px] font-mono text-slate-400">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">Ciberseguridad con IA (30 hrs)</h4>
              <p className="text-xs font-semibold text-[#FF1E42] mb-2">UPC (Perú) & ITBA (Argentina)</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Misión Académica en Buenos Aires: Operaciones SOC, SIEM Elastic/Kibana, Threat Hunting, Nmap, Prompt Eng y visita técnica a <strong className="text-white">Google Argentina</strong>.
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10 relative h-40 bg-white/5">
              <img src="/cert-itba.jpg" alt="Certificado ITBA UPC" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cert 4: Javeriana */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <ShieldAlert className="w-8 h-8 text-[#FF1E42]" />
                <span className="text-[11px] font-mono text-slate-400">Julio 2026</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">Arquitectura de Ciberseguridad con IA</h4>
              <p className="text-xs font-semibold text-[#FF1E42] mb-2">Pontificia Universidad Javeriana & UPC</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Winter School: Modelado STRIDE, inyecciones SQL, Zero Trust, Defensa en Profundidad y detección proactiva de amenazas.
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10 relative h-40 bg-white/5">
              <img src="/cert-javeriana.jpg" alt="Certificado Javeriana" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cert 5: Certimaq */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Truck className="w-8 h-8 text-[#FF1E42]" />
                <span className="text-[11px] font-mono text-slate-400">2025 - 2026</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">Operador Múltiple & Seguridad</h4>
              <p className="text-xs font-semibold text-[#FF1E42] mb-2">CERTIMAQ GROUP SAC</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Mantenimiento e Inducción de Seguridad para Maquinaria Pesada (Retroexcavadora, Cargador Frontal y Excavadora Hidráulica).
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10 relative h-40 bg-white/5">
              <img src="/cert-certimaq.jpg" alt="Certificado Certimaq" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cert 6: UPC Congreso 2025 */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-8 h-8 text-[#FF1E42]" />
                <span className="text-[11px] font-mono text-slate-400">Noviembre 2025</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">IA & Sistemas Empresariales Seguros</h4>
              <p className="text-xs font-semibold text-[#FF1E42] mb-2">UPC (Perú)</p>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Asistencia al Congreso Internacional 2025 de Ingeniería de Sistemas, Ciberseguridad y Sistemas EPE.
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-white/10 relative h-40 bg-white/5">
              <img src="/cert-upc.jpg" alt="Certificado UPC 2025" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

