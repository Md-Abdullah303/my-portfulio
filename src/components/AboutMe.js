"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="about">
      {/* Header Section */}
      <header className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          About Me
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg"
        >
          I build intuitive digital products—scalable, high-performing, and made through collaboration.
        </motion.p>
      </header>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column (Profile Card) */}
        <motion.aside 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 glass-card p-8 flex flex-col items-center text-center h-full border border-blue-500/20 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl"
        >
          {/* Portrait Image */}
          <div className="w-full aspect-square mb-6 overflow-hidden rounded-3xl relative">
            <Image 
              src="https://i.ibb.co.com/0jFj9qg8/a-professtion-pic-from-chat-gtp-croped.jpg" 
              alt="Mohammad Abdullah Portrait" 
              fill
              className="object-cover"
            />
          </div>

          {/* Status Badge */}
          <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-medium text-slate-300">Available for work</span>
          </div>

          {/* Name and Bio */}
          <h2 className="text-3xl font-bold text-white mb-2 tracking-tight uppercase">Mohammad Abdullah</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 px-4">
            Create seamless experiences across web, mobile, and desktop with modern technologies.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/khanmd-abdullah/", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
              { label: "GitHub", href: "https://github.com/Md-Abdullah303", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              { label: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
            ].map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -3, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800/50 border border-blue-500/30 text-slate-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}></path>
                </svg>
              </motion.a>
            ))}
          </div>

          {/* Call to Action */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-500/20 block text-center"
          >
            Let&apos;s Connect
          </motion.a>
        </motion.aside>

        {/* Right Content Grid */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Bio Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 bg-slate-900/40 border border-blue-500/10 rounded-[2rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Hi! I&apos;m Mohammad Abdullah,</h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              a developer passionate about building meaningful digital experiences. With a focus on clean code, thoughtful design, and scalable solutions, I help turn ideas into products that people love to use.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I specialize in web development, cross-platform applications, and UI/UX design, blending creativity with technical expertise to deliver work that&apos;s both functional and visually compelling.
            </p>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col md:flex-row items-center justify-between bg-slate-900/40 border border-blue-500/10 rounded-[2rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-4 md:mb-0">My Tech Stack:</h3>
            <div className="flex items-center gap-6">
              {[
                { name: "JavaScript", color: "text-yellow-500", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
                { name: "Node.js", color: "text-emerald-500", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
                { name: "Python", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
                { name: "React", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
              ].map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`w-14 h-14 flex items-center justify-center ${tech.bg} rounded-2xl border ${tech.border}`}
                  title={tech.name}
                >
                  <div className={`text-2xl font-bold ${tech.color}`}>
                    {tech.name[0]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex-grow bg-slate-900/40 border border-blue-500/10 rounded-[2rem]"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {[
                { role: "Frontend Developer", company: "Nexus Creative", year: "2023" },
                { role: "Full Stack Dev", company: "BrightLeaf Co", year: "2021" },
                { role: "Web Developer", company: "SummitWorks", year: "2024" },
                { role: "UX/UI Designer", company: "UrbanFlow Lab", year: "2022" },
              ].map((exp, i) => (
                <div 
                  key={i}
                  className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 ${
                    i !== 3 ? "border-b border-blue-500/10" : ""
                  }`}
                >
                  <div className="font-bold text-slate-100 text-lg">{exp.role}</div>
                  <div className="text-slate-400 font-medium">{exp.company}</div>
                  <div className="text-blue-500 font-mono text-sm bg-blue-500/10 px-3 py-1 rounded-full">{exp.year}</div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
