"use client";

import Link from "next/link";
import {
  HiAcademicCap,
  HiBriefcase,
  HiSparkles,
  HiArrowTopRightOnSquare,
  HiArrowDownTray,
  HiCheckCircle2
} from "react-icons/hi2";

export default function Resume() {
  const education = [
    {
      period: "2024 - 2027",
      status: "Ongoing",
      institution: "Chandpur Polytechnic Institute",
      degree: "Diploma in Engineering",
      highlights: [
        "Specializing in Computer & Systems Engineering principles.",
        "Hands-on engineering projects, data structures, and computer architecture.",
        "Active contributor in technical problem solving and software labs."
      ],
      tags: ["Engineering", "Algorithms", "Software Design"],
    },
    {
      period: "2022 - 2023",
      status: "Completed",
      institution: "Agradut Bidya Niketon High School",
      degree: "Secondary School Certificate (SSC)",
      highlights: [
        "Graduated from the Science group with a GPA of 4.50 / 5.00.",
        "Built early mathematical rigor, analytical logic, and passion for programming."
      ],
      tags: ["Science", "Mathematics", "Logic & Analysis"],
    },
  ];

  const experience = [
    {
      period: "2026",
      status: "Production Ready",
      institution: "LegalEase Platform",
      role: "Full Stack Developer",
      projectLink: "#recent-projects",
      highlights: [
        "Architected full-stack legal tech MVP using Next.js App Router and MongoDB.",
        "Engineered secure consultation booking pipeline with Stripe Checkout and webhooks.",
        "Constructed role-based dashboards (Admin, Lawyer, Client) with secure JWT authentication."
      ],
      tags: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    },
    {
      period: "Present",
      status: "Available Now",
      institution: "Freelance & Full-Time",
      role: "Open to Opportunities / Ready for Next Role",
      isOpportunityCard: true,
      highlights: [
        "Available for Full-Time, Remote, or Contract Full-Stack Developer opportunities.",
        "Ready to build scalable web applications with Next.js, Node.js, and modern cloud APIs.",
        "Passionate about writing clean, maintainable code with high execution speed."
      ],
      tags: ["Next.js", "Full-Stack", "REST APIs", "Available Now"],
      cta: {
        text: "Let's Collaborate",
        href: "#contact"
      }
    }
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden" id="resume">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-150 h-75 bg-linear-to-r from-blue-100/30 via-emerald-50/20 to-indigo-100/30 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <header className="text-center mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          My Journey
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 tracking-tight">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-emerald-600">
            Experience
          </span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          A proven track record of engineering foundations, real-world development, and continuous self-driven growth.
        </p>
      </header>

      {/* 2-Column Balanced Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 relative">
        {/* ── Column 1: Education ──────────────────────────────── */}
        <div>
          <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-xl shadow-xs">
              <HiAcademicCap />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Education
              </h3>
              <p className="text-slate-400 text-xs font-medium">Academic foundation &amp; credentials</p>
            </div>
          </div>

          <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-linear-to-b before:from-blue-500 before:via-blue-300 before:to-transparent">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Timeline node */}
                <div className="absolute -left-7.75 md:-left-9.75 top-7 w-4 h-4 rounded-full border-2 border-white bg-blue-600 shadow-sm flex items-center justify-center group-hover:scale-125 group-hover:ring-4 group-hover:ring-blue-100 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Period & Institution line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-wider">
                    {item.status === "Ongoing" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    )}
                    {item.period}
                  </div>
                  <span className="text-slate-500 text-xs md:text-sm font-semibold italic">
                    {item.institution}
                  </span>
                </div>

                {/* Degree Title */}
                <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.degree}
                </h4>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-5">
                  {item.highlights.map((point, pIndex) => (
                    <li key={pIndex} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="text-blue-500 text-xs mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech / Subject Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {item.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2.5 py-0.5 rounded-lg bg-slate-50 text-slate-600 border border-slate-200/60 text-[11px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Column 2: Experience ─────────────────────────────── */}
        <div>
          <div className="flex items-center gap-3.5 mb-8 pb-3 border-b border-slate-200/80">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xl shadow-xs">
              <HiBriefcase />
            </div>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Experience
              </h3>
              <p className="text-slate-400 text-xs font-medium">Production work &amp; technical impact</p>
            </div>
          </div>

          <div className="relative pl-6 md:pl-8 space-y-8 before:absolute before:left-2.5 before:top-4 before:bottom-4 before:w-0.5 before:bg-linear-to-b before:from-emerald-500 before:via-emerald-300 before:to-transparent">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`relative group bg-white p-6 md:p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 ${item.isOpportunityCard
                    ? "border-emerald-300/80 shadow-[0_4px_24px_rgba(16,185,129,0.06)] hover:shadow-xl hover:border-emerald-400 bg-linear-to-br from-emerald-50/20 via-white to-teal-50/20"
                    : "border-slate-200/90 shadow-xs hover:shadow-xl hover:border-emerald-400"
                  }`}
              >
                {/* Timeline node */}
                <div className={`absolute -left-7.75 md:-left-9.75 top-7 w-4 h-4 rounded-full border-2 border-white shadow-sm flex items-center justify-center group-hover:scale-125 group-hover:ring-4 transition-all duration-300 ${item.isOpportunityCard
                    ? "bg-emerald-500 group-hover:ring-emerald-100"
                    : "bg-emerald-600 group-hover:ring-emerald-100"
                  }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Period & Institution line */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider ${item.isOpportunityCard
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                      : "bg-emerald-50 text-emerald-700 border border-emerald-200/70"
                    }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    {item.status}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-slate-500 text-xs md:text-sm font-semibold italic">
                      {item.institution}
                    </span>
                    {item.projectLink && (
                      <Link
                        href={item.projectLink}
                        className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                        title="View Project Details"
                      >
                        <HiArrowTopRightOnSquare className="text-base" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Role / Headline Title */}
                <h4 className={`text-xl md:text-2xl font-black mb-3 transition-colors ${item.isOpportunityCard
                    ? "text-slate-900 group-hover:text-emerald-600"
                    : "text-slate-900 group-hover:text-emerald-600"
                  }`}>
                  {item.role}
                </h4>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-5">
                  {item.highlights.map((point, pIndex) => (
                    <li key={pIndex} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2.5">
                      <span className="text-emerald-500 text-xs mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Footer: Tags & Optional CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className={`px-2.5 py-0.5 rounded-lg text-[11px] font-semibold border ${item.isOpportunityCard && tag === "Available Now"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200 font-bold"
                            : "bg-slate-50 text-slate-600 border-slate-200/60"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {item.cta && (
                    <Link
                      href={item.cta.href}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <HiSparkles className="text-xs" />
                      {item.cta.text}
                      <span>→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Resume Action Bar */}
      <div className="mt-16 md:mt-20 flex flex-col items-center justify-center gap-3">
        <a
          href="/Mohammad_Abdullah_Resume.pdf"
          download="Mohammad_Abdullah_Resume.pdf"
          className="group inline-flex items-center gap-3 px-8 md:px-10 py-4 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-base transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <HiArrowDownTray className="text-xl group-hover:translate-y-0.5 transition-transform duration-200" />
          <span>Download Complete Resume</span>
        </a>
        <p className="text-slate-400 text-xs font-medium">
          PDF format • Updated for 2026 roles
        </p>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="mt-16 w-full h-px bg-linear-to-r from-transparent via-slate-300/80 to-transparent" />
    </section>
  );
}
