"use client";

import React, { useState } from "react";
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

export default function ProjectCard({ project, index = 0 }) {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const domain =
    project.liveLink && project.liveLink !== "#"
      ? project.liveLink.replace(/^https?:\/\//, "").replace(/\/$/, "")
      : "portfolio.live";

  const toggleDrawer = (tab) => {
    setActiveDrawer((prev) => (prev === tab ? null : tab));
  };

  return (
    <article className="group relative rounded-[2rem] bg-white border border-slate-200/90 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl flex flex-col justify-between overflow-hidden hover:-translate-y-1.5">
      <div>
        {/* ── Browser Window Header ───────────────────────── */}
        <div className="px-5 py-3.5 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between gap-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Mock Browser URL Pill */}
          <div className="flex-1 max-w-[210px] mx-auto bg-white border border-slate-200 rounded-full px-3 py-1 flex items-center justify-center gap-1.5 text-[11px] text-slate-600 font-mono truncate shadow-xs">
            <FiLock className="w-3 h-3 text-emerald-600 shrink-0" />
            <span className="truncate">{domain}</span>
          </div>

          {/* Live Beacon Pill */}
          <div className="flex items-center gap-1.5 shrink-0 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
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
                  onClick={() => toggleDrawer("challenges")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    activeDrawer === "challenges"
                      ? "bg-amber-100 text-amber-900 border-amber-300 shadow-xs"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  <FiTarget className="w-3.5 h-3.5 text-amber-600" />
                  Challenge
                  <FiChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDrawer === "challenges" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}

              {project.futurePlans && (
                <button
                  type="button"
                  onClick={() => toggleDrawer("futurePlans")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border cursor-pointer ${
                    activeDrawer === "futurePlans"
                      ? "bg-indigo-100 text-indigo-900 border-indigo-300 shadow-xs"
                      : "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  <FiCompass className="w-3.5 h-3.5 text-indigo-600" />
                  Roadmap
                  <FiChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      activeDrawer === "futurePlans" ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>
          )}

          {/* ── Deep Dive Expandable Drawer ───────────── */}
          {activeDrawer && (
            <div className="overflow-hidden mb-5 transition-all duration-300">
              <div
                className={`p-3.5 rounded-xl text-xs leading-relaxed border ${
                  activeDrawer === "challenges"
                    ? "bg-amber-50 border-amber-200 text-amber-900"
                    : "bg-indigo-50 border-indigo-200 text-indigo-900"
                }`}
              >
                <div className="font-bold flex items-center gap-1.5 mb-1 text-[11px] uppercase tracking-wider">
                  {activeDrawer === "challenges" ? (
                    <>
                      <FiTarget className="w-3.5 h-3.5 text-amber-600" /> Key Challenge
                    </>
                  ) : (
                    <>
                      <FiCompass className="w-3.5 h-3.5 text-indigo-600" /> Future Roadmap
                    </>
                  )}
                </div>
                {activeDrawer === "challenges"
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
}
