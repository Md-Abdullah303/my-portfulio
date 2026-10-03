"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TERMINAL_LINES = [
  { prefix: "$", text: "npm run start:portfolio", delay: 100, speed: 20 },
  { prefix: "info", text: "Initializing environment...", delay: 80, speed: 12 },
  { prefix: "✓", text: "Developer: Mohammad Abdullah", delay: 100, speed: 14, highlight: true },
  { prefix: "✓", text: "Tech Stack: Next.js • React • Node.js", delay: 80, speed: 12 },
  { prefix: ">", text: "Portfolio loaded.", delay: 120, speed: 20, success: true },
];

export default function TerminalPreloader() {
  const [visible, setVisible] = useState(true);
  const [completedLines, setCompletedLines] = useState([]);
  const [currentLineText, setCurrentLineText] = useState("");
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [progress, setProgress] = useState(8);
  const [isFinishing, setIsFinishing] = useState(false);

  // Close / Skip preloader smoothly
  const handleDismiss = useCallback(() => {
    setIsFinishing(true);
    setVisible(false);
    try {
      sessionStorage.setItem("portfolio_preloader_seen", "true");
    } catch (e) {
      // Safe fallback if sessionStorage is blocked
    }
  }, []);

  useEffect(() => {
    // Only skip in production if user already saw it in this session.
    // In development or fresh visit, always show so user can review the animation.
    try {
      if (process.env.NODE_ENV !== "development") {
        const alreadySeen = sessionStorage.getItem("portfolio_preloader_seen");
        if (alreadySeen === "true") {
          setVisible(false);
          return;
        }
      }
    } catch (e) {
      // Ignore
    }

    // Keyboard shortcut ESC to skip
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleDismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleDismiss]);

  // Lock scroll while preloader is active
  useEffect(() => {
    if (visible) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [visible]);

  // Linear async typewriter sequence
  useEffect(() => {
    if (!visible) return;

    let isCancelled = false;

    async function runTerminalSequence() {
      for (let i = 0; i < TERMINAL_LINES.length; i++) {
        if (isCancelled) return;
        const line = TERMINAL_LINES[i];
        setActiveLineIndex(i);
        setCurrentLineText("");

        await new Promise((r) => setTimeout(r, line.delay));
        if (isCancelled) return;

        for (let c = 1; c <= line.text.length; c++) {
          if (isCancelled) return;
          setCurrentLineText(line.text.slice(0, c));
          const currentProgress = Math.min(
            96,
            Math.round(((i + c / line.text.length) / TERMINAL_LINES.length) * 100)
          );
          setProgress(currentProgress);
          await new Promise((r) => setTimeout(r, line.speed));
        }

        if (isCancelled) return;
        setCompletedLines((prev) => [...prev, line]);
        setCurrentLineText("");
        await new Promise((r) => setTimeout(r, 80));
      }

      if (isCancelled) return;
      setProgress(100);
      setActiveLineIndex(TERMINAL_LINES.length);
      setIsFinishing(true);

      // Give visitor 700ms to read "> Portfolio loaded."
      await new Promise((r) => setTimeout(r, 700));
      if (!isCancelled) {
        handleDismiss();
      }
    }

    runTerminalSequence();

    return () => {
      isCancelled = true;
    };
  }, [visible, handleDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="terminal-preloader-backdrop"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: "blur(14px)",
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950/96 backdrop-blur-xl px-4 select-none"
        >
          {/* Ambient Glow behind terminal */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse" />
          <div className="absolute w-60 sm:w-80 h-60 sm:h-80 bg-indigo-600/15 blur-[110px] rounded-full pointer-events-none -z-10 translate-y-16" />

          {/* Terminal Window Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg bg-[#0a0f1d] border border-slate-800/90 rounded-2xl shadow-2xl shadow-blue-950/60 overflow-hidden font-mono text-xs sm:text-sm text-slate-200"
          >
            {/* Window Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm shadow-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm shadow-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm shadow-emerald-500/50" />
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>abdullah@terminal:~</span>
              </div>

              <button
                onClick={handleDismiss}
                type="button"
                className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider px-2 py-0.5 rounded hover:bg-slate-800/50 cursor-pointer"
                title="Press ESC or click to skip"
              >
                Skip ✕
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 space-y-2.5 min-h-[220px] flex flex-col justify-between">
              <div className="space-y-2">
                {/* Completed Lines */}
                {completedLines.map((line, idx) => (
                  <div key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span
                      className={`shrink-0 font-bold select-none ${
                        line.success
                          ? "text-emerald-400 font-extrabold"
                          : line.prefix === "✓"
                          ? "text-blue-400"
                          : line.prefix === "$"
                          ? "text-indigo-400"
                          : "text-slate-500"
                      }`}
                    >
                      {line.prefix}
                    </span>
                    <span
                      className={`${
                        line.success
                          ? "text-emerald-300 font-bold text-sm sm:text-base tracking-wide"
                          : line.highlight
                          ? "text-blue-300 font-semibold"
                          : "text-slate-300"
                      }`}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}

                {/* Currently Typing Line */}
                {activeLineIndex < TERMINAL_LINES.length && (
                  <div className="flex items-start gap-2 leading-relaxed">
                    <span
                      className={`shrink-0 font-bold select-none ${
                        TERMINAL_LINES[activeLineIndex].success
                          ? "text-emerald-400"
                          : "text-blue-400"
                      }`}
                    >
                      {TERMINAL_LINES[activeLineIndex].prefix}
                    </span>
                    <span
                      className={`${
                        TERMINAL_LINES[activeLineIndex].success
                          ? "text-emerald-300 font-bold"
                          : "text-slate-200"
                      }`}
                    >
                      {currentLineText}
                      <span className="inline-block w-2 h-4 ml-1 bg-blue-400 animate-pulse align-middle" />
                    </span>
                  </div>
                )}
              </div>

              {/* Bottom status & progress bar */}
              <div className="pt-4 border-t border-slate-800/60 mt-4 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${isFinishing ? "bg-emerald-400 animate-ping" : "bg-blue-400 animate-pulse"}`} />
                    {isFinishing ? "Launching Portfolio..." : "Compiling assets..."}
                  </span>
                  <span className="font-semibold text-slate-300">{progress}%</span>
                </div>

                <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 rounded-full"
                    initial={{ width: "8%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeOut", duration: 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prompt hint */}
          <div className="mt-4 text-[11px] text-slate-500 flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700/80 text-slate-400 text-[10px] font-mono shadow-sm">
              ESC
            </kbd>
            <span>to skip anytime</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
