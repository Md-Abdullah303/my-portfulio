import { projects as fallbackProjects } from "@/data/projects";

/**
 * Normalizes project objects from either the remote API or local static data
 * into a consistent, robust schema.
 */
export const normalizeProject = (p) => {
  const slug =
    p.id ||
    p.title?.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-") ||
    p._id;

  return {
    id: slug,
    _id: p._id || slug,
    title: p.title || "Untitled Project",
    category: p.category || "Full Stack Platform",
    description: p.description || "",
    image: p.imgLink || p.image || "/legalease.png",
    liveLink: p.liveLink || p.link || "#",
    githubLink: p.githubLink || p.github || "#",
    tags: Array.isArray(p.tags) ? p.tags : [],
    challenges: p.challenges || "",
    futurePlans: p.futureplans || p.futurePlans || "",
  };
};

/**
 * Server-side data fetching for projects.
 * Fetches from the live portfolio studio API, with graceful fallback to local data.
 */
export async function getProjects() {
  try {
    const res = await fetch(
      "https://portfolio-studio-roan-iota.vercel.app/api/add-project",
      { cache: "no-store" }
    );

    if (res.ok) {
      const data = await res.json();
      if (data?.projects && Array.isArray(data.projects) && data.projects.length > 0) {
        // Reverse to show the most recent projects first (newest to oldest)
        return [...data.projects].reverse().map(normalizeProject);
      }
    }
  } catch (err) {
    console.warn("Failed to fetch live projects from API, using fallback data:", err);
  }

  return fallbackProjects.map(normalizeProject);
}
