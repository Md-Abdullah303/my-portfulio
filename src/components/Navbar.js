"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
              ? "bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              : "bg-white/70 backdrop-blur-md border border-slate-200/70 shadow-sm"
          }`}
        >
          {/* Brand Name (Logo removed) */}
          <Link href="#" className="flex items-center group">
            <span className="font-extrabold text-base md:text-lg tracking-wide text-slate-900 group-hover:text-blue-600 transition-colors">
              Mohammad Abdullah
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item}>
                <Link
                  href={navHref(item)}
                  className="px-4 py-2 rounded-full text-xs font-bold tracking-widest text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-all uppercase"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Download CV Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Mohammad_Abdullah_Resume.pdf"
              download="Mohammad_Abdullah_Resume.pdf"
              className="accent-blue hover:scale-105 active:scale-95 flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide text-white transition-all shadow-[0_4px_14px_rgba(37,99,235,0.35)]"
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
            className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
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
          <div className="lg:hidden mt-3 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 p-5 shadow-2xl transition-all">
            <ul className="space-y-1">
              {NAV_LINKS.map((item) => (
                <li key={item}>
                  <Link
                    href={navHref(item)}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-sm font-bold tracking-wider text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-all uppercase"
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className="pt-3 border-t border-slate-200">
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
