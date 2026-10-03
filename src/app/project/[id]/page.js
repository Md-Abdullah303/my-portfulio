import { getProjects, normalizeProject } from "@/lib/core/project";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiTarget, FiActivity } from "react-icons/fi";

const SITE_URL = "https://khan-mohammad-abdullah-portfulio.vercel.app";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    return { title: "Project Not Found | Mohammad Abdullah" };
  }

  const title = `${project.title} — ${project.category} | Mohammad Abdullah`;
  const description = project.description?.slice(0, 160) || `Case study for ${project.title} by Mohammad Abdullah.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/project/${project.id}`,
      siteName: "Mohammad Abdullah — Portfolio",
      type: "article",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image],
    },
    alternates: {
      canonical: `${SITE_URL}/project/${project.id}`,
    },
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }) {
  const resolvedParams = await params;
  const projects = await getProjects();
  const project = projects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  // JSON-LD structured data for this project (CreativeWork)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: project.image,
    url: project.liveLink,
    author: {
      "@type": "Person",
      name: "Mohammad Abdullah",
      url: SITE_URL,
    },
    keywords: project.tags.join(", "),
    genre: project.category,
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-24 px-6 relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
        {/* Dynamic Background Glows */}
        <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-100 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Link
            href="/#recent-projects"
            className="inline-flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-all duration-300 mb-12 group font-semibold bg-white hover:bg-slate-50 px-5 py-2.5 rounded-full border border-slate-200 shadow-sm"
          >
            <FiArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          {/* Hero Header */}
          <header className="mb-16 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-blue-700 font-bold uppercase tracking-[0.2em] text-sm bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
                {project.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 text-slate-900 leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-3xl font-normal">
              {project.description}
            </p>
          </header>

          {/* Project Showcase Image */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 mb-20 shadow-xl group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content (Challenges & Future Plans) */}
            <div className="lg:col-span-8 space-y-16">
              <section className="relative p-8 md:p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-md">
                <div className="absolute -left-2 top-10 w-2 h-16 bg-blue-600 rounded-full hidden md:block"></div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-900">
                  <span className="p-3 bg-blue-50 rounded-2xl border border-blue-200">
                    <FiTarget className="w-6 h-6 text-blue-600" />
                  </span>
                  Challenges & Solutions
                </h2>
                <div>
                  <p className="text-slate-700 leading-loose text-lg whitespace-pre-wrap">
                    {project.challenges}
                  </p>
                </div>
              </section>

              <section className="relative p-8 md:p-10 rounded-[2.5rem] border border-slate-200 bg-white shadow-md">
                <div className="absolute -left-2 top-10 w-2 h-16 bg-emerald-600 rounded-full hidden md:block"></div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 text-slate-900">
                  <span className="p-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                    <FiActivity className="w-6 h-6 text-emerald-600" />
                  </span>
                  Future Improvements
                </h2>
                <div>
                  <p className="text-slate-700 leading-loose text-lg whitespace-pre-wrap">
                    {project.futurePlans}
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar (Tech Stack & Links) */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky top-32 h-fit">
              {/* Action Cards */}
              <div className="p-6 rounded-[2rem] space-y-4 border border-slate-200 bg-white shadow-md">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl accent-blue hover:brightness-105 text-white font-bold flex items-center justify-center gap-3 transition-all duration-300 shadow-md group"
                >
                  <FiExternalLink className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Visit Live Platform
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold flex items-center justify-center gap-3 transition-all duration-300 group"
                >
                  <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Source Code
                </a>
              </div>

              {/* Tech Stack */}
              <div className="p-8 rounded-[2rem] border border-slate-200 bg-white shadow-md">
                <h3 className="text-xs font-bold mb-6 uppercase tracking-[0.2em] text-slate-500">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors cursor-default"
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
    </>
  );
}
