"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-[#06080d] text-white py-24 px-6 relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Back Button */}
        <Link
          href="/#recent-projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group font-semibold"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <header className="text-center mb-16 md:mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6"
          >
            All Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            A comprehensive list of everything I've built, showcasing my journey, experiments, and professional work.
          </motion.p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="border border-white/[0.08] bg-[#0d0e12] rounded-[2.5rem] flex flex-col justify-between h-full group hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"></div>

              <div>
                <div className="bg-[#eaeaea] aspect-[16/10] relative flex flex-col p-3 shadow-inner w-full">
                  <div className="flex items-center justify-between pb-3 px-2">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="h-5 bg-[#2d3139] rounded text-[8px] text-[#8e95a5] flex items-center justify-center px-3 w-40 truncate font-semibold">
                      {project.link.replace("https://", "")}
                    </div>
                    <div className="w-8"></div>
                  </div>

                  <div className="relative flex-grow w-full overflow-hidden rounded-xl bg-black">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="px-6 pt-6">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm md:text-base line-clamp-3 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.2 rounded-lg bg-[#16181f] border border-white/10 text-slate-400 font-semibold text-[10px] tracking-wide uppercase transition-colors duration-300 hover:border-white/20 hover:text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 flex gap-3">
                <Link
                  href={`/project/${project.id}`}
                  className="w-full py-3 px-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                >
                  View Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
