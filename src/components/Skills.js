"use client";

import Marquee from "react-fast-marquee";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiGithub,
  SiVercel,
  SiExpress,
  SiHtml5,
  SiCss,
  SiFigma,
  SiPostman,
  SiRender,
  SiStripe,
  SiJsonwebtokens
} from "react-icons/si";

const skillsRow1 = [
  { title: "JavaScript", icon: SiJavascript, color: "text-amber-500" },
  { title: "React.js", icon: SiReact, color: "text-sky-500" },
  { title: "Next.js", icon: SiNextdotjs, color: "text-slate-900" },
  { title: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { title: "CSS3", icon: SiCss, color: "text-blue-600" },
  { title: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
  { title: "Figma", icon: SiFigma, color: "text-pink-500" },
  { title: "Stripe", icon: SiStripe, color: "text-indigo-600" },
];

const skillsRow2 = [
  { title: "Node.js", icon: SiNodedotjs, color: "text-emerald-600" },
  { title: "Express.js", icon: SiExpress, color: "text-slate-700" },
  { title: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
  { title: "JWT Auth", icon: SiJsonwebtokens, color: "text-purple-600" },
  { title: "Git & GitHub", icon: SiGithub, color: "text-slate-900" },
  { title: "Vercel", icon: SiVercel, color: "text-slate-900" },
  { title: "Render", icon: SiRender, color: "text-slate-900" },
  { title: "Postman", icon: SiPostman, color: "text-orange-500" },
];

export default function Skills() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="skills">
      {/* Subtle Ambient Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-87.5 bg-linear-to-tr from-blue-100/40 via-indigo-50/30 to-purple-100/40 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-350 mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 tracking-tight">
            Skills &amp;{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
              Technologies
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Leveraging a modern tech stack to build high-performance, accessible, and user-centric digital solutions.
          </p>
        </header>
      </div>

      {/* Marquee Section with Cross-Browser Mask & Ample Padding */}
      <div
        className="w-full relative mt-6 md:mt-10 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)"
        }}
      >
        <div className="space-y-4 md:space-y-6">
          {/* Row 1 - Left to Right */}
          <Marquee
            speed={40}
            pauseOnHover={true}
            autoFill={true}
            gradient={false}
            className="py-5 md:py-6 overflow-y-visible"
          >
            {skillsRow1.map((skill, index) => (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3.5 mx-3 md:mx-4 my-2 py-3.5 md:py-4 px-6 md:px-8 rounded-full border border-slate-200/90 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-out hover:border-blue-400 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(37,99,235,0.18)] cursor-pointer shadow-sm group select-none will-change-transform"
              >
                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-50/60 transition-all duration-300">
                  <skill.icon className={`text-xl md:text-2xl ${skill.color} transition-transform duration-300`} />
                </div>
                <span className="text-base md:text-lg font-bold text-slate-800 tracking-wide group-hover:text-blue-600 transition-colors">
                  {skill.title}
                </span>
              </div>
            ))}
          </Marquee>

          {/* Row 2 - Right to Left */}
          <Marquee
            speed={38}
            direction="right"
            pauseOnHover={true}
            autoFill={true}
            gradient={false}
            className="py-5 md:py-6 overflow-y-visible"
          >
            {skillsRow2.map((skill, index) => (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3.5 mx-3 md:mx-4 my-2 py-3.5 md:py-4 px-6 md:px-8 rounded-full border border-slate-200/90 bg-white/95 backdrop-blur-sm transition-all duration-300 ease-out hover:border-emerald-400 hover:-translate-y-1.5 hover:shadow-[0_12px_28px_-6px_rgba(16,185,129,0.18)] cursor-pointer shadow-sm group select-none will-change-transform"
              >
                <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-emerald-50/60 transition-all duration-300">
                  <skill.icon className={`text-xl md:text-2xl ${skill.color} transition-transform duration-300`} />
                </div>
                <span className="text-base md:text-lg font-bold text-slate-800 tracking-wide group-hover:text-emerald-600 transition-colors">
                  {skill.title}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
