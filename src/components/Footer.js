"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05070a] text-white pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Brand Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase select-none bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent leading-none">
            Mohammad Abdullah
          </h2>
        </motion.div>

        {/* Navigation Links */}
        <nav className="mb-12">
          <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm font-bold tracking-widest text-gray-400">
            {["HOME", "ABOUT", "SKILLS", "RESUME", "PROJECTS", "CONTACT"].map((item) => (
              <li key={item}>
                <motion.a 
                  href={`#${item === 'HOME' ? '' : item.toLowerCase() === 'projects' ? 'recent-projects' : item.toLowerCase()}`}
                  whileHover={{ color: "#fff", scale: 1.1 }}
                  className="transition-all duration-300 uppercase cursor-pointer"
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-20">
          {[
            { label: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", hover: "group-hover:border-blue-400 group-hover:bg-blue-400/10" },
            { label: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", hover: "group-hover:border-white group-hover:bg-white/10" },
            { label: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", hover: "group-hover:border-blue-500 group-hover:bg-blue-500/10" },
          ].map((social) => (
            <motion.a 
              key={social.label} 
              href="#" 
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`w-14 h-14 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.hover}`}>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon}></path>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-xs font-medium tracking-widest uppercase">
            © {currentYear} Mohammad Abdullah. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6 text-xs font-bold text-gray-500 tracking-widest uppercase">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
