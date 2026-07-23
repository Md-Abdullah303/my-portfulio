import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="min-h-screen bg-[#06080d] text-white py-24 px-6 relative overflow-x-hidden selection:bg-blue-500/30">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/#recent-projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 group font-semibold"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-blue-500"></div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">{project.category}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">{project.title}</h1>
          <p className="text-gray-400 text-lg leading-relaxed">{project.description}</p>
        </header>

        {/* Project Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-[#16181f] border border-white/10 mb-16 shadow-2xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content (Challenges & Future Plans) */}
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Challenges Faced
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl">
                {project.challenges}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                Future Plans & Improvements
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg bg-white/[0.02] border border-white/[0.05] p-6 rounded-2xl">
                {project.futurePlans}
              </p>
            </section>
          </div>

          {/* Sidebar (Tech Stack & Links) */}
          <aside className="space-y-12">
            <section>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-gray-300">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-blue-500/10 text-blue-400 font-semibold text-sm border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                Visit Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#16181f] hover:bg-[#20232d] border border-white/10 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                View Source Code
              </a>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
