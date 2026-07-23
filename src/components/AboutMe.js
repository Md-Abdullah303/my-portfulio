"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";
import { FiCode, FiLayout, FiZap, FiUsers } from "react-icons/fi";

export default function AboutMe() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="about">
      {/* Header Section */}
      <header className="text-center mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wider uppercase"
        >
          My Story
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Me</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg"
        >
          I bridge the gap between complex logic and elegant design, crafting digital experiences that resonate and perform.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column (Profile Card) */}
        <motion.aside 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="lg:col-span-4 space-y-8"
        >
          <div className="glass-card p-8 flex flex-col items-center text-center border border-blue-500/20 rounded-[2.5rem] bg-slate-900/40 backdrop-blur-2xl relative overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700"></div>
            
            {/* Portrait Image */}
            <div
              className="w-full aspect-square mb-8 overflow-hidden rounded-[2rem] relative border border-slate-700/50 shadow-2xl"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image 
                src="/profile.jpg" 
                alt="Mohammad Abdullah Portrait" 
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                draggable={false}
              />
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Available for projects</span>
            </div>

            {/* Name and Bio */}
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Mohammad Abdullah</h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 px-2">
              Full Stack Developer specializing in building scalable web applications and high-performance digital products.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/khanmd-abdullah/", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { label: "GitHub", href: "https://github.com/Md-Abdullah303", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  whileHover={{ y: -3, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-800/50 border border-blue-500/30 text-slate-300 transition-all shadow-lg"
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
              className="w-full bg-blue-600 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg shadow-blue-500/30 block text-center uppercase tracking-widest text-sm"
            >
              Let&apos;s Connect
            </motion.a>
          </div>
        </motion.aside>

        {/* Right Content Grid */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Bio Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="glass-card p-10 bg-slate-900/40 border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] rounded-full"></div>
            <h3 className="text-3xl font-bold text-white mb-6">Expertise in Digital Innovation</h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              Hello! I&apos;m <span className="text-blue-400 font-semibold">Mohammad Abdullah</span>, a developer who thrives at the intersection of aesthetics and functionality. I specialize in building robust applications that provide seamless user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              With a deep understanding of modern web architectures and a keen eye for detail, I transform complex requirements into intuitive digital products. My goal is always to deliver code that is as clean as the interfaces it powers.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              When I&apos;m not coding, you&apos;ll probably find me playing competitive online games or enjoying a strategic match of chess. In my free time, I love watching YouTube and anime to unwind, and whenever possible, I always prioritize spending quality time hanging out with my family.
            </p>
            
            {/* Tech Stack Section Embedded */}
            <div className="pt-8 border-t border-slate-800/50">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-[0.2em] mb-6">Core Technology Stack</h4>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { name: "React", icon: SiReact, color: "text-sky-400", shadow: "shadow-[0_0_20px_rgba(56,189,248,0.2)]" },
                  { name: "Next.js", icon: SiNextdotjs, color: "text-white", shadow: "shadow-[0_0_20px_rgba(255,255,255,0.15)]" },
                  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500", shadow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
                  { name: "Express.js", icon: SiExpress, color: "text-slate-300", shadow: "shadow-[0_0_20px_rgba(147,197,253,0.15)]" },
                ].map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-slate-800/60 rounded-2xl border border-blue-500/20 backdrop-blur-sm ${tech.shadow} transition-shadow duration-300`}
                    title={tech.name}
                  >
                    <tech.icon className={`text-3xl md:text-4xl ${tech.color} drop-shadow-md`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Specializations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Frontend Engineering", 
                desc: "Crafting highly interactive, responsive, and accessible user interfaces using React and Next.js.",
                icon: <FiLayout className="text-blue-400" />,
                gradient: "from-blue-500/20 to-transparent"
              },
              { 
                title: "Backend Development", 
                desc: "Designing scalable server-side architectures and efficient database schemas with Node.js and MongoDB.",
                icon: <FiCode className="text-emerald-400" />,
                gradient: "from-emerald-500/20 to-transparent"
              },
              { 
                title: "Optimized Performance", 
                desc: "Focusing on lightning-fast load times, SEO optimization, and smooth animations with GSAP and Framer Motion.",
                icon: <FiZap className="text-yellow-400" />,
                gradient: "from-yellow-500/20 to-transparent"
              },
              { 
                title: "Collaborative Growth", 
                desc: "Working in agile environments to solve complex problems and deliver value-driven digital solutions.",
                icon: <FiUsers className="text-purple-400" />,
                gradient: "from-purple-500/20 to-transparent"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-8 bg-slate-900/40 border border-slate-800/50 rounded-[2rem] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden group`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-800/80 mb-6 text-2xl shadow-inner border border-slate-700/50">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
