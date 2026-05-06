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

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const statCardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              className="text-lg font-bold tracking-widest uppercase cursor-pointer"
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

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#"
                className="accent-blue px-6 py-2.5 rounded-full text-sm font-semibold block"
              >
                Book a call
              </Link>
            </motion.div>
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
                  className="text-gray-400 italic font-medium"
                >
                  I am a Web developer
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
              className="relative w-80 h-80 md:w-96 md:h-96 portrait-glow rounded-full"
            >
              {/* Mohammad Abdullah Portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-900/30 relative">
                <Image
                  src="https://i.ibb.co.com/0jFj9qg8/a-professtion-pic-from-chat-gtp-croped.jpg"
                  alt="Mohammad Abdullah Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Glass Cards (Stats) */}
              {[
                { label: "Coding Experience", value: "1500+ Hrs", className: "-top-10 -left-20 w-60" },
                { label: "Project Completed", value: "20+", className: "bottom-12 -left-28 w-60" },
                { label: "Year of Experience", value: "1.5+", className: "-bottom-10 -right-12 w-60" },
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
  );
}
