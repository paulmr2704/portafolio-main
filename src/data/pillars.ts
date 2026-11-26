import type { PillarItem } from "@/types/portfolio";

export const PILLARS_DATA: PillarItem[] = [
  {
    id: "ciberseguridad",
    order: "01",
    shortTitle: "Ciberseguridad & SOC",
    title: "Operaciones SOC, Threat Hunting & Arquitectura Zero Trust",
    description:
      "Formación especializada en la UPC, ITBA (Argentina), Pontificia Universidad Javeriana, Google, Microsoft y EC-Council. Enfocado en detección proactiva, correlación de telemetría y defensa en profundidad.",
    highlights: [
      {
        label: "SIEM & Threat Hunting",
        detail:
          "Consultas avanzadas en Elastic / Kibana con sintaxis ES|QL, análisis de logs y mapeo táctico sobre MITRE ATT&CK.",
      },
      {
        label: "Arquitectura & Modelado de Amenazas",
        detail:
          "Evaluación de riesgos bajo metodología STRIDE, controles Zero Trust (ZTNA), mitigación OWASP Top 10 e ISO/IEC 27001.",
      },
      {
        label: "Inspección de Red & Respuesta",
        detail:
          "Diagnóstico de superficie de ataque con Nmap, análisis de capturas PCAP en Wireshark y automatización defensiva.",
      },
    ],
    tools: [
      "Elastic SIEM (ES|QL)",
      "MITRE ATT&CK",
      "STRIDE",
      "Zero Trust",
      "Wireshark",
      "Nmap",
      "OWASP Top 10",
      "SC-900 / EHE",
    ],
    cardBadge: "DEFENSA EN PROFUNDIDAD",
    cardTitle: "ISO/IEC 27001 & Zero Trust",
    cardSubtitle:
      "Protección integral basada en verificación explícita, mínimo privilegio y monitoreo continuo de la tríada CIA.",
    imageSrc: "/images/pillars/cyber-padlock.png",
    imageAlt: "Representación de arquitectura de ciberseguridad y cifrado Zero Trust",
    accentTone: "terracotta",
  },
  {
    id: "psicologia",
    order: "02",
    shortTitle: "Psicología & Factor Humano",
    title: "Psicología Organizacional & Mitigación del Riesgo Humano",
    description:
      "Estudiante de Psicología Organizacional en la Universidad Peruana de Ciencias Aplicadas (UPC). Analizo cómo toman decisiones las personas bajo presión para blindar el eslabón más atacado en seguridad: el factor humano.",
    highlights: [
      {
        label: "Ingeniería Social & Phishing Defensivo",
        detail:
          "Identificación de sesgos cognitivos explotados por atacantes (urgencia, autoridad, reciprocidad) y diseño de cultura preventiva.",
      },
      {
        label: "Ergonomía Cognitiva en Sistemas Críticos",
        detail:
          "Reducción de fatiga de alertas en consolas operativas e interfaces para minimizar errores humanos involuntarios.",
      },
      {
        label: "Gestión de Crisis & Stakeholders",
        detail:
          "Comunicación asertiva de riesgos técnicos hacia perfiles ejecutivos y resolución estructurada de conflictos bajo presión.",
      },
    ],
    tools: [
      "Ingeniería Social Defensiva",
      "Ciberpsicología",
      "Sesgos Cognitivos",
      "Cultura de Seguridad",
      "Gestión de Crisis",
      "Comunicación C-Suite",
    ],
    cardBadge: "FACTOR HUMANO",
    cardTitle: "UPC · Psicología Organizacional",
    cardSubtitle:
      "Puente estratégico entre ciencia del comportamiento, concientización de seguridad y rendimiento de equipos.",
    imageSrc: "/images/pillars/upc-campus.jpg",
    imageAlt: "Campus de la Universidad Peruana de Ciencias Aplicadas UPC",
    accentTone: "slate",
  },
  {
    id: "ia",
    order: "03",
    shortTitle: "IA & Agentes Autónomos",
    title: "Agentes Inteligentes para Detección Antifraude y Automatización",
    description:
      "Co-desarrollador de Yape Track AI, proyecto premiado con el 2º Puesto Internacional en la Hackathon de Ciberseguridad e IA del ITBA (Buenos Aires, Argentina).",
    highlights: [
      {
        label: "Agentes Autónomos de Seguridad",
        detail:
          "Diseño de flujos multi-agente en Python orientados a detección temprana de anomalías transaccionales y fraude digital.",
      },
      {
        label: "Seguridad en LLMs & Prompt Engineering",
        detail:
          "Estructuración de prompts robustos con guardrails contra Prompt Injection, fuga de contexto y Jailbreaking.",
      },
      {
        label: "Ingeniería Asistida por Agentes",
        detail:
          "Orquestación con ecosistemas modernos (LangChain, AutoGen, Claude, GPT-4 y Google Antigravity) con revisión de seguridad.",
      },
    ],
    tools: [
      "Python OOP",
      "AI Agents",
      "LangChain / AutoGen",
      "LLM Guardrails",
      "Anti-Prompt Injection",
      "Automatización SOAR",
    ],
    cardBadge: "PODIO INTERNACIONAL",
    cardTitle: "2º Puesto · Hackathon ITBA",
    cardSubtitle:
      "Reconocimiento técnico en Buenos Aires compitiendo entre equipos de alto rendimiento de la delegación internacional.",
    imageSrc: "/images/pillars/itba-group.jpg",
    imageAlt: "Equipo premiado en la Hackathon Internacional de Ciberseguridad e IA en ITBA Buenos Aires",
    accentTone: "amber",
  },
  {
    id: "ux-data",
    order: "04",
    shortTitle: "UX/UI & Análisis de Datos",
    title: "Diseño de Producto Accesible & Toma de Decisiones Basada en Datos",
    description:
      "Doble certificación profesional de Google en UX Design y Data Analytics complementada con Cisco Data Science. Transformo telemetría compleja en experiencias claras, medibles y accesibles.",
    highlights: [
      {
        label: "Design Thinking & Sistemas Figma Hi-Fi",
        detail:
          "Investigación con usuarios, arquitectura de información, wireframes Low-Fi y prototipos interactivos cumpliendo WCAG 2.1 AA.",
      },
      {
        label: "Desarrollo Frontend Moderno",
        detail:
          "Implementación de interfaces Bento Glassmorphism de alto rendimiento con Next.js 16, React 19 y Tailwind CSS.",
      },
      {
        label: "Analítica Cuantitativa & Visualización",
        detail:
          "Limpieza, validación y consulta de datos mediante SQL, programación estadística en R (Tidyverse/ggplot2) y Tableau.",
      },
    ],
    tools: [
      "Figma Hi-Fi",
      "WCAG 2.1 AA",
      "Design Thinking",
      "Next.js 16 & React",
      "SQL & PostgreSQL",
      "R (ggplot2)",
      "Tableau",
    ],
    cardBadge: "DISEÑO + EVIDENCIA",
    cardTitle: "Google UX + Data Analytics",
    cardSubtitle:
      "Combinación de empatía cualitativa y rigor estadístico para construir productos intuitivos y seguros.",
    imageSrc: "/images/pillars/ux-data.png",
    imageAlt: "Visualización de diseño UX/UI y paneles de análisis de datos",
    accentTone: "emerald",
  },
];

