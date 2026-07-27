import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiTarget, FiActivity } from "react-icons/fi";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Not Found" };
  return { title: `${project.title} - Project Details` };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <Link
          href="/#recent-projects"
          className="inline-flex items-center gap-3 text-slate-400 hover:text-white transition-all duration-300 mb-12 group font-semibold bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/20 backdrop-blur-md shadow-lg"
        >
          <FiArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Header */}
        <header className="mb-16 relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20">
              {project.category}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 leading-tight">
            {project.title}
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-3xl font-medium">
            {project.description}
          </p>
        </header>

        {/* Project Showcase Image */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/10 mb-20 shadow-2xl group">
          <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10 pointer-events-none"></div>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content (Challenges & Future Plans) */}
          <div className="lg:col-span-8 space-y-16">
            <section className="relative glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <div className="absolute -left-2 top-10 w-2 h-16 bg-blue-500 rounded-full hidden md:block blur-[2px]"></div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                <span className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
                  <FiTarget className="w-6 h-6 text-blue-400" />
                </span>
                Challenges & Solutions
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-loose text-lg whitespace-pre-wrap">
                  {project.challenges}
                </p>
              </div>
            </section>

            <section className="relative glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <div className="absolute -left-2 top-10 w-2 h-16 bg-emerald-500 rounded-full hidden md:block blur-[2px]"></div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-white">
                <span className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                  <FiActivity className="w-6 h-6 text-emerald-400" />
                </span>
                Future Improvements
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-loose text-lg whitespace-pre-wrap">
                  {project.futurePlans}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar (Tech Stack & Links) */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky top-32 h-fit">
            {/* Action Cards */}
            <div className="glass-card p-6 rounded-[2rem] space-y-4 border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
              >
                <FiExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Visit Live Platform
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 hover:border-white/20 group"
              >
                <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Source Code
              </a>
            </div>

            {/* Tech Stack */}
            <div className="glass-card p-8 rounded-[2rem] border border-white/5 bg-slate-900/40 backdrop-blur-xl">
              <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-slate-400">
                Core Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 font-medium text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
