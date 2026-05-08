"use client";

import { motion } from "framer-motion";

export default function Resume() {
  const education = [
    {
      period: "2022 - 2023 Agradut Bidya Niketon High School",
      degree: "SSC",
      description: "Successfully completed my Secondary School Certificate (SSC) from the Science group with a GPA of 4.50. This period was crucial in developing my analytical thinking and a deep interest in technology.",
    },
    {
      period: "2024 - 2027 Chandpur Politechnic Institute",
      degree: "Diploma in Engineering",
      description: "Currently pursuing a Diploma in Engineering, where I am gaining hands-on experience in technical systems, engineering principles, and professional project development.",
    },
  ];

  const experience = [
    {
      period: "2020 - Present",
      role: "Senior Designer",
      description: "Dynamically communicate mission-critical supply chains after client-based human.",
    },
    {
      period: "2021 - Web Code",
      role: "Lead ui/ux designer",
      description: "Holistically create excellent web-readiness and prospective strategic theme.",
    },
    {
      period: "2018 - CodexCoder",
      role: "UI & UX Designer",
      description: "Design teams employ user experience(UX)design as a process to make things.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
        {/* Vertical Separator */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 dashed-divider opacity-30"></div>

        {/* Education Column */}
        <div className="md:pr-12 lg:pr-20 space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16"
          >
            Education
          </motion.h2>
          
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4 group"
            >
              <div className="inline-block px-4 py-1.5 rounded-full pill-bg text-teal-400 text-sm font-semibold tracking-wide group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                {item.period}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">{item.degree}</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Experience Column */}
        <div className="md:pl-12 lg:pl-20 space-y-16">
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-16"
          >
            Experience
          </motion.h2>

          {experience.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4 group"
            >
              <div className="inline-block px-4 py-1.5 rounded-full pill-bg text-teal-400 text-sm font-semibold tracking-wide group-hover:bg-teal-400 group-hover:text-black transition-all duration-300">
                {item.period}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">{item.role}</h3>
              <p className="text-gray-400 leading-relaxed text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative bottom line */}
      <div 
        className="mt-32 w-full h-[1px] dashed-divider opacity-20 rotate-180" 
        style={{ 
          backgroundSize: "12px 1px", 
          width: "100%", 
          height: "1px", 
          backgroundImage: "linear-gradient(to right, #1e293b 50%, transparent 50%)" 
        }}
      ></div>
    </section>
  );
}
