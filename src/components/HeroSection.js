"use client";

import { memo, useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ParticleGrid from "@/components/ParticleGrid";
import TextMorph from "@/components/TextMorph";

// ── Animated counter hook (requestAnimationFrame-based) ────
function useCounter(end, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const numericEnd = parseFloat(end);
    const isDecimal = end.toString().includes(".");
    let startTime = null;
    let rafId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic for smooth deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = numericEnd * eased;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) rafId = requestAnimationFrame(step);
      else setCount(numericEnd);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [started, end, duration]);

  return { count, ref };
}

// ── Animation variants (defined outside component = no re-creation) ──
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Static data (outside component = zero re-allocation) ──
const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Md-Abdullah303", d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/khanmd-abdullah/", d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
  { label: "Facebook", href: "https://www.facebook.com/khan.abdullha.284951", d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
];

const STATS = [
  { label: "Coding Experience", shortLabel: "Coding Hrs", numEnd: 1200, suffix: "+ Hrs", className: "-top-10 -left-20 w-56 hidden md:block" },
  { label: "Projects Completed", shortLabel: "Projects", numEnd: 10, suffix: "+", className: "bottom-12 -left-28 w-56 hidden md:block" },
  { label: "Years of Experience", shortLabel: "Experience", numEnd: 1.5, suffix: "+", className: "-bottom-10 -right-12 w-56 hidden md:block" },
];

// ── Memoized Stat Card (prevents re-render when parent updates) ──
const StatCard = memo(function StatCard({ stat, index }) {
  const { count, ref } = useCounter(stat.numEnd);
  const displayValue = stat.numEnd % 1 !== 0 ? count.toFixed(1) : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.7 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute bg-white/95 border border-slate-200/90 p-5 rounded-3xl ${stat.className} z-10 cursor-default hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-md will-change-transform`}
    >
      {/* Float animation via CSS instead of JS for better perf */}
      <div className={`animate-float-${index + 1}`}>
        <div className="text-2xl font-bold text-slate-900">
          {displayValue}
          <span className="text-blue-600">{stat.suffix}</span>
        </div>
        <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1.5 font-semibold">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
});

// ── Memoized Mobile Stat Card ──────────────────────────────
const MobileStatCard = memo(function MobileStatCard({ stat }) {
  const { count, ref } = useCounter(stat.numEnd);
  const displayValue = stat.numEnd % 1 !== 0 ? count.toFixed(1) : count;

  return (
    <div ref={ref} className="bg-white border border-slate-200 p-4 rounded-2xl text-center min-w-20 shadow-sm">
      <div className="text-xl font-bold text-blue-600">
        {displayValue}{stat.suffix}
      </div>
      <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-semibold">
        {stat.shortLabel}
      </div>
    </div>
  );
});

// ═══════════════════════════════════════════════════════════
//  HERO SECTION
// ═══════════════════════════════════════════════════════════
export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  const scrollToAbout = useCallback(() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Skip all motion if user prefers reduced motion
  const motionProps = prefersReduced
    ? { initial: undefined, animate: undefined, variants: undefined }
    : {};

  return (
    <main className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
      {/* ── Interactive Particle / Dot Grid Background (Cursor Tracking) ── */}
      <ParticleGrid />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Text Content ──────────────────────────── */}
        <motion.section
          className="space-y-8 text-center lg:text-left"
          variants={!prefersReduced ? containerVariants : undefined}
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : "visible"}
        >
          {/* Available badge */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                Available for Projects
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={fadeUp} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
              Hi! I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-blue-700 animate-gradient-x">
                Mohammad Abdullah
              </span>
              ,{" "}
              <br className="hidden sm:block" />
              <TextMorph words={["Developer", "Designer", "Engineer"]} />
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-base md:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0"
          >
            Building seamless digital experiences with a focus on clean code,
            stunning design, and exceptional performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <Link
              href="#contact"
              className="group accent-blue hover:scale-105 active:scale-95 px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer transition-all duration-300 text-white shadow-lg shadow-blue-500/25 gap-2"
            >
              Let&apos;s Connect
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="/Mohammad_Abdullah_Resume.pdf"
              download="Mohammad_Abdullah_Resume.pdf"
              className="group bg-white hover:scale-105 active:scale-95 hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 text-blue-600 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons — using path data string instead of JSX SVG for smaller bundle */}
          <motion.div variants={fadeUp} className="flex gap-3 pt-2 justify-center lg:justify-start">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                aria-label={social.label}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.d} />
                </svg>
              </a>
            ))}
          </motion.div>

          {/* Mobile Stats */}
          <motion.div variants={fadeUp} className="flex lg:hidden justify-center gap-4 pt-4">
            {STATS.map((stat) => (
              <MobileStatCard key={stat.label} stat={stat} />
            ))}
          </motion.div>
        </motion.section>

        {/* ── Right: Portrait + Floating Stats ────────────── */}
        <motion.section
          className="relative flex justify-center items-center"
          initial={prefersReduced ? undefined : "hidden"}
          animate={prefersReduced ? undefined : "visible"}
          variants={fadeScale}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-104 md:h-104 portrait-glow rounded-full">
            {/* Portrait */}
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative will-change-transform"
              initial={prefersReduced ? undefined : { opacity: 0, scale: 0.85 }}
              animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>

            {/* Dashed ring — pure CSS, zero JS cost */}
            <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-blue-300/40 animate-spin-slow pointer-events-none" />

            {/* Floating Stat Cards — desktop only */}
            {STATS.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>

          {/* Background glows — pure CSS animation for perf */}
          <div className="absolute -z-10 w-112.5 h-112.5 bg-blue-400/15 blur-[120px] rounded-full pointer-events-none animate-glow-breathe" />
          <div className="absolute -z-10 w-75 h-75 bg-indigo-400/10 blur-[100px] rounded-full pointer-events-none -bottom-20 -left-20 animate-glow-breathe-alt" />
        </motion.section>
      </div>

      {/* ── Scroll Down Indicator ─────────────────────────── */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        onClick={scrollToAbout}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Scroll Down
        </span>
        <div className="animate-bounce-gentle">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </main>
  );
}
