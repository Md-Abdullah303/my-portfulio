"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiExternalLink,
  FiGithub,
  FiArrowRight,
  FiLock,
  FiTarget,
  FiCompass,
  FiChevronDown,
  FiLayers,
} from "react-icons/fi";
import { projects as fallbackProjects } from "@/data/projects";

// Normalizer to handle both API schema and static data schema
const normalizeProject = (p) => {
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

export default function RecentProjects() {
  const [projectsList, setProjectsList] = useState(() =>
    fallbackProjects.map(normalizeProject)
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDrawer, setActiveDrawer] = useState({});

  // Fetch live projects from the user's API
  useEffect(() => {
    let isMounted = true;
    const fetchLiveProjects = async () => {
      try {
        const res = await fetch(
          "https://portfolio-studio-roan-iota.vercel.app/api/add-project",
          { cache: "no-store" }
        );
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data?.projects && Array.isArray(data.projects) && data.projects.length > 0) {
            setProjectsList(data.projects.map(normalizeProject));
          }
        }
      } catch (err) {
        console.warn("Using fallback local projects:", err);
      }
    };

    fetchLiveProjects();
    return () => {
      isMounted = false;
    };
  }, []);

  // Extract unique categories for filter tabs
  const categories = [
    "All",
    ...new Set(
      projectsList.map((p) => {
        if (p.category.toLowerCase().includes("commerce")) return "E-Commerce";
        if (p.category.toLowerCase().includes("organization") || p.category.toLowerCase().includes("tool"))
          return "Tools";
        if (p.category.toLowerCase().includes("legal") || p.category.toLowerCase().includes("job") || p.category.toLowerCase().includes("portal"))
          return "Web Apps";
        if (p.category.toLowerCase().includes("ai")) return "AI";
        return "Platforms";
      })
    ),
  ].slice(0, 5);

  // Filter projects according to category
  const filteredProjects = projectsList.filter((p) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "E-Commerce") return p.category.toLowerCase().includes("commerce");
    if (activeCategory === "Tools")
      return p.category.toLowerCase().includes("organization") || p.category.toLowerCase().includes("tool");
    if (activeCategory === "Web Apps")
      return (
        p.category.toLowerCase().includes("legal") ||
        p.category.toLowerCase().includes("job") ||
        p.category.toLowerCase().includes("portal")
      );
    if (activeCategory === "AI") return p.category.toLowerCase().includes("ai");
    return true;
  });

  const displayedProjects = filteredProjects.slice(0, 6);

  const toggleDrawer = (id, tab) => {
    setActiveDrawer((prev) => ({
      ...prev,
      [id]: prev[id] === tab ? null : tab,
    }));
  };

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden"
      id="recent-projects"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100 blur-[140px] pointer-events-none -z-10" />

      {/* ── Section Header ────────────────────────────────────── */}
      <header className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs md:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md">
          <svg className="w-4 h-4 text-blue-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
          </svg>
          Featured Work & Innovations
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-[1.15]">
          Crafted with Precision, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Engineered for Impact
          </span>
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
          A curated selection of full-stack applications, interactive tools, and digital
          experiences built with modern architecture and exceptional performance.
        </p>

        {/* ── Category Filter Pills ────────────────────────── */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-white bg-blue-600 shadow-md shadow-blue-500/30"
                    : "text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </header>

      {/* ── Project Cards Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedProjects.map((project, index) => {
          const domain = project.liveLink
            ? project.liveLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
            : "portfolio.live";
          const currentDrawer = activeDrawer[project.id];

          return (
            <article
              key={project.id}
              className="group relative rounded-[2rem] bg-white border border-slate-200/90 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              <div>
                {/* ── Browser Window Header ───────────────────────── */}
                <div className="px-5 py-3.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between gap-3">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>

                  {/* Mock Browser URL Pill */}
                  <div className="flex-1 max-w-[210px] mx-auto bg-white border border-slate-200 rounded-full px-3 py-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 font-mono truncate shadow-xs">
                    <FiLock className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                    <span className="truncate">{domain}</span>
                  </div>

                  {/* Live Beacon Pill */}
                  <div className="flex items-center gap-1.5 flex-shrink-0 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                {/* ── Image Media Showcase ──────────────────────── */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Category Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/90 backdrop-blur-md border border-slate-200 text-blue-700 shadow-sm">
                      <FiLayers className="w-3 h-3 text-blue-600" />
                      {project.category}
                    </span>
                  </div>

                  {/* Quick-Action Floating Bar (Reveals on Hover) */}
                  <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-lg transition-transform active:scale-95"
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-lg transition-transform active:scale-95"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Card Content Body ─────────────────────────── */}
                <div className="p-6 md:p-7">
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors duration-300 flex items-center justify-between gap-2">
                    <span className="truncate">{project.title}</span>
                    <span className="text-slate-400 text-xs font-mono font-normal">
                      #{String(index + 1).padStart(2, "0")}
                    </span>
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-5">
                    {project.description}
                  </p>

                  {/* ── Interactive Deep Dive Peek Buttons ────────── */}
                  {(project.challenges || project.futurePlans) && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.challenges && (
                        <button
                          type="button"
                          onClick={() => toggleDrawer(project.id, "challenges")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                            currentDrawer === "challenges"
                              ? "bg-amber-100 text-amber-900 border-amber-300 shadow-xs"
                              : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                          }`}
                        >
                          <FiTarget className="w-3.5 h-3.5 text-amber-600" />
                          Challenge
                          <FiChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              currentDrawer === "challenges" ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}

                      {project.futurePlans && (
                        <button
                          type="button"
                          onClick={() => toggleDrawer(project.id, "futurePlans")}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                            currentDrawer === "futurePlans"
                              ? "bg-indigo-100 text-indigo-900 border-indigo-300 shadow-xs"
                              : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                          }`}
                        >
                          <FiCompass className="w-3.5 h-3.5 text-indigo-600" />
                          Roadmap
                          <FiChevronDown
                            className={`w-3 h-3 transition-transform duration-200 ${
                              currentDrawer === "futurePlans" ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  )}

                  {/* ── Deep Dive Expandable Drawer ───────────── */}
                  {currentDrawer && (
                    <div className="overflow-hidden mb-5 transition-all duration-300">
                      <div
                        className={`p-3.5 rounded-xl text-xs leading-relaxed border ${
                          currentDrawer === "challenges"
                            ? "bg-amber-50 border-amber-200 text-amber-900"
                            : "bg-indigo-50 border-indigo-200 text-indigo-900"
                        }`}
                      >
                        <div className="font-bold flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                          {currentDrawer === "challenges" ? (
                            <>
                              <FiTarget className="w-3 h-3 text-amber-600" /> Key Challenge
                            </>
                          ) : (
                            <>
                              <FiCompass className="w-3 h-3 text-indigo-600" /> Future Roadmap
                            </>
                          )}
                        </div>
                        {currentDrawer === "challenges"
                          ? project.challenges
                          : project.futurePlans}
                      </div>
                    </div>
                  )}

                  {/* ── Tech Stack Badges ─────────────────────── */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium tracking-wide transition-colors duration-200 hover:border-blue-400 hover:text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── Card Footer Actions ───────────────────────── */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between gap-3">
                <Link
                  href={`/project/${project.id}`}
                  className="flex-1 py-3 px-4 rounded-xl accent-blue hover:brightness-105 text-white font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-98 group/btn"
                >
                  <span>View Case Study</span>
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>

                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Visit Live Application"
                    className="p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 transition-all duration-200 active:scale-95 shadow-xs"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubLink && project.githubLink !== "#" && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-all duration-200 active:scale-95 shadow-xs"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* ── Section Footer CTA ─────────────────────────────────── */}
      <div className="flex justify-center mt-16 md:mt-20">
        <Link
          href="/projects"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 text-slate-800 font-bold text-base transition-all duration-300 hover:shadow-lg active:scale-98 shadow-sm"
        >
          <span className="flex items-center gap-2">
            <span>Explore All Projects Archive</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              {projectsList.length}+
            </span>
          </span>
          <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600" />
        </Link>
      </div>
    </section>
  );
}
