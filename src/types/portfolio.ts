export type PillarId = "ciberseguridad" | "psicologia" | "ia" | "ux-data";

export interface PillarItem {
  id: PillarId;
  order: string;
  shortTitle: string;
  title: string;
  description: string;
  highlights: {
    label: string;
    detail: string;
  }[];
  tools: string[];
  cardBadge: string;
  cardTitle: string;
  cardSubtitle: string;
  imageSrc: string;
  imageAlt: string;
  accentTone: "terracotta" | "amber" | "emerald" | "slate";
}

export interface ProjectEvidence {
  id: string;
  tabLabel: string;
  title: string;
  caption: string;
  src: string;
  width: number;
  height: number;
}

export interface ProjectCaseStudy {
  slug: string;
  featured: boolean;
  badge: string;
  badgeTone: "amber" | "terracotta" | "emerald" | "slate";
  category: string;
  title: string;
  shortSummary: string;
  challenge: string;
  architecture: string;
  impact: string;
  metrics: {
    label: string;
    value: string;
  }[];
  highlights: string[];
  technologies: string[];
  githubUrl?: string;
  institution?: string;
  progress?: {
    label: string;
    percent: number;
  };
  evidences?: ProjectEvidence[];
}

export interface InstitutionalCertification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hoursOrCode?: string;
  category: "Ciberseguridad" | "Inteligencia Artificial" | "Cloud & Seguridad" | "Operaciones & Empleabilidad";
  description: string;
  verifyUrl?: string;
  verifyLabel?: string;
  pdfUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
}

export type AcademyTrackId = "g-cyber" | "g-analytics" | "g-ux" | "g-it" | "cisco";

export interface AcademyCourse {
  code: string;
  title: string;
  description: string;
  pdfUrl?: string;
  skills?: string[];
}

export interface AcademyTrack {
  id: AcademyTrackId;
  shortTitle: string;
  provider: "Google Career Certificates" | "Cisco Networking Academy";
  title: string;
  summary: string;
  verifyUrl?: string;
  courses: AcademyCourse[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  summary: string;
  socTransferableSkill: string;
  tags: string[];
}

