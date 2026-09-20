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
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C7B8A6] bg-[#1F2A44] border border-[#C7B8A6]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            RESPALDO ACADÉMICO Y CERTIFICACIONES
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F2EFE8]">Certificaciones & Misiones Internacionales</h2>
          <p className="text-[#C7B8A6] mt-2">Acreditaciones oficiales emitidas por instituciones líderes de Perú, Argentina, Colombia y la Comunidad IA.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Cert 1: PRONABEC Bootcamp de Empleabilidad 2026 */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Briefcase className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">Bootcamp de Empleabilidad (5 hrs)</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">PRONABEC – Minedu (Perú)</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Constancia de participación en el Bootcamp "Tu viaje al mundo laboral" (Edición 1 2026), otorgada por el Programa Nacional de Becas y Crédito Educativo.
              </p>
            </div>
            <div>
              <a
                href="/BOOTCAMP-EMPLEABILIDAD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#1F2A44] text-[#C7B8A6] border border-[#C7B8A6]/30 text-xs py-2 px-3 rounded-lg font-semibold hover:bg-[#1F2A44]/80 hover:text-[#F2EFE8] transition-all w-full"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Ver Constancia PDF Oficial
              </a>
            </div>
          </div>

          {/* Cert 2: Congreso IA LATAM 2026 */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Sparkles className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">1er Congreso IA LATAM 2026 (20 hrs)</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">Comunidad IA LATAM</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Participación certificada en conferencias internacionales sobre IA Generativa, arquitectura de modelos y ética digital.
              </p>
            </div>
            <div>
              <a
                href="https://openchapitas.org/credentials/a0c04b29-b0bc-4a44-be1d-a949157a9206?v=3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#1F2A44] text-[#C7B8A6] border border-[#C7B8A6]/30 text-xs py-2 px-3 rounded-lg font-semibold hover:bg-[#1F2A44]/80 hover:text-[#F2EFE8] transition-all w-full"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Verificar Credencial OpenChapitas
              </a>
            </div>
          </div>

          {/* Cert 3: Mision Buenos Aires (ITBA & UPC) */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <PlaneTakeoff className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">Agosto 2026</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">Ciberseguridad con IA (30 hrs)</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">UPC (Perú) & ITBA (Argentina)</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Misión Académica en Buenos Aires: Operaciones SOC, SIEM Elastic/Kibana, Threat Hunting, Nmap, Prompt Eng y visita técnica a <strong className="text-[#F2EFE8]">Google Argentina</strong>.
              </p>
            </div>
            <div>
              <a
                href="https://v.pok.tech/r/9de06776-f5fb-49b9-9754-6aeb91fb56e1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 bg-[#1F2A44] text-[#C7B8A6] border border-[#C7B8A6]/30 text-xs py-2 px-3 rounded-lg font-semibold hover:bg-[#1F2A44]/80 hover:text-[#F2EFE8] transition-all w-full"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Verificar Credencial Oficial ITBA
              </a>
            </div>
          </div>

          {/* Cert 4: Javeriana */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <ShieldAlert className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">Julio 2026</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">Arquitectura de Ciberseguridad con IA</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">Pontificia Universidad Javeriana & UPC</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Winter School: Modelado STRIDE, inyecciones SQL, Zero Trust, Defensa en Profundidad y detección proactiva de amenazas.
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-[#C7B8A6]/30 relative h-40 bg-[#1F2A44]">
              <img src="/cert-javeriana.jpg" alt="Certificado Javeriana" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cert 5: Certimaq */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Truck className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">2025 - 2026</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">Operador Múltiple & Seguridad</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">CERTIMAQ GROUP SAC</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Mantenimiento e Inducción de Seguridad para Maquinaria Pesada (Retroexcavadora, Cargador Frontal y Excavadora Hidráulica).
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-[#C7B8A6]/30 relative h-40 bg-[#1F2A44]">
              <img src="/cert-certimaq.jpg" alt="Certificado Certimaq" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Cert 6: UPC Congreso 2025 */}
          <div className="bento-glass p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Award className="w-8 h-8 text-[#C7B8A6]" />
                <span className="text-[11px] font-mono text-[#C7B8A6]">Noviembre 2025</span>
              </div>
              <h4 className="font-bold text-[#F2EFE8] text-lg mb-1">IA & Sistemas Empresariales Seguros</h4>
              <p className="text-xs font-semibold text-[#C7B8A6] mb-2">UPC (Perú)</p>
              <p className="text-[#C7B8A6] text-xs leading-relaxed mb-4">
                Asistencia al Congreso Internacional 2025 de Ingeniería de Sistemas, Ciberseguridad y Sistemas EPE.
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden border border-[#C7B8A6]/30 relative h-40 bg-[#1F2A44]">
              <img src="/cert-upc.jpg" alt="Certificado UPC 2025" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

