import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TerminalPreloader from "@/components/TerminalPreloader";
import { getProjects } from "@/lib/core/project";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="relative min-h-screen text-slate-900 bg-[#f8fafc] overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* ── Code Terminal Preloader (Client Component inside Server Page) ── */}
      <TerminalPreloader />

      {/* ── Navigation Bar ──────────────────────────────── */}
      <Navbar />

      {/* ── Hero Section ─────────────────────────────────── */}
      <HeroSection />

      {/* ── Main Content Sections ────────────────────────── */}
      <AboutMe />
      <Skills />
      <Resume />
      <RecentProjects projects={projects} />
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
