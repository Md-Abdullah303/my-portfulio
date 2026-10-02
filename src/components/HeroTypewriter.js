"use client";

import { useState, useEffect } from "react";

const TITLES = ["Full Stack Developer", "Next.js Specialist", "MERN Stack Developer"];

export default function HeroTypewriter() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  const typedTitle = TITLES[titleIndex]?.slice(0, charIndex) || "";

  return (
    <span className="text-blue-400 italic font-semibold text-3xl sm:text-4xl md:text-5xl">
      {typedTitle}
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  );
}
