import type { ProjectCaseStudy } from "@/types/portfolio";

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    slug: "yape-track-ai",
    featured: true,
    badge: "2º Puesto Internacional · Hackathon ITBA",
    badgeTone: "amber",
    category: "Ciberseguridad Aplicada & Agentes Autónomos de IA",
    title: "Yape Track AI – Agente Autónomo Antifraude para Billeteras Digitales",
    shortSummary:
      "Motor inteligente co-desarrollado en Buenos Aires (ITBA) capaz de evaluar señales de fraude transaccional e ingeniería social en tiempo real, alcanzando el 2º Puesto entre 6 equipos internacionales.",
    challenge:
      "El crecimiento explosivo de pagos inmediatos en Latinoamérica incrementó los vectores de fraude por suplantación, comprobantes falsos e ingeniería social, donde las reglas estáticas tradicionales reaccionan demasiado tarde.",
    architecture:
      "Arquitectura modular en Python basada en agentes autónomos especializados: ingesta y normalización de eventos transaccionales, análisis heurístico y contextual asistido por IA para puntuar riesgo en milisegundos, y generación explicable de alertas accionables para el usuario y el equipo antifraude.",
    impact:
      "Galardonado con el 2º Puesto en la Hackathon de Ciberseguridad e IA del Instituto Tecnológico de Buenos Aires (ITBA), destacando por unir viabilidad técnica, baja fricción UX y prevención centrada en el usuario.",
    metrics: [
      { label: "Reconocimiento", value: "2º Puesto ITBA" },
      { label: "Enfoque", value: "Antifraude Real-Time" },
      { label: "Arquitectura", value: "Agentes Python" },
    ],
    highlights: [
      "Correlación de patrones anómalos de comportamiento e indicadores de ingeniería social antes de consolidar el fraude.",
      "Respuestas explicables diseñadas para reducir falsos positivos y alertar con claridad cognitiva al usuario final.",
      "Presentación y defensa técnica ante jurado especializado durante la misión académica en Buenos Aires, Argentina.",
    ],
    technologies: [
      "Python",
      "Autonomous AI Agents",
      "Anti-Fraud Heuristics",
      "Prompt Guardrails",
      "Behavioral Risk Scoring",
    ],
    githubUrl: "https://github.com/paulmr2704/yape-sentinel-ai-agent",
    institution: "Instituto Tecnológico de Buenos Aires (ITBA) & UPC",
  },
  {
    slug: "arquitectura-zero-trust-stride",
    featured: true,
    badge: "Caso de Estudio · Javeriana & UPC",
    badgeTone: "terracotta",
    category: "Arquitectura de Ciberseguridad, STRIDE & Gestión de Riesgos",
    title: "Diseño Zero Trust (TO-BE) & Modelado de Amenazas STRIDE",
    shortSummary:
      "Evaluación integral de vulnerabilidades críticas (SQLi, Broken Auth) para un portal transaccional corporativo y diseño de arquitectura objetivo con 5 anillos de Defensa en Profundidad y 13 controles.",
    challenge:
      "Una plataforma transaccional corporativa exponía vectores críticos de inyección SQL, autenticación débil y movimiento lateral por ausencia de segmentación interna y trazabilidad inmutable.",
    architecture:
      "Diseño de arquitectura TO-BE bajo principios Zero Trust ('Never Trust, Always Verify') estructurada en 5 anillos defensivos con 13 controles integrados: WAF Capa 7, ZTNA, autenticación multifactor robusta, microsegmentación, mTLS entre servicios, EDR en endpoints y SIEM con almacenamiento inmutable.",
    impact:
      "Traducción completa del riesgo técnico (matriz STRIDE) a escenarios ejecutivos C-Suite orientados a continuidad de negocio, cumplimiento ISO/IEC 27001 y mitigación OWASP Top 10.",
    metrics: [
      { label: "Anillos de Defensa", value: "5 Capas" },
      { label: "Controles Integrados", value: "13 Controles" },
      { label: "Marco de Riesgo", value: "STRIDE + ISO 27001" },
    ],
    highlights: [
      "Mapeo sistemático de amenazas Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service y Elevation of Privilege.",
      "Diseño de arquitectura objetivo (TO-BE) eliminando confianza implícita en red interna mediante ZTNA y mTLS.",
      "Redacción ejecutiva de riesgos para directorio (C-Suite) conectando impacto técnico, financiero y reputacional.",
    ],
    technologies: [
      "Zero Trust (ZTNA)",
      "STRIDE Framework",
      "WAF L7",
      "mTLS & Microsegmentación",
      "SIEM Inmutable",
      "ISO/IEC 27001",
      "OWASP Top 10",
    ],
    institution: "Pontificia Universidad Javeriana & UPC (Winter School 2026)",
    evidences: [
      {
        id: "zerotrust",
        tabLabel: "1. Arquitectura Zero Trust (TO-BE)",
        title: "Arquitectura Objetivo (TO-BE) — Zero Trust con 13 Controles Integrados",
        caption: "Diseño de Defensa en Profundidad en 5 anillos para portal transaccional corporativo.",
        src: "/images/projects/javeriana-zerotrust.jpg",
        width: 1400,
        height: 900,
      },
      {
        id: "stride",
        tabLabel: "2. Matriz STRIDE",
        title: "Modelado de Amenazas y Controles — Framework STRIDE",
        caption: "Identificación estructurada de vectores de ataque y controles mitigantes por activo.",
        src: "/images/projects/javeriana-stride.jpg",
        width: 1400,
        height: 900,
      },
      {
        id: "riesgos",
        tabLabel: "3. Reporte Ejecutivo C-Suite",
        title: "Escritura de Riesgos en Formato Gerencial / C-Suite",
        caption: "Comunicación estratégica del riesgo técnico para toma de decisiones de alta dirección.",
        src: "/images/projects/javeriana-riesgos.jpg",
        width: 1400,
        height: 900,
      },
    ],
  },
  {
    slug: "ecosistema-portafolio-soc",
    featured: false,
    badge: "Producción · Fullstack & AppSec",
    badgeTone: "slate",
    category: "Ingeniería Web Segura, UX/UI & Arquitectura Next.js 16",
    title: "Ecosistema Portafolio Profesional con Arquitectura Zero Trust",
    shortSummary:
      "Aplicación web Server-First en Next.js 16 con sistema de diseño Midnight Linen accesible (WCAG 2.1 AA), perímetro CSP/HSTS, Rate Limiting HTTP 429 en servidor, validación Zod y capa DAL en Neon PostgreSQL.",
    challenge:
      "Construir una plataforma de marca personal que no solo enumere habilidades de ciberseguridad, UX y desarrollo, sino que demuestre ingeniería limpia, rendimiento óptimo, SEO semántico y controles reales de seguridad en producción.",
    architecture:
      "Arquitectura modular en capas sobre Next.js 16 App Router: React Server Components por defecto, datos estáticos tipados como única fuente de verdad, proxy perimetral con cabeceras de seguridad HTTP, validación estricta con Zod, filtro anti-bot Honeypot, limitador de tasa en servidor y Data Access Layer aislada con 'server-only' hacia Neon Serverless Postgres.",
    impact:
      "Eliminación de deuda técnica, protección efectiva del canal de contacto contra abuso automatizado y experiencia de lectura ultrarrápida tanto para reclutadores humanos como para motores de búsqueda e IA (JSON-LD + llms.txt).",
    metrics: [
      { label: "Stack Base", value: "Next.js 16 + RSC" },
      { label: "Seguridad API", value: "CSP + 429 + Zod" },
      { label: "Accesibilidad", value: "WCAG 2.1 AA" },
    ],
    highlights: [
      "Separación estricta entre configuración, datos de dominio, islas interactivas de cliente y módulos exclusivos de servidor ('server-only').",
      "Endurecimiento HTTP con Content-Security-Policy, HSTS, verificación de Origin, protección OPSEC anti-doxxing y estándar RFC 9116 (security.txt).",
      "Posicionamiento SEO/GEO con páginas dedicadas por caso de estudio, grafo Schema.org JSON-LD, OpenGraph dinámico y llms.txt.",
    ],
    technologies: [
      "Next.js 16",
      "TypeScript Strict",
      "Tailwind CSS v4",
      "Zod Validation",
      "Neon PostgreSQL",
      "CSP & Security Headers",
      "Schema.org JSON-LD",
    ],
    githubUrl: "https://github.com/paulmr2704/portafolio-main",
  },
  {
    slug: "plataforma-ux-salon-belleza",
    featured: false,
    badge: "Caso de Estudio · Google UX Design",
    badgeTone: "emerald",
    category: "Investigación UX, Design Thinking & Prototipado Frontend",
    title: "Plataforma Web de Gestión y Reserva de Citas — Salón de Belleza",
    shortSummary:
      "Proyecto end-to-end aplicando las 5 fases de Design Thinking (Google UX): investigación de usuarios, arquitectura de flujos sin fricción, wireframes Low-Fi, diseño Hi-Fi en Figma y prototipo en React + Vite.",
    challenge:
      "Los clientes enfrentaban alta tasa de abandono al agendar citas por teléfono o mensajería informal debido a falta de visibilidad horaria, precios poco claros y ausencia de historial de servicios.",
    architecture:
      "Flujo centrado en el usuario estructurado en 4 módulos clave (Descubrimiento de Servicios, Reserva Guiada en 3 pasos por fecha/hora/estilista, Catálogo Visual de Trabajos y Panel de Citas del Cliente), validado con pruebas de usabilidad antes de su construcción reactiva en React y Vite.",
    impact:
      "Reducción de pasos cognitivos en el flujo de reserva, jerarquía visual accesible y base de componentes reutilizables lista para integración backend.",
    metrics: [
      { label: "Metodología", value: "Design Thinking (5 fases)" },
      { label: "Vistas Clave", value: "4 Flujos Hi-Fi" },
      { label: "Avance Prototipo", value: "75% Frontend" },
    ],
    highlights: [
      "Empatía y definición mediante arquetipos de usuario, mapas de recorrido (User Journey Maps) e identificación de puntos de dolor.",
      "Iteración desde bocetos rápidos y wireframes de baja fidelidad hasta un sistema visual consistente en Figma.",
      "Traducción fiel del diseño a componentes interactivos en React + Vite con feedback inmediato en cada paso.",
    ],
    technologies: [
      "Google UX Methodology",
      "Figma Hi-Fi",
      "User Research",
      "Wireframing",
      "React",
      "Vite",
    ],
    progress: {
      label: "Prototipo interactivo en desarrollo local",
      percent: 75,
    },
    evidences: [
      {
        id: "inicio",
        tabLabel: "1. Inicio y Servicios",
        title: "Pantalla de Inicio — Catálogo Claro de Servicios Disponibles",
        caption: "Jerarquía visual orientada a selección rápida y transparencia de precios.",
        src: "/images/projects/salon-inicio.png",
        width: 900,
        height: 1600,
      },
      {
        id: "reservar",
        tabLabel: "2. Flujo de Reserva",
        title: "Formulario Guiado — Selección de Fecha, Hora y Especialista",
        caption: "Diseño sin fricción que minimiza errores de entrada y carga cognitiva.",
        src: "/images/projects/salon-reservar.png",
        width: 900,
        height: 1600,
      },
      {
        id: "portafolio",
        tabLabel: "3. Galería de Trabajos",
        title: "Portafolio Visual — Evidencia Social y Resultados",
        caption: "Construcción de confianza previa a la conversión de la cita.",
        src: "/images/projects/salon-portafolio.png",
        width: 900,
        height: 1600,
      },
      {
        id: "perfil",
        tabLabel: "4. Panel del Cliente",
        title: "Perfil de Usuario — Gestión Autónoma de Citas Agendadas",
        caption: "Control claro de próximas reservas, estado e historial personal.",
        src: "/images/projects/salon-perfil.png",
        width: 900,
        height: 1600,
      },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}

