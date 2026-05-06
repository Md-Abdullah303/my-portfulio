"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "JavaScript",
    description: "Writing efficient, modern, and optimized code for both frontend and backend logic.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm15.5 15c.6 0 1-.4 1-1v-4h-1.5v3.5h-2V11H12v6c0 .6.4 1 1 1h5.5zM10 11H8.5v5.5H7V11H5.5v7h4.5v-7z"></path>
      </svg>
    ),
  },
  {
    title: "Tailwind CSS",
    description: "Creating responsive, modern, and clean layouts quickly using utility-first styling.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"></path>
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M3 3l18 18"></path>
      </svg>
    ),
  },
  {
    title: "React",
    description: "Building fast, interactive, and component-based UIs with clean state management.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2"></circle>
        <path d="M12 12c4.5-2 9-2 9 0s-4.5 2-9 2-9 2-9 0 4.5-2 9-2z" transform="rotate(0 12 12)"></path>
        <path d="M12 12c4.5-2 9-2 9 0s-4.5 2-9 2-9 2-9 0 4.5-2 9-2z" transform="rotate(60 12 12)"></path>
        <path d="M12 12c4.5-2 9-2 9 0s-4.5 2-9 2-9 2-9 0 4.5-2 9-2z" transform="rotate(120 12 12)"></path>
      </svg>
    ),
  },
  {
    title: "Next.js",
    description: "Developing SEO-friendly, high-performance web applications with server-side rendering.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.536 18.243l-4.536-6.243v6.243h-2v-10h2l4.536 6.243v-6.243h2v10h-2z"></path>
      </svg>
    ),
  },
  {
    title: "Node.js",
    description: "Developing scalable backend logic and high-performance server-side applications.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"></path>
        <path d="M12 3v18"></path>
        <path d="M12 12l8-4.5M12 12l-8-4.5M12 12v9"></path>
      </svg>
    ),
  },
  {
    title: "MongoDB",
    description: "Managing NoSQL databases with flexible schemas for high-performance data storage.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
      </svg>
    ),
  },
  {
    title: "Git & GitHub",
    description: "Expert version control and collaborative development using Git and GitHub workflows.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
      </svg>
    ),
  },
  {
    title: "Vercel & Netlify",
    description: "Professional deployment and hosting solutions for modern web applications.",
    icon: (
      <svg className="w-16 h-16 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L24 21H0L12 1Z"></path>
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="py-24 px-6 relative" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I work with modern tools and technologies to build fast, scalable and efficient web applications.
          </motion.p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.article 
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="gradient-border-card"
            >
              <div className="card-inner">
                <div className="mb-8">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-center text-gray-400 text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
