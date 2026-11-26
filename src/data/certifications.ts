import type { InstitutionalCertification } from "@/types/portfolio";

export const CERTIFICATIONS_DATA: InstitutionalCertification[] = [
  {
    id: "itba-cyber-ia",
    title: "Ciberseguridad con Inteligencia Artificial",
    issuer: "ITBA (Buenos Aires, Argentina) & UPC",
    date: "Agosto 2026",
    hoursOrCode: "30 horas · Misión Internacional",
    category: "Ciberseguridad",
    description:
      "Inmersión internacional presencial en Buenos Aires: Operaciones SOC, SIEM Elastic/Kibana, Threat Hunting, Nmap, Prompt Engineering defensivo y visita técnica a Google Argentina.",
    verifyUrl: "https://v.pok.tech/r/9de06776-f5fb-49b9-9754-6aeb91fb56e1",
    verifyLabel: "Verificar Credencial ITBA (POK)",
    featured: true,
  },
  {
    id: "javeriana-arch-sec",
    title: "Arquitectura de Ciberseguridad con IA",
    issuer: "Pontificia Universidad Javeriana & UPC",
    date: "Julio 2026",
    hoursOrCode: "Winter School Internacional",
    category: "Ciberseguridad",
    description:
      "Modelado de amenazas STRIDE, prevención de inyecciones SQL, diseño de arquitecturas Zero Trust, Defensa en Profundidad y redacción ejecutiva de riesgos.",
    pdfUrl: "/certs/cert-javeriana.pdf",
    verifyLabel: "Ver Certificado PDF",
    featured: true,
  },
  {
    id: "microsoft-sc-az",
    title: "Microsoft Security & Cloud Fundamentals (SC-900 & AZ-900)",
    issuer: "Microsoft Certifications",
    date: "Verificado",
    hoursOrCode: "SC-900 · AZ-900",
    category: "Cloud & Seguridad",
    description:
      "Fundamentos de Seguridad, Cumplimiento e Identidad (Microsoft Entra ID, Defender, Sentinel / Zero Trust) junto con arquitectura de servicios y gobernanza en Microsoft Azure.",
    verifyUrl: "https://www.credly.com/users/paulo-cesar-meza-rojas",
    verifyLabel: "Ver Insignias en Credly",
    featured: true,
  },
  {
    id: "eccouncil-ehe",
    title: "Ethical Hacking Essentials (EHE)",
    issuer: "EC-Council",
    date: "Verificado",
    hoursOrCode: "Offensive & Defensive Foundations",
    category: "Ciberseguridad",
    description:
      "Metodologías de reconocimiento ético, enumeración, evaluación de vulnerabilidades en redes y aplicaciones web, y contramedidas defensivas.",
    verifyUrl: "https://www.credly.com/users/paulo-cesar-meza-rojas",
    verifyLabel: "Ver Perfil de Acreditaciones",
    featured: true,
  },
  {
    id: "congreso-ia-latam",
    title: "1er Congreso IA LATAM 2026",
    issuer: "Comunidad IA LATAM",
    date: "Agosto 2026",
    hoursOrCode: "20 horas académicas",
    category: "Inteligencia Artificial",
    description:
      "Actualización intensiva sobre IA Generativa, arquitectura de agentes autónomos, despliegue responsable de LLMs y ética digital.",
    verifyUrl: "https://openchapitas.org/credentials/a0c04b29-b0bc-4a44-be1d-a949157a9206?v=3",
    verifyLabel: "Verificar en OpenChapitas",
  },
  {
    id: "upc-sistemas-seguros",
    title: "IA & Sistemas Empresariales Seguros",
    issuer: "Universidad Peruana de Ciencias Aplicadas (UPC)",
    date: "Noviembre 2025",
    hoursOrCode: "Congreso Internacional",
    category: "Ciberseguridad",
    description:
      "Congreso Internacional de Ingeniería de Sistemas, Ciberseguridad Corporativa y resiliencia en arquitecturas empresariales.",
    pdfUrl: "/certs/cert-upc.pdf",
    verifyLabel: "Ver Certificado PDF",
  },
  {
    id: "pronabec-empleabilidad",
    title: "Bootcamp de Empleabilidad: Tu Viaje al Mundo Laboral",
    issuer: "PRONABEC – Ministerio de Educación (Perú)",
    date: "Agosto 2026",
    hoursOrCode: "Edición 1 · 5 horas",
    category: "Operaciones & Empleabilidad",
    description:
      "Constancia oficial otorgada por el Programa Nacional de Becas y Crédito Educativo enfocada en liderazgo profesional y empleabilidad estratégica.",
    pdfUrl: "/certs/BOOTCAMP-EMPLEABILIDAD.pdf",
    verifyLabel: "Ver Constancia PDF",
  },
  {
    id: "certimaq-seguridad",
    title: "Operación Múltiple & Seguridad Industrial",
    issuer: "CERTIMAQ GROUP SAC",
    date: "2025 – 2026",
    hoursOrCode: "Protocolos Operativos",
    category: "Operaciones & Empleabilidad",
    description:
      "Inducción rigurosa en protocolos de prevención de riesgos operativos, control de seguridad en campo y operación de maquinaria pesada.",
    pdfUrl: "/certs/cert-certimaq.pdf",
    verifyLabel: "Ver Certificado PDF",
  },
];
