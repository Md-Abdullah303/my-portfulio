"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEFAULT_WORDS = ["Developer", "Designer", "Engineer"];

export default function TextMorph({
  words = DEFAULT_WORDS,
  interval = 2400,
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index];

  return (
    <span
      className={`inline-flex items-center align-baseline relative overflow-hidden py-1 px-1.5 ${className}`}
      aria-label={currentWord}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentWord}
          initial={{ y: 35, opacity: 0, filter: "blur(8px)", rotateX: -40 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", rotateX: 0 }}
          exit={{ y: -35, opacity: 0, filter: "blur(8px)", rotateX: 40 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 font-extrabold tracking-tight select-none"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>

      {/* Subtle modern accent cursor */}
      <span className="inline-block w-1 h-7 sm:h-9 md:h-12 ml-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full animate-pulse align-middle" />
    </span>
  );
}
