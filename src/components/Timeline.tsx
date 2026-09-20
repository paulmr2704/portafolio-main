'use client';

import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Timeline() {
  const experiences = [
    {
      date: 'Dic 2025 – Abr 2026',
      role: 'Gestión Administrativa & Resolución de Casos Complejos',
      company: 'Trabajo Independiente',
      desc: 'Gestión integral y exitosa de un caso complejo de cobertura de seguro automotor (SOAT). Conciliación con entidades sanitarias y aseguradora, logrando 100% de cobertura médica y adjudicación de indemnización.'
    },
    {
      date: 'Ene 2025 – Mar 2025',
      role: 'Recepcionista Nocturno',
      company: 'Hospedaje (Turno 7:00 pm - 7:00 am)',
      desc: 'Gestión integral de recepción nocturna, atención al huésped y resolución autónoma de incidencias en situaciones de alta responsabilidad.'
    },
    {
      date: 'Sep 2023 – Abr 2024',
      role: 'Atención al Cliente & Soporte Operativo',
      company: 'Pollería El Doradito',
      desc: 'Desempeño polifuncional en salón, delivery, asistente de cocina y parrillas bajo alta demanda de comensales.'
    },
    {
      date: 'May 2023 – Jul 2023',
      role: 'Guardia de Seguridad & Control de Accesos',
      company: 'I.E. Agropecuario Puerto Sungaro',
      desc: 'Vigilancia perimetral en turnos de 24 horas, resguardo de infraestructura educativa y control de accesos.'
    },
    {
      date: 'Ago 2019 – Jul 2021',
      role: 'Atención al Cliente & Ventas',
      company: 'Farmacia Naturista',
      desc: 'Asesoramiento y venta de productos naturales, desarrollando escucha activa, empatía y habilidades interpersonales.'
    }
  ];

  return (
    <section 
      id="experiencia" 
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#C7B8A6] bg-[#1F2A44] border border-[#C7B8A6]/30 px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            TRAYECTORIA OPERATIVA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#F2EFE8]">Experiencia Laboral & Resiliencia Polifuncional</h2>
          <p className="text-[#C7B8A6] mt-2">Historial de roles donde he aplicado autonomía, resolución de problemas y trabajo bajo presión.</p>
        </div>

        <div className="max-w-3xl mx-auto relative border-l-2 border-[#C7B8A6]/30 pl-8 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-400"></div>
              
              <div className="bento-glass p-6">
                <span className="text-xs font-mono text-[#C7B8A6] block mb-1">{exp.date}</span>
                <h4 className="text-lg font-bold text-[#F2EFE8] mb-1">{exp.role}</h4>
                <p className="text-xs font-semibold text-[#C7B8A6] mb-3">{exp.company}</p>
                <p className="text-[#C7B8A6] text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
