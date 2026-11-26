import type { AcademyTrack } from "@/types/portfolio";

export const ACADEMY_TRACKS: AcademyTrack[] = [
  {
    id: "g-cyber",
    shortTitle: "Google Cybersecurity",
    provider: "Google Career Certificates",
    title: "Google Cybersecurity Professional Certificate (8 Cursos)",
    summary: "Marco NIST, redes TCP/IP, Linux, SQL, SIEM Elastic, análisis PCAP y automatización con Python.",
    verifyUrl: "https://coursera.org/share/787a71d232444e67deff15a385dec27b",
    courses: [
      {
        code: "Módulo 01 / 08",
        title: "Foundations of Cybersecurity",
        description: "Principios de seguridad de la información, marco NIST CSF, ética profesional y tríada CIA.",
      },
      {
        code: "Módulo 02 / 08",
        title: "Play It Safe: Manage Security Risks",
        description: "Evaluación de riesgos, auditorías de seguridad, playbooks de respuesta a incidentes y cumplimiento.",
      },
      {
        code: "Módulo 03 / 08",
        title: "Connect and Protect: Networks and Network Security",
        description: "Arquitectura TCP/IP, firewalls, segmentación VPN, endurecimiento de red y prevención de intrusiones.",
      },
      {
        code: "Módulo 04 / 08",
        title: "Tools of the Trade: Linux and SQL",
        description: "Administración mediante consola Bash en Linux, permisos y consultas SQL sobre registros de eventos.",
      },
      {
        code: "Módulo 05 / 08",
        title: "Assets, Threats, and Vulnerabilities",
        description: "Clasificación de activos críticos, modelado de amenazas, análisis de vulnerabilidades y criptografía.",
      },
      {
        code: "Módulo 06 / 08",
        title: "Sound the Alarm: Detection and Response",
        description: "Operaciones SOC, monitoreo SIEM, inspección de paquetes (Wireshark/tcpdump) y escalamiento.",
      },
      {
        code: "Módulo 07 / 08",
        title: "Automate Cybersecurity Tasks with Python",
        description: "Desarrollo de scripts defensivos en Python para parseo de logs, listas de control y detección.",
      },
      {
        code: "Módulo 08 / 08",
        title: "Put It to Work: Prepare for Cybersecurity Jobs",
        description: "Simulación integral de respuesta ante incidentes, documentación técnica y comunicación a stakeholders.",
      },
    ],
  },
  {
    id: "g-analytics",
    shortTitle: "Google Data Analytics",
    provider: "Google Career Certificates",
    title: "Google Data Analytics Professional Certificate (9 Cursos)",
    summary: "Limpieza y validación de datos, consultas SQL compuestas, programación en R y visualización ejecutiva.",
    verifyUrl: "https://coursera.org/share/c344e45efd285305ddc11440428980bb",
    courses: [
      {
        code: "Módulo 01 / 09",
        title: "Foundations: Data, Data, Everywhere",
        description: "Ecosistema analítico, pensamiento estructurado, ética de datos y toma de decisiones basada en evidencia.",
      },
      {
        code: "Módulo 02 / 09",
        title: "Ask Questions to Make Data-Driven Decisions",
        description: "Definición de KPIs, formulación de hipótesis de negocio y alineación con stakeholders.",
      },
      {
        code: "Módulo 03 / 09",
        title: "Prepare Data for Exploration",
        description: "Modelos de datos relacionales, gobernanza, sesgos muestrales e integridad de fuentes.",
      },
      {
        code: "Módulo 04 / 09",
        title: "Process Data from Dirty to Clean",
        description: "Depuración avanzada con SQL y hojas de cálculo, trazabilidad de cambios y normalización.",
      },
      {
        code: "Módulo 05 / 09",
        title: "Analyze Data to Answer Questions",
        description: "Subconsultas, JOINs, agregaciones complejas en SQL y síntesis estadística.",
      },
      {
        code: "Módulo 06 / 09",
        title: "Share Data Through the Art of Visualization",
        description: "Diseño de dashboards en Tableau, jerarquía cognitiva y Data Storytelling ejecutivo.",
      },
      {
        code: "Módulo 07 / 09",
        title: "Data Analysis with R Programming",
        description: "Análisis reproducible en RStudio empleando Tidyverse, dplyr, ggplot2 y R Markdown.",
      },
      {
        code: "Módulo 08 / 09",
        title: "Google Data Analytics Capstone: Case Study",
        description: "Caso de estudio completo end-to-end desde ingesta y limpieza hasta recomendaciones accionables.",
      },
      {
        code: "Módulo 09 / 09",
        title: "Accelerate Your Job Search with AI",
        description: "Integración de flujos asistidos por IA para productividad analítica y síntesis técnica.",
      },
    ],
  },
  {
    id: "g-ux",
    shortTitle: "Google UX Design",
    provider: "Google Career Certificates",
    title: "Google UX Design Professional Certificate (8 Cursos)",
    summary: "Investigación centrada en el usuario, accesibilidad WCAG, sistemas de diseño en Figma y prototipos Hi-Fi.",
    verifyUrl: "https://coursera.org/share/35be34b72871a2fcf3c51551c85582bf",
    courses: [
      {
        code: "Módulo 01 / 08",
        title: "Foundations of User Experience (UX) Design",
        description: "Diseño centrado en las personas, equidad digital, accesibilidad WCAG y ciclo Design Thinking.",
      },
      {
        code: "Módulo 02 / 08",
        title: "Start the UX Design Process: Empathize, Define, Ideate",
        description: "Entrevistas de usuario, mapas de empatía, user personas, historias de usuario y definición de problemas.",
      },
      {
        code: "Módulo 03 / 08",
        title: "Build Wireframes and Low-Fidelity Prototypes",
        description: "Arquitectura de información, flujos sin fricción, storyboards y prototipos interactivos Low-Fi.",
      },
      {
        code: "Módulo 04 / 08",
        title: "Conduct UX Research and Test Early Concepts",
        description: "Planificación y moderación de estudios de usabilidad, métricas de éxito e iteración por hallazgos.",
      },
      {
        code: "Módulo 05 / 08",
        title: "Create High-Fidelity Designs and Prototypes in Figma",
        description: "Tokens visuales, componentes auto-layout, variantes, sistemas de diseño y micro-interacciones en Figma.",
      },
      {
        code: "Módulo 06 / 08",
        title: "Build Dynamic User Interfaces (UI) for Websites",
        description: "Diseño web adaptativo multi-dispositivo, retículas responsivas y jerarquía tipográfica.",
      },
      {
        code: "Módulo 07 / 08",
        title: "Design a User Experience for Social Good",
        description: "Producto multiplataforma de impacto real con enfoque inclusivo y documentación de caso de estudio.",
      },
      {
        code: "Módulo 08 / 08",
        title: "Accelerate Your Job Search with AI",
        description: "Aplicación ética de herramientas generativas en procesos de ideación y validación UX.",
      },
    ],
  },
  {
    id: "g-it",
    shortTitle: "Google IT Support",
    provider: "Google Career Certificates",
    title: "Google IT Support Professional Certificate (6 Cursos)",
    summary: "Redes OSI/TCP, sistemas operativos Windows/Linux, Active Directory, infraestructura cloud y criptografía.",
    verifyUrl: "https://coursera.org/share/41fdf4c63b1cef7fbc245b050c0f111b",
    courses: [
      {
        code: "Módulo 01 / 06",
        title: "Technical Support Fundamentals",
        description: "Arquitectura de computadores, diagnóstico metódico de fallos y atención técnica efectiva.",
      },
      {
        code: "Módulo 02 / 06",
        title: "The Bits and Bytes of Computer Networking",
        description: "Subredes IPv4/IPv6, enrutamiento, DNS, DHCP, NAT y resolución de incidencias de conectividad.",
      },
      {
        code: "Módulo 03 / 06",
        title: "Operating Systems and You: Becoming a Power User",
        description: "Administración avanzada en PowerShell (Windows) y Bash (Linux), procesos, logs y permisos.",
      },
      {
        code: "Módulo 04 / 06",
        title: "System Administration and IT Infrastructure Services",
        description: "Servicios de directorio (LDAP/Active Directory), respaldos, recuperación ante desastres y nube.",
      },
      {
        code: "Módulo 05 / 06",
        title: "IT Security: Defense Against the Digital Dark Arts",
        description: "Criptografía asimétrica/TLS, autenticación multifactor (AAA), endurecimiento de endpoints y WiFi.",
      },
      {
        code: "Módulo 06 / 06",
        title: "Accelerate Your Job Search with AI",
        description: "Automatización de diagnóstico técnico y documentación operativa con asistencia de IA.",
      },
    ],
  },
  {
    id: "cisco",
    shortTitle: "Cisco Academy",
    provider: "Cisco Networking Academy",
    title: "Cisco Networking Academy — 6 Certificaciones Oficiales",
    summary: "Programación Python (1 y 2), Ciberseguridad, Protección Digital, Ciencia de Datos y Analítica.",
    courses: [
      {
        code: "Cisco 01 / 06",
        title: "Introduction to Cybersecurity",
        description: "Vectores de ataque, protección contra malware, vulnerabilidades de red y defensa organizacional.",
        pdfUrl: "/certs/cert-cisco-cybersecurity.pdf",
        skills: ["Threat Detection", "Network Vulnerabilities", "Data Confidentiality", "Cyber Best Practices"],
      },
      {
        code: "Cisco 02 / 06",
        title: "Digital Safety and Security Awareness",
        description: "Resguardo de identidad digital, privacidad de datos y mitigación de ataques de ingeniería social.",
        pdfUrl: "/certs/cert-cisco-digital-safety.pdf",
        skills: ["Online Threat Mitigation", "Digital Identity Security", "Data Protection"],
      },
      {
        code: "Cisco 03 / 06",
        title: "Python Essentials 2 (Intermediate / OOP)",
        description: "Programación Orientada a Objetos, módulos, paquetes, generadores, excepciones y manejo de archivos.",
        pdfUrl: "/certs/cert-cisco-python-2.pdf",
        skills: ["OOP", "Exceptions", "Modules & PIP", "Generators", "Python Intermediate"],
      },
      {
        code: "Cisco 04 / 06",
        title: "Python Essentials 1 (Foundations)",
        description: "Pensamiento algorítmico, estructuras de datos, control de flujo, funciones y depuración de scripts.",
        pdfUrl: "/certs/cert-cisco-python-1.pdf",
        skills: ["Algorithmic Thinking", "Data Structures", "Script Debugging", "Procedural Python"],
      },
      {
        code: "Cisco 05 / 06",
        title: "Data Analytics Essentials",
        description: "Transformación de datos, consultas SQL, análisis en Excel y tableros interactivos en Tableau.",
        pdfUrl: "/certs/cert-cisco-data-analytics.pdf",
        skills: ["SQL", "Tableau", "Data Storytelling", "Excel Analytics"],
      },
      {
        code: "Cisco 06 / 06",
        title: "Introduction to Data Science",
        description: "Ciclo de vida de datos, validación de calidad e integración analítica en proyectos de IA.",
        pdfUrl: "/certs/cert-cisco-data-science.pdf",
        skills: ["Data Collection", "Data Validation", "AI Foundations"],
      },
    ],
  },
];

export const TOTAL_ACADEMY_MODULES = ACADEMY_TRACKS.reduce(
  (sum, track) => sum + track.courses.length,
  0
);

export const TOTAL_GOOGLE_DUAL_CERTS = ACADEMY_TRACKS.filter(
  (track) => track.provider === "Google Career Certificates"
).length;

