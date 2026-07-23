"use client";

import { motion } from "framer-motion";
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiGithub, 
  SiVercel,
  SiExpress
} from "react-icons/si";

const skills = [
  {
    title: "JavaScript",
    description: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    icon: SiJavascript,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    shadow: "shadow-yellow-400/20"
  },
  {
    title: "React",
    description: "Building fast, interactive, and component-based UIs with clean state management.",
    icon: SiReact,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    shadow: "shadow-sky-400/20"
  },
  {
    title: "Next.js",
    description: "Developing SEO-friendly, high-performance web applications with server-side rendering.",
    icon: SiNextdotjs,
    color: "text-white",
    bg: "bg-white/10",
    shadow: "shadow-white/20"
  },
  {
    title: "Tailwind CSS",
    description: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    icon: SiTailwindcss,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    shadow: "shadow-sky-400/20"
  },
  {
    title: "Node.js",
    description: "Developing scalable backend logic and high-performance server-side applications.",
    icon: SiNodedotjs,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    shadow: "shadow-emerald-500/20"
  },
  {
    title: "Express.js",
    description: "Building robust REST APIs and middleware solutions for modern web applications.",
    icon: SiExpress,
    color: "text-slate-300",
    bg: "bg-slate-300/10",
    shadow: "shadow-slate-300/20"
  },
  {
    title: "MongoDB",
    description: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    icon: SiMongodb,
    color: "text-emerald-600",
    bg: "bg-emerald-600/10",
    shadow: "shadow-emerald-600/20"
  },
  {
    title: "Git & GitHub",
    description: "Expert version control and collaborative development using Git and GitHub workflows.",
    icon: SiGithub,
    color: "text-white",
    bg: "bg-white/10",
    shadow: "shadow-white/20"
  },
  {
    title: "Vercel & Netlify",
    description: "Professional deployment and hosting solutions for modern web applications.",
    icon: SiVercel,
    color: "text-white",
    bg: "bg-white/10",
    shadow: "shadow-white/20"
  },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 px-6 relative overflow-hidden" id="skills">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase"
          >
            My Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Leveraging a modern tech stack to build high-performance, accessible, and user-centric digital solutions.
          </motion.p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.article 
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card group p-1 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-[2rem] border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 shadow-2xl"
            >
              <div className="p-10 h-full flex flex-col items-center text-center">
                <div className={`w-20 h-20 flex items-center justify-center rounded-2xl ${skill.bg} border border-slate-700/50 mb-8 group-hover:scale-110 transition-transform duration-500 relative`}>
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 blur-2xl ${skill.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <skill.icon className={`text-5xl ${skill.color} relative z-10 drop-shadow-xl`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                  {skill.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
