import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { PROJECTS_DATA } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${SITE_CONFIG.url}/proyectos/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: SITE_CONFIG.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}

