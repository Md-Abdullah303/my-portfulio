import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";

export default function RecentProjects({ projects = [] }) {
  // Show up to 6 featured projects on the homepage
  const displayedProjects = projects.slice(0, 6);

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
          Featured Work &amp; Innovations
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
      </header>

      {/* ── Project Cards Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={project.id || index} project={project} index={index} />
        ))}
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
              {projects.length}+
            </span>
          </span>
          <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5 text-blue-600" />
        </Link>
      </div>
    </section>
  );
}
