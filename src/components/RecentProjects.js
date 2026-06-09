"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    category: "The Modern Job Hunting Portal",
    title: "HireLoop",
    description:
      "HireLoop is a full-featured job hunting portal that bridges the gap between job seekers and employers. It streamlines job discovery, application management, and company recruitment — all in one platform.",
    image: "https://i.ibb.co.com/cKCLmNQn/hireloop-Img.png",
    link: "https://hireloop-client-chi.vercel.app",
    github: "https://github.com/Md-Abdullah303/hireloop-client",
    tags: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "User Base Authentication",
      "Gsap",
    ],
  },
  {
    category: "IdeaVault – Startup Idea Sharing Platform",
    title: "IdeaVault",
    description:
      "IdeaVault is a modern web-based startup idea sharing platform where users can:- Share innovative startup ideas, Explore ideas from other creators, Interact through comments & discussions, Validate ideas through community engagement, Collaborate and improve concepts together, Unlike booking or scheduling platforms, IdeaVault focuses on creativity, validation, and meaningful interaction between passionate builders and thinkers.",
    image: "https://i.ibb.co.com/whdWGpc7/Idea-Vult-Image.png",
    link: "https://ideavault-assainment.vercel.app/",
    github:
      "https://github.com/Md-Abdullah303/IdeaVault-Startup-Idea-Sharing-Platform",
    tags: ["Next.js", "JavaScrip ES6", "Better Auth", "MongoDB", "Express.js"],
  },
  {
    category: "Full Stack Platform",
    title: "QurbaniHat",
    description:
      "Livestock booking platform for Qurbani. Responsive web app to buy cows and goats with detailed animal profiles.",
    image: "https://i.ibb.co.com/kgQVC9wY/Screenshot-2026-05-06-120448.png",
    link: "https://cow-market-eight.vercel.app/",
    github: "https://github.com/Md-Abdullah303/B-13-A-7",
    tags: ["Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    category: "AI Imagery",
    title: "Generated AI Images",
    description:
      "Explore AI-driven imagery with a high-performance rendering engine and a seamless user experience.",
    image:
      "https://i.ibb.co.com/xq8Cc3rd/686151031-1298628179051917-7131519668026073681-n.jpg",
    link: "https://generated-ai-images.vercel.app/",
    github: "https://github.com/Md-Abdullah303/generated-ai-images",
    tags: ["React", "Tailwind CSS", "AI API", "Framer Motion"],
  },
  {
    category: "News Portal",
    title: "Dragon News",
    description:
      "Dynamic Next.js news application featuring real-time updates and a clean, readable layout for global news.",
    image: "https://i.ibb.co.com/GvkbbG4S/Screenshot-2026-05-06-121159.png",
    link: "https://dragon-news-prectise-next.vercel.app/",
    github: "https://github.com/Md-Abdullah303/dragon-news-prectise-next",
    tags: ["Next.js", "React", "Tailwind CSS", "News API"],
  },
  {
    category: "Organization Tool",
    title: "KeenKeeper",
    description:
      "An intuitive management tool designed to organize professional and personal tasks with ease.",
    image: "https://i.ibb.co.com/tPcQPCVf/Screenshot-2026-05-06-121338.png",
    link: "https://b-13-a-7-7rev.vercel.app/",
    github: "https://vercel.com/md-abdullah303s-projects/b-13-a-7",
    tags: ["React", "Tailwind CSS", "Node.js", "DaisyUI"],
  },
];

export default function RecentProjects() {
  return (
    <section
      className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto"
      id="recent-projects"
    >
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
          A curated mix of projects—scalable, fast, and future-ready—blending
          design, code, and creativity.
        </motion.p>
      </header>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="border border-white/[0.08] bg-[#0d0e12] rounded-[2.5rem] flex flex-col justify-between h-full group hover:border-white/20 transition-all duration-500 shadow-2xl relative overflow-hidden"
          >
            {/* Blue glow effect behind the card */}
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"></div>

            <div>
              {/* Mockup Container (Flush with top, left, right) */}
              <div className="bg-[#eaeaea] aspect-[16/10] relative flex flex-col p-3 shadow-inner w-full">
                {/* Fake Browser header */}
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

                {/* Browser viewport (Image flush with inner border) */}
                <div className="relative flex-grow w-full overflow-hidden rounded-xl bg-black">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Details (Padded) */}
              <div className="px-6 pt-6">
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm md:text-base line-clamp-3 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technology badges */}
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

            {/* Buttons (Padded) */}
            <div className="px-6 pb-6 flex gap-3">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-2 rounded-xl bg-[#16181f] hover:bg-[#20232d] border border-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-2 rounded-xl bg-[#16181f] hover:bg-[#20232d] border border-white/10 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
                GitHub repo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
