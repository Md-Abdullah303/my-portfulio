import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/core/project";

const SITE_URL = "https://khan-mohammad-abdullah-portfulio.vercel.app";

export const metadata = {
  title: "All Projects — Mohammad Abdullah | Full Stack Portfolio",
  description:
    "Browse the complete collection of web applications, tools, and digital solutions built by Mohammad Abdullah — a Full Stack Developer specializing in Next.js, React, Node.js, and MongoDB.",
  openGraph: {
    title: "All Projects — Mohammad Abdullah",
    description:
      "Browse the complete collection of web applications and digital solutions built by Mohammad Abdullah.",
    url: `${SITE_URL}/projects`,
    siteName: "Mohammad Abdullah — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Projects — Mohammad Abdullah",
    description:
      "Browse the complete collection of web applications and digital solutions built by Mohammad Abdullah.",
  },
  alternates: {
    canonical: `${SITE_URL}/projects`,
  },
};

export default async function AllProjects() {
  const projects = await getProjects();

  // JSON-LD CollectionPage schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Projects by Mohammad Abdullah",
    description: metadata.description,
    url: `${SITE_URL}/projects`,
    author: {
      "@type": "Person",
      name: "Mohammad Abdullah",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/project/${project.id}`,
        name: project.title,
      })),
    },
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#f8fafc] text-slate-900 py-24 px-6 relative overflow-x-hidden selection:bg-blue-500 selection:text-white">
        {/* Background glow */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-blue-200 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-[1400px] mx-auto">
          {/* Back Button */}
          <Link
            href="/#recent-projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-12 group font-semibold"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Header Section */}
          <header className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-slate-900">
              All Projects
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              A comprehensive list of everything I&apos;ve built, showcasing my journey, experiments, and professional work.
            </p>
          </header>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <article
                key={project.id}
                className="border border-slate-200 bg-white rounded-[2.5rem] flex flex-col justify-between h-full group hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden hover:-translate-y-1"
              >
                <div>
                  <div className="bg-slate-100 aspect-[16/10] relative flex flex-col p-3 shadow-inner w-full border-b border-slate-200">
                    <div className="flex items-center justify-between pb-3 px-2">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                      </div>
                      <div className="h-5 bg-white border border-slate-200 rounded text-[9px] text-slate-600 flex items-center justify-center px-3 w-40 truncate font-semibold">
                        {project.liveLink?.replace("https://", "") || "#"}
                      </div>
                      <div className="w-8"></div>
                    </div>

                    <div className="relative flex-grow w-full overflow-hidden rounded-xl bg-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="px-6 pt-6">
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm md:text-base line-clamp-3 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-[10px] tracking-wide uppercase transition-colors duration-300 hover:border-blue-400 hover:text-blue-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 flex gap-3">
                  <Link
                    href={`/project/${project.id}`}
                    className="w-full py-3 px-2 rounded-xl accent-blue hover:brightness-105 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-md"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
