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
  const [scrolled, setScrolled]     = useState(false);
  const [loading, setLoading]       = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex]   = useState(0);
  const [deleting, setDeleting]     = useState(false);
  const statCardsRef = useRef([]);

  const titles = ["Full Stack Developer", "React Specialist", "Next.js Developer"];

  const navLinks = ["HOME", "ABOUT", "SKILLS", "RESUME", "PROJECTS", "CONTACT"];

  const navHref = (item) =>
    item === "HOME" ? "#"
    : item === "PROJECTS" ? "#recent-projects"
    : `#${item.toLowerCase()}`;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  // GSAP floating animation (desktop only)
  useEffect(() => {
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

          {/* ── Header ─────────────────────────────────────── */}
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

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-400">
                  {navLinks.map((item) => (
                    <li key={item}>
                      <motion.a
                        href={navHref(item)}
                        whileHover={{ y: -2, color: "#fff" }}
                        className="transition-colors uppercase cursor-pointer"
                      >
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>

                {/* Desktop Download CV */}
                <motion.a
                  href="/Full_Stack_Email_Abdullah.pdf"
                  download="Mohammad_Abdullah_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold accent-blue text-white whitespace-nowrap"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </motion.a>

                {/* Mobile Hamburger Button */}
                <button
                  id="hamburger-btn"
                  aria-label="Toggle menu"
                  onClick={() => setMobileOpen((o) => !o)}
                  className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
                >
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block w-7 h-[2px] bg-white rounded-full"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block w-7 h-[2px] bg-white rounded-full"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block w-7 h-[2px] bg-white rounded-full"
                  />
                </button>
              </nav>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
              {mobileOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="mx-4 mt-3 mb-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                    <ul className="flex flex-col py-4">
                      {navLinks.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <a
                            href={navHref(item)}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center px-6 py-4 text-sm font-bold tracking-widest text-gray-400 hover:text-white hover:bg-white/5 transition-all uppercase"
                          >
                            {item}
                          </a>
                        </motion.li>
                      ))}
                      {/* Download CV inside mobile menu */}
                      <li className="px-6 pt-3 pb-2 border-t border-white/5 mt-2">
                        <a
                          href="/Full_Stack_Email_Abdullah.pdf"
                          download="Mohammad_Abdullah_Resume.pdf"
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl accent-blue text-sm font-bold text-white"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download CV
                        </a>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>

          {/* ── Hero ───────────────────────────────────────── */}
          <main className="relative pt-32 md:pt-40 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text Content */}
              <section className="space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
                  >
                    Hi! I&apos;m{" "}
                    <span className="text-blue-500">Mohammad Abdullah</span>,{" "}
                    <br className="hidden sm:block" />
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
                    className="text-gray-400 text-base md:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0"
                  >
                    Building seamless digital experiences with a focus on clean code,
                    stunning design, and exceptional performance.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="accent-blue px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer"
                  >
                    Let&apos;s Connect
                  </motion.a>
                  <motion.a
                    href="#recent-projects"
                    whileHover={{ scale: 1.05, background: "rgba(255, 255, 255, 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer"
                  >
                    See My Work
                  </motion.a>
                </motion.div>

                {/* Mobile Stats Row (visible only on mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex lg:hidden justify-center gap-6 pt-4"
                >
                  {[
                    { label: "Coding Hrs", value: "1200+" },
                    { label: "Projects", value: "10+" },
                    { label: "Experience", value: "1.5+" },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card p-4 rounded-2xl text-center min-w-[80px]">
                      <div className="text-xl font-bold text-blue-400">{stat.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </section>

              {/* Right: Portrait + Floating Stats (desktop only) */}
              <section className="relative flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] portrait-glow rounded-full"
                >
                  {/* Portrait */}
                  <div
                    className="w-full h-full rounded-full overflow-hidden border-4 border-blue-900/30 relative"
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <Image
                      src="/profile.jpg"
                      alt="Mohammad Abdullah Portrait"
                      fill
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 416px"
                      className="object-cover object-top pointer-events-none select-none"
                      priority
                      draggable={false}
                    />
                  </div>

                  {/* Floating Stat Cards — desktop only */}
                  {[
                    { label: "Coding Experience", value: "1200+ Hrs", className: "-top-10 -left-20 w-56 hidden md:block" },
                    { label: "Projects Completed", value: "10+",        className: "bottom-12 -left-28 w-56 hidden md:block" },
                    { label: "Years of Experience", value: "1.5+",      className: "-bottom-10 -right-12 w-56 hidden md:block" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      ref={addToRefs}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className={`absolute glass-card p-5 rounded-3xl ${stat.className} z-10 cursor-default hover:border-white/30 transition-all duration-500 hover:scale-110`}
                    >
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-widest mt-1.5 font-semibold">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Background glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -z-10 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"
                />
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
              animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full"
            />
            <motion.div
              animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
