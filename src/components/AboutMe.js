"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiMongodb, SiExpress, SiNodedotjs,
  SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiShadcnui, SiHeroui,
  SiGit, SiGithub, SiPostman, SiVercel, SiRender, SiFigma,
  SiUbuntu, SiDebian,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { FiCode, FiLayout, FiZap, FiUsers, FiArrowRight, FiLayers } from "react-icons/fi";
import { TbApi, TbBrandVscode } from "react-icons/tb";

// ── Animation variants ────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

// ── Tech Categories & Items ────────────────────────────────
const techCategories = [
  {
    id: "frontend",
    title: "Frontend Architecture",
    tabLabel: "Frontend & UI",
    icon: "⚛️",
    badge: "Primary Focus",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    headerBg: "bg-sky-50/70 border-sky-100",
    desc: "Building accessible, reactive, and lightning-fast web applications.",
    colSpan: "col-span-12 lg:col-span-7",
    gridCols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    items: [
      { name: "React.js", role: "UI Library", icon: SiReact, color: "text-sky-500", bg: "bg-sky-500/10" },
      { name: "Next.js", role: "Full-Stack App", icon: SiNextdotjs, color: "text-slate-900", bg: "bg-slate-900/10" },
      { name: "Tailwind CSS", role: "Modern Styling", icon: SiTailwindcss, color: "text-cyan-500", bg: "bg-cyan-500/10" },
      { name: "Shadcn/UI", role: "Design System", icon: SiShadcnui, color: "text-slate-800", bg: "bg-slate-800/10" },
      { name: "HeroUI", role: "Component Kit", icon: SiHeroui, color: "text-indigo-600", bg: "bg-indigo-600/10" },
      { name: "HTML5", role: "Semantic Markup", icon: SiHtml5, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "CSS3", role: "Modern Layouts", icon: SiCss, color: "text-blue-600", bg: "bg-blue-600/10" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    tabLabel: "Backend & DB",
    icon: "⚙️",
    badge: "Data & APIs",
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    headerBg: "bg-emerald-50/70 border-emerald-100",
    desc: "Designing resilient REST APIs and scalable database schemas.",
    colSpan: "col-span-12 lg:col-span-5",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    items: [
      { name: "Node.js", role: "JS Runtime", icon: SiNodedotjs, color: "text-emerald-600", bg: "bg-emerald-600/10" },
      { name: "Express.js", role: "Backend Framework", icon: SiExpress, color: "text-slate-700", bg: "bg-slate-700/10" },
      { name: "MongoDB", role: "NoSQL Database", icon: SiMongodb, color: "text-green-600", bg: "bg-green-600/10" },
      { name: "RESTful APIs", role: "Endpoint Design", icon: TbApi, color: "text-teal-600", bg: "bg-teal-600/10" },
    ],
  },
  {
    id: "languages",
    title: "Core Languages",
    tabLabel: "Languages",
    icon: "🌐",
    badge: "Foundations",
    gradient: "from-amber-500 via-orange-500 to-yellow-500",
    headerBg: "bg-amber-50/70 border-amber-100",
    desc: "Typed logic, async architecture, and standards.",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    gridCols: "grid-cols-1",
    items: [
      { name: "JavaScript", role: "Modern ES6+ Web", icon: SiJavascript, color: "text-amber-500", bg: "bg-amber-500/10" },
      { name: "TypeScript", role: "Strict Type Safety", icon: SiTypescript, color: "text-blue-600", bg: "bg-blue-600/10" },
    ],
  },
  {
    id: "tools",
    title: "Dev Tools & Cloud",
    tabLabel: "Tools & Cloud",
    icon: "🛠️",
    badge: "Workflow",
    gradient: "from-purple-500 via-violet-500 to-pink-500",
    headerBg: "bg-purple-50/70 border-purple-100",
    desc: "CI/CD automation, testing, and UI design.",
    colSpan: "col-span-12 md:col-span-12 lg:col-span-6",
    gridCols: "grid-cols-1 sm:grid-cols-2",
    items: [
      { name: "Git", role: "Version Control", icon: SiGit, color: "text-orange-600", bg: "bg-orange-600/10" },
      { name: "GitHub", role: "CI/CD & Repo", icon: SiGithub, color: "text-slate-900", bg: "bg-slate-900/10" },
      { name: "VS Code", role: "Primary IDE", icon: TbBrandVscode, color: "text-sky-500", bg: "bg-sky-500/10" },
      { name: "Postman", role: "API Testing", icon: SiPostman, color: "text-orange-500", bg: "bg-orange-500/10" },
      { name: "Vercel", role: "Edge Hosting", icon: SiVercel, color: "text-slate-900", bg: "bg-slate-900/10" },
      { name: "Render", role: "Cloud Services", icon: SiRender, color: "text-slate-800", bg: "bg-slate-800/10" },
      { name: "Figma", role: "UI/UX Design", icon: SiFigma, color: "text-pink-500", bg: "bg-pink-500/10" },
    ],
  },
  {
    id: "os",
    title: "Operating Systems",
    tabLabel: "Environments & OS",
    icon: "💻",
    badge: "Platforms",
    gradient: "from-blue-600 via-indigo-600 to-slate-700",
    headerBg: "bg-slate-50/70 border-slate-200",
    desc: "Cross-platform development on desktop and servers.",
    colSpan: "col-span-12 md:col-span-6 lg:col-span-3",
    gridCols: "grid-cols-1",
    items: [
      { name: "Windows", role: "Main Workstation", icon: FaWindows, color: "text-blue-500", bg: "bg-blue-500/10" },
      { name: "Ubuntu", role: "Linux & WSL", icon: SiUbuntu, color: "text-orange-600", bg: "bg-orange-600/10" },
      { name: "Debian", role: "Production Server", icon: SiDebian, color: "text-red-600", bg: "bg-red-600/10" },
    ],
  },
];

// ── Specializations ───────────────────────────────────────
const specializations = [
  {
    title: "Frontend Engineering",
    desc: "Crafting highly interactive, responsive, and accessible user interfaces using React and Next.js.",
    icon: <FiLayout />,
    color: "text-blue-600",
    bg: "bg-blue-50",
    accent: "from-blue-500 to-blue-600",
    hoverBorder: "hover:border-blue-300",
  },
  {
    title: "Backend Development",
    desc: "Designing scalable server-side architectures and efficient database schemas with Node.js and MongoDB.",
    icon: <FiCode />,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    accent: "from-emerald-500 to-emerald-600",
    hoverBorder: "hover:border-emerald-300",
  },
  {
    title: "Optimized Performance",
    desc: "Focusing on lightning-fast load times, SEO optimization, and clean architectural design.",
    icon: <FiZap />,
    color: "text-amber-500",
    bg: "bg-amber-50",
    accent: "from-amber-500 to-amber-600",
    hoverBorder: "hover:border-amber-300",
  },
  {
    title: "Collaborative Growth",
    desc: "Working in agile environments to solve complex problems and deliver value-driven digital solutions.",
    icon: <FiUsers />,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    accent: "from-indigo-500 to-indigo-600",
    hoverBorder: "hover:border-indigo-300",
  },
];

// ═══════════════════════════════════════════════════════════
//  ABOUT ME SECTION
// ═══════════════════════════════════════════════════════════
export default function AboutMe() {
  const [activeTab, setActiveTab] = useState("all");

  const totalCount = techCategories.reduce((acc, cat) => acc + cat.items.length, 0);

  const displayedCategories =
    activeTab === "all"
      ? techCategories
      : techCategories.filter((cat) => cat.id === activeTab);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative" id="about">

      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 blur-[140px] rounded-full pointer-events-none -z-10 opacity-50" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-indigo-50 blur-[120px] rounded-full pointer-events-none -z-10 opacity-40" />

      {/* ══════════════════════════════════════════════════════
          PART 1: Hero-style About — Image + Bio side by side
          ══════════════════════════════════════════════════════ */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {/* Left — Profile Image (2 cols) */}
        <motion.div className="lg:col-span-2" variants={cardReveal}>
          <div className="relative group">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border-4 border-white shadow-2xl transition-all duration-500 group-hover:shadow-[0_25px_60px_-15px_rgba(59,130,246,0.3)]">
              <Image
                src="/MD_Abdullah.png"
                alt="Mohammad Abdullah — Full Stack Web Developer"
                width={500}
                height={600}
                className="w-full h-auto object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider">Available for work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Mohammad Abdullah</h2>
                <p className="text-white/70 text-sm mt-1 font-medium">Full Stack Web Developer</p>
              </div>
            </div>

            <div className="absolute -inset-3 rounded-[3rem] border-2 border-dashed border-blue-200/50 -z-10 animate-spin-slow" />

            {/* Social links below image */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/khanmd-abdullah/", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { label: "GitHub", href: "https://github.com/Md-Abdullah303", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                { label: "Facebook", href: "https://www.facebook.com/khan.abdullha.284951", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-sm transition-all"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.d} /></svg>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Bio Text (3 cols) */}
        <motion.div className="lg:col-span-3 space-y-6" variants={cardReveal}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold tracking-wider uppercase">
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Crafting Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Experiences
            </span>{" "}
            That Matter
          </h2>

          <div className="space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
            <p>
              Hello! I&apos;m <span className="text-blue-600 font-bold">Mohammad Abdullah</span>, a Full Stack Developer who thrives at the intersection of aesthetics and functionality. I specialize in building robust applications that provide seamless user experiences.
            </p>
            <p>
              With a deep understanding of modern web architectures and a keen eye for detail, I transform complex requirements into intuitive digital products. My goal is always to deliver code that is as clean as the interfaces it powers.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me playing{" "}
              <span className="text-blue-600 font-semibold">competitive online games</span>,
              enjoying a strategic <span className="text-blue-600 font-semibold">match of chess</span>,
              watching <span className="text-blue-600 font-semibold">YouTube &amp; anime</span>,
              or <span className="text-blue-600 font-semibold">hanging out with my family</span>.
            </p>
          </div>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 accent-blue text-white font-bold py-3.5 px-8 rounded-2xl transition-all shadow-md hover:shadow-lg hover:brightness-105 text-sm uppercase tracking-widest"
            >
              Let&apos;s Work Together
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════
          PART 2: REDESIGNED UNIQUE TECH MATRIX & BENTO SHOWCASE
          ══════════════════════════════════════════════════════ */}
      <motion.div
        className="mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
      >
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            Technical Arsenal
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Tools of My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Development Craft
            </span>
          </h3>
          <p className="text-slate-600 text-base max-w-2xl mx-auto leading-relaxed">
            Every tool in my stack is chosen for speed, reliability, and delivering exceptional real-world user experiences.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "all"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-xs"
              }`}
            >
              All Tech <span className="opacity-70 ml-1">({totalCount})</span>
            </button>

            {techCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 shadow-xs"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.tabLabel}</span>
                <span className={`text-[10px] ml-1 px-1.5 py-0.5 rounded-full ${activeTab === cat.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {cat.items.length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`grid grid-cols-12 gap-6 ${activeTab !== "all" ? "max-w-4xl mx-auto" : ""}`}
          >
            {displayedCategories.map((category) => (
              <div
                key={category.id}
                className={`${
                  activeTab === "all" ? category.colSpan : "col-span-12"
                } bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.03)] p-6 md:p-8 relative overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-slate-300 transition-all duration-500`}
              >
                {/* Top Glowing Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`} />

                {/* Ambient Card Background Glow on Hover */}
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-50/50 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700 opacity-60" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-center text-xl shadow-xs group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                          {category.title}
                        </h4>
                        <p className="text-slate-400 text-xs font-medium">
                          {category.items.length} Production Technologies
                        </p>
                      </div>
                    </div>

                    <span className="hidden xl:inline-flex text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 uppercase tracking-wider flex-shrink-0">
                      {category.badge}
                    </span>
                  </div>

                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {category.desc}
                  </p>

                  {/* Micro-Card Chips Grid */}
                  <div className={`grid gap-2.5 ${
                    activeTab === "all"
                      ? category.gridCols
                      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  }`}>
                    {category.items.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ y: -2, scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className="flex items-center gap-3 p-2.5 px-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:bg-white hover:border-blue-400/80 hover:shadow-md transition-all duration-200 cursor-default group/chip"
                      >
                        {/* Icon Box */}
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${tech.bg} flex-shrink-0 group-hover/chip:scale-110 transition-transform duration-200`}>
                          <tech.icon className={`text-lg ${tech.color}`} />
                        </div>

                        {/* Tech Details */}
                        <div className="min-w-0 flex-1">
                          <div className="text-xs font-bold text-slate-800 group-hover/chip:text-blue-600 transition-colors truncate">
                            {tech.name}
                          </div>
                          <div className="text-[10px] font-semibold text-slate-400 group-hover/chip:text-slate-500 truncate">
                            {tech.role}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom Footer Info Line */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Production Ready
                  </span>
                  <span className="font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                    Verified Skill →
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* ══════════════════════════════════════════════════════
          PART 3: Specialization Cards — 2×2
          ══════════════════════════════════════════════════════ */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
      >
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
            What I{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Specialize
            </span>{" "}
            In
          </h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Core areas of expertise that drive every project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializations.map((spec) => (
            <motion.div
              key={spec.title}
              variants={cardReveal}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-md ${spec.hoverBorder} transition-all duration-300 relative overflow-hidden group hover:shadow-xl`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${spec.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${spec.bg} ${spec.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {spec.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {spec.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
