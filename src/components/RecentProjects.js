"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    category: "Full Stack Platform",
    title: "QurbaniHat",
    description: "Livestock booking platform for Qurbani. Responsive web app to buy cows and goats with detailed animal profiles.",
    image: "https://i.ibb.co.com/kgQVC9wY/Screenshot-2026-05-06-120448.png",
    link: "https://cow-market-eight.vercel.app/",
  },
  {
    id: 2,
    category: "AI Imagery",
    title: "Generated AI Images",
    description: "Explore AI-driven imagery with a high-performance rendering engine and a seamless user experience.",
    image: "https://i.ibb.co.com/xq8Cc3rd/686151031-1298628179051917-7131519668026073681-n.jpg",
    link: "https://generated-ai-images.vercel.app/",
  },
  {
    id: 3,
    category: "News Portal",
    title: "Dragon News",
    description: "Dynamic Next.js news application featuring real-time updates and a clean, readable layout for global news.",
    image: "https://i.ibb.co.com/GvkbbG4S/Screenshot-2026-05-06-121159.png",
    link: "https://dragon-news-prectise-next.vercel.app/",
  },
  {
    id: 4,
    category: "Organization Tool",
    title: "KeenKeeper",
    description: "An intuitive management tool designed to organize professional and personal tasks with ease.",
    image: "https://i.ibb.co.com/tPcQPCVf/Screenshot-2026-05-06-121338.png",
    link: "https://b-13-a-7-7rev.vercel.app/",
  },
];

export default function RecentProjects() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto" id="recent-projects">
      {/* Header Section */}
      <header className="text-center mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        >
          Recent Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A curated mix of projects—scalable, fast, and future-ready—blending design, code, and creativity.
        </motion.p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="project-card relative group flex flex-col"
          >
            {/* Blue glow effect behind the card */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"></div>
            
            {/* Browser Preview Container */}
            <div className="relative rounded-t-3xl overflow-hidden border border-white/5 bg-[#0f1117] pt-4 px-4 h-64 md:h-80 flex flex-col transition-transform duration-500 group-hover:-translate-y-2">
              {/* Fake Browser UI */}
              <div className="flex gap-1.5 mb-4 opacity-50">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              
              {/* Website Snapshot */}
              <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Glassmorphic Details Panel */}
            <div className="glass-effect rounded-2xl -mt-20 p-6 md:p-8 flex flex-col gap-4 relative z-10 shadow-2xl transition-all duration-500 group-hover:translate-y-2 group-hover:bg-white/5 min-h-[220px]">
              <div className="flex">
                <span className="glass-effect px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/90">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3">
                {project.description}
              </p>
              
              {/* Live Link Button */}
              <div className="mt-auto pt-4">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  Live Demo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
