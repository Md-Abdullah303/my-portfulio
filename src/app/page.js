"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import RecentProjects from "@/components/RecentProjects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import RocketPreloader from "@/components/RocketPreloader";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const statCardsRef = useRef([]);

  const titles = ["Full Stack Developer", "React Specialist", "Next.js Developer"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }
    setTypedTitle(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  useEffect(() => {
    // GSAP Floating Animation for Stat Cards
    statCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: "random(-15, 15)",
        x: "random(-10, 10)",
        rotation: "random(-2, 2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !statCardsRef.current.includes(el)) {
      statCardsRef.current.push(el);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <RocketPreloader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className={loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000 ease-out"}>
        <div className="min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/40 backdrop-blur-md border-b border-white/5 py-3" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <nav className={`transition-all duration-300 flex items-center justify-between ${
            scrolled ? "px-0" : "glass-nav rounded-full px-8 py-3"
          }`}>
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-sm md:text-lg font-bold tracking-widest uppercase cursor-pointer whitespace-nowrap"
            >
              Mohammad Abdullah
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-400">
              {["HOME", "ABOUT", "SKILLS", "RESUME", "PROJECTS", "CONTACT"].map((item) => (
                <li key={item}>
                  <motion.a 
                    href={`#${item === 'HOME' ? '' : item.toLowerCase() === 'projects' ? 'recent-projects' : item.toLowerCase()}`}
                    whileHover={{ y: -2, color: "#fff" }}
                    className="transition-colors uppercase cursor-pointer"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              {/* Download CV */}
              <motion.a
                href="/Full_Stack_Email_Abdullah.pdf"
                download="Mohammad_Abdullah_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold accent-blue text-white whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </motion.a>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Content */}
          <section className="space-y-8">
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-7xl font-extrabold leading-tight"
              >
                Hi! I&apos;m <span className="text-blue-500">Mohammad Abdullah</span>, <br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-blue-400 italic font-semibold"
                  >
                    {typedTitle}
                    <span className="animate-pulse text-blue-500">|</span>
                  </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed"
              >
                Building seamless digital experiences with a focus on clean code, 
                stunning design, and exceptional performance.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              <motion.a 
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="accent-blue px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center cursor-pointer"
              >
                Let&apos;s Connect
              </motion.a>
              <motion.a 
                href="#recent-projects"
                whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="glass-card px-10 py-4 rounded-2xl font-bold text-lg flex items-center justify-center cursor-pointer"
              >
                See My Work
              </motion.a>
            </motion.div>
          </section>

          {/* Right Column: Visual Portrait & Stats */}
          <section className="relative flex justify-center items-center">
            {/* Portrait Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="relative w-72 h-72 md:w-[26rem] md:h-[26rem] portrait-glow rounded-full"
            >
              {/* Mohammad Abdullah Portrait */}
              <div
                className="w-full h-full rounded-full overflow-hidden border-4 border-blue-900/30 relative"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src="/profile.jpg"
                  alt="Mohammad Abdullah Portrait"
                  fill
                  sizes="(max-width: 768px) 288px, 416px"
                  className="object-cover object-top pointer-events-none select-none"
                  priority
                  draggable={false}
                />
              </div>

              {/* Floating Glass Cards (Stats) */}
              {[
                { label: "Coding Experience", value: "1200+ Hrs", className: "-top-10 -left-20 w-60" },
                { label: "Projects Completed", value: "10+", className: "bottom-12 -left-28 w-60" },
                { label: "Years of Experience", value: "1.5+", className: "-bottom-10 -right-12 w-60" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  ref={addToRefs}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + (i * 0.1) }}
                  className={`absolute glass-card p-6 rounded-3xl ${stat.className} z-10 cursor-default hover:border-white/30 transition-all duration-500 hover:scale-110`}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest mt-2 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative background glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"
            ></motion.div>
          </section>
        </div>
      </main>

      <AboutMe />

      <Skills />

      <Resume />

      <RecentProjects />

      <Contact />

      <Footer />

      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-50">
        <motion.div 
          animate={{ 
            x: [0, 30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -60, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"
        ></motion.div>
      </div>
      </div>
      </div>
    </>
  );
}
