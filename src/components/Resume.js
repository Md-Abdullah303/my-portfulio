"use client";

import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      period: "2022 - 2023",
      institution: "Agradut Bidya Niketon High School",
      degree: "SSC",
      description: "Successfully completed my Secondary School Certificate (SSC) from the Science group with a GPA of 4.50. This period was crucial in developing my analytical thinking and a deep interest in technology.",
    },
    {
      period: "2024 - 2027",
      institution: "Chandpur Politechnic Institute",
      degree: "Diploma in Engineering",
      description: "Currently pursuing a Diploma in Engineering, where I am gaining hands-on experience in technical systems, engineering principles, and professional project development.",
    },
  ];

  const experience = [
    {
      period: "2024",
      institution: "LegalEase Platform",
      role: "Full Stack Developer",
      description: "Architected and developed a comprehensive legal tech platform. Engineered core features including lawyer discovery, consultation booking, integrated payment gateways (Stripe), and dedicated admin/lawyer dashboards using Next.js and MongoDB.",
    },
    {
      period: "2023 - 2024",
      institution: "HireLoop & IdeaVault",
      role: "Frontend Engineer",
      description: "Built a modern job hunting portal (HireLoop) and a startup idea sharing platform (IdeaVault). Implemented streamlined job discovery flows, complex user authentication (Better Auth), and focused on high-performance animations and user experience with React and Tailwind CSS.",
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
        {/* Vertical Separator (Hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-slate-700/50"></div>

        {/* Education Column */}
        <div className="space-y-12">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4"
          >
            <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
            Education
          </motion.h2>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4 group relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    {item.period}
                  </div>
                  <span className="text-slate-400 text-sm font-medium italic">
                    {item.institution}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-slate-400 leading-relaxed text-base max-w-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-12">
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4"
          >
            <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
            Experience
          </motion.h2>

          <div className="space-y-12">
            {experience.length > 0 ? (
              experience.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-4 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      {item.period}
                    </div>
                    <span className="text-slate-400 text-sm font-medium italic">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base max-w-lg">
                    {item.description}
                  </p>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                className="text-slate-400 text-lg italic pl-4 border-l border-emerald-500/30"
              >
                None
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        className="mt-20 flex justify-center"
      >
        <motion.a
          href="/Full_Stack_Email_Abdullah.pdf"
          download="Mohammad_Abdullah_Resume.pdf"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,102,255,0.35)" }}
          whileTap={{ scale: 0.97 }}
          className="accent-blue flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Full Resume
        </motion.a>
      </motion.div>

      {/* Decorative bottom line */}
      <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent"></div>
    </section>
  );
}
