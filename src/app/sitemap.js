import { getProjects } from "@/lib/core/project";

const SITE_URL = "https://khan-mohammad-abdullah-portfulio.vercel.app";

export default async function sitemap() {
  // Fetch all projects dynamically
  const projects = await getProjects();

  // Static routes
  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Dynamic project routes
  const projectRoutes = projects.map((project) => ({
    url: `${SITE_URL}/project/${project.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
