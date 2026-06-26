"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RocketPreloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200; // 2.2 seconds total animation
    const intervalTime = 20;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // short wait after 100% before closing
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -1000 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-[#07080d] z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
    >
      {/* Twinkling Space Stars Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute w-1 h-1 bg-white rounded-full top-[10%] left-[20%] animate-pulse duration-1000"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-[25%] left-[80%] animate-pulse duration-700"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[10%] animate-pulse duration-1500"></div>
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-[50%] left-[60%] animate-pulse duration-1000"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[70%] left-[30%] animate-pulse duration-1200"></div>
        <div className="absolute w-1.5 h-1.5 bg-indigo-400 rounded-full top-[85%] left-[75%] animate-pulse duration-800"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] left-[60%] animate-pulse duration-1300"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-[65%] left-[85%] animate-pulse duration-900"></div>
      </div>

      {/* Nebula Glow */}
      <div className="absolute w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -bottom-10 animate-pulse duration-3000"></div>

      {/* Animation Container */}
      <div className="relative h-[300px] w-[100px] flex flex-col items-center justify-end mb-8">
        {/* Launch Path Line */}
        <div className="absolute top-0 bottom-10 w-[2px] bg-gradient-to-t from-blue-500/30 via-blue-500/10 to-transparent border-dashed border-l border-blue-500/20"></div>

        {/* Rocket Wrapper */}
        <motion.div
          animate={{
            y: -220 * (progress / 100), // Moves from bottom to top
          }}
          transition={{ ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Rocket SVG */}
          <svg
            className="w-16 h-16 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Rocket body */}
            <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
            <path d="M12 2C8.5 2 5.5 5 5.5 8.5C5.5 12 7.5 15.5 9 17L12 20L15 17C16.5 15.5 18.5 12 18.5 8.5C18.5 5 15.5 2 12 2Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M19.5 16.5c1.5 1.25 2.5 3.5 2.5 3.5s-2.25-1-3.5-2.5" />
            {/* Fire flame */}
            <path d="M12 20v3" stroke="#f97316" strokeWidth="2.5" className="animate-bounce" />
            {/* Window */}
            <circle cx="12" cy="9" r="2" fill="#07080d" stroke="currentColor" />
          </svg>

          {/* Glowing Flame Particle Trail */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.2,
            }}
            className="w-4 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full blur-[2px] mt-1 shadow-[0_0_10px_#f97316]"
          ></motion.div>
        </motion.div>
      </div>

      {/* Progress Text */}
      <div className="z-10 text-center">
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-blue-500/80 mb-2">
          Initializing System
        </h3>
        <div className="text-4xl font-extrabold tracking-tight text-white tabular-nums">
          {Math.min(100, Math.floor(progress))}%
        </div>
      </div>
    </motion.div>
  );
}
