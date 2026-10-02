import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroTypewriter from "@/components/HeroTypewriter";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mohammad Abdullah — Full Stack Web Developer | Next.js & React",
  description:
    "Portfolio of Mohammad Abdullah, a Full Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, Node.js, and MongoDB. Building fast, beautiful, and scalable web applications.",
};

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900 bg-[#f8fafc] overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* ── Navigation Bar ──────────────────────────────── */}
      <Navbar />

      {/* ── Hero Section ─────────────────────────────────── */}
      <main className="relative pt-32 md:pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <section className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
                Hi! I&apos;m{" "}
                <span className="text-blue-600">Mohammad Abdullah</span>,{" "}
                <br className="hidden sm:block" />
                <HeroTypewriter />
              </h1>

              <p className="text-slate-600 text-base md:text-xl max-w-lg leading-relaxed mx-auto lg:mx-0">
                Building seamless digital experiences with a focus on clean code,
                stunning design, and exceptional performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="accent-blue hover:scale-105 active:scale-95 px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer transition-transform duration-200 text-white shadow-lg shadow-blue-500/25"
              >
                Let&apos;s Connect
              </a>
              <a
                href="/Mohammad_Abdullah_Resume.pdf"
                download="Mohammad_Abdullah_Resume.pdf"
                className="bg-white hover:scale-105 active:scale-95 hover:bg-slate-50 border border-slate-200 text-slate-800 px-8 py-3.5 md:px-10 md:py-4 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center cursor-pointer gap-2 transition-all duration-200 shadow-sm"
              >
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Mobile Stats Row (visible only on mobile) */}
            <div className="flex lg:hidden justify-center gap-6 pt-4">
              {[
                { label: "Coding Hrs", value: "1200+" },
                { label: "Projects", value: "10+" },
                { label: "Experience", value: "1.5+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-slate-200 p-4 rounded-2xl text-center min-w-[80px] shadow-sm">
                  <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Portrait + Floating Stats */}
          <section className="relative flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[26rem] md:h-[26rem] portrait-glow rounded-full">
              {/* Portrait */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
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
                <div
                  key={stat.label}
                  className={`absolute bg-white/95 border border-slate-200/90 p-5 rounded-3xl ${stat.className} z-10 cursor-default hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-md`}
                >
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-1.5 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Background glow */}
            <div className="absolute -z-10 w-[450px] h-[450px] bg-blue-400/15 blur-[120px] rounded-full pointer-events-none" />
          </section>
        </div>
      </main>

      {/* ── Main Content Sections ────────────────────────── */}
      <AboutMe />
      <Skills />
      <Resume />
      <RecentProjects />
      <Contact />
      <Footer />

      {/* Background ambient decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-20 pointer-events-none opacity-40">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-300/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-indigo-300/20 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
