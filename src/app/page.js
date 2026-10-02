import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
      <HeroSection />

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
