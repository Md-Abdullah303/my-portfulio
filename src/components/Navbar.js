"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["HOME", "ABOUT", "SKILLS", "RESUME", "PROJECTS", "CONTACT"];

const navHref = (item) =>
  item === "HOME"
    ? "#"
    : item === "PROJECTS"
    ? "#recent-projects"
    : `#${item.toLowerCase()}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav
          className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-[#07090e]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.03] backdrop-blur-md border border-white/[0.06]"
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-base shadow-md group-hover:scale-105 transition-transform">
              A
            </div>
            <span className="font-extrabold text-sm md:text-base tracking-wider text-white">
              ABDULLAH<span className="text-blue-500">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <a
                  href={navHref(item)}
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-widest text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all uppercase"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Download CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Mohammad_Abdullah_Resume.pdf"
              download="Mohammad_Abdullah_Resume.pdf"
              className="accent-blue hover:scale-105 active:scale-95 flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide text-white transition-all shadow-[0_0_20px_rgba(0,102,255,0.35)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 rounded-2xl bg-[#090c14]/95 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl transition-all">
            <ul className="space-y-1">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <a
                    href={navHref(item)}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold tracking-wider text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all uppercase"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/10">
                <a
                  href="/Mohammad_Abdullah_Resume.pdf"
                  download="Mohammad_Abdullah_Resume.pdf"
                  onClick={() => setMobileOpen(false)}
                  className="accent-blue w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white transition-all shadow-md"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
