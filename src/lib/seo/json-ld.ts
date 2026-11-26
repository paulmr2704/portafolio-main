import { SITE_CONFIG } from "@/config/site";
import { PROJECTS_DATA } from "@/data/projects";
import { CERTIFICATIONS_DATA } from "@/data/certifications";
import type { ProjectCaseStudy } from "@/types/portfolio";

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildHomeJsonLd() {
  const personId = `${SITE_CONFIG.url}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_CONFIG.url}/#profilepage`,
        url: SITE_CONFIG.url,
        name: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
        description: SITE_CONFIG.tagline,
        inLanguage: "es-PE",
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.shortName,
        jobTitle: SITE_CONFIG.role,
        description: SITE_CONFIG.tagline,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}${SITE_CONFIG.profileImage}`,
        email: `mailto:${SITE_CONFIG.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lima",
          addressCountry: "PE",
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Universidad Peruana de Ciencias Aplicadas (UPC)",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Instituto Tecnológico de Buenos Aires (ITBA)",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "Pontificia Universidad Javeriana",
          },
        ],
        sameAs: [
          SITE_CONFIG.links.linkedin,
          SITE_CONFIG.links.github,
          SITE_CONFIG.links.credly,
        ],
        knowsAbout: [
          "SOC Operations",
          "Threat Hunting",
          "SIEM Elastic Kibana",
          "Zero Trust Architecture",
          "STRIDE Threat Modeling",
          "Autonomous AI Agents",
          "Organizational Psychology",
          "Social Engineering Defense",
          "UX/UI Design",
          "Data Analytics",
        ],
        award: [
          "2º Puesto Internacional - Hackathon de Ciberseguridad e IA | ITBA Buenos Aires",
        ],
        hasCredential: CERTIFICATIONS_DATA.filter((c) => c.verifyUrl).map(
          (cert) => ({
            "@type": "EducationalOccupationalCredential",
            name: cert.title,
            recognizedBy: {
              "@type": "Organization",
              name: cert.issuer,
            },
            url: cert.verifyUrl,
          })
        ),
      },
      {
        "@type": "ItemList",
        "@id": `${SITE_CONFIG.url}/#casestudies`,
        name: "Proyectos y Casos de Estudio de Ciberseguridad, IA y UX",
        itemListElement: PROJECTS_DATA.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: project.title,
            description: project.shortSummary,
            url: `${SITE_CONFIG.url}/proyectos/${project.slug}`,
            keywords: project.technologies.join(", "),
          },
        })),
      },
    ],
  };
}

export function buildProjectJsonLd(project: ProjectCaseStudy) {
  const projectUrl = `${SITE_CONFIG.url}/proyectos/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Casos de Estudio",
            item: `${SITE_CONFIG.url}/#proyectos`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
      {
        "@type": "TechArticle",
        headline: project.title,
        description: project.shortSummary,
        url: projectUrl,
        inLanguage: "es-PE",
        author: {
          "@type": "Person",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        keywords: project.technologies.join(", "),
        ...(project.evidences?.[0]
          ? { image: `${SITE_CONFIG.url}${project.evidences[0].src}` }
          : {}),
      },
    ],
  };
}

