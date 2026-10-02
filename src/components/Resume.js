export default function Resume() {
  const education = [
    {
      period: "2022 - 2023",
      institution: "Agradut Bidya Niketon High School",
      degree: "SSC",
      description: "Successfully completed my Secondary School Certificate (SSC) from the Science group with a GPA of 4.50. This period was crucial in developing my analytical thinking and a deep interest in technology.",
    },
    {
      period: "2024 - 2027",
      institution: "Chandpur Politechnic Institute",
      degree: "Diploma in Engineering",
      description: "Currently pursuing a Diploma in Engineering, where I am gaining hands-on experience in technical systems, engineering principles, and professional project development.",
    },
  ];

  const experience = [
    {
      period: "2026",
      institution: "LegalEase Platform",
      role: "Full Stack Developer",
      description: "Architected and developed a comprehensive legal tech platform. Engineered core features including lawyer discovery, consultation booking, integrated payment gateways (Stripe), and dedicated admin/lawyer dashboards using Next.js and MongoDB.",
    }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="resume">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative">
        {/* Vertical Separator (Hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 border-l border-dashed border-slate-300"></div>

        {/* Education Column */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900 flex items-center gap-4">
            <span className="w-8 h-1.5 bg-blue-600 rounded-full"></span>
            Education
          </h2>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div 
                key={index}
                className="space-y-4 group relative bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    {item.period}
                  </div>
                  <span className="text-slate-500 text-sm font-medium italic">
                    {item.institution}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.degree}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base max-w-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-slate-900 flex items-center gap-4">
            <span className="w-8 h-1.5 bg-emerald-600 rounded-full"></span>
            Experience
          </h2>

          <div className="space-y-12">
            {experience.length > 0 ? (
              experience.map((item, index) => (
                <div 
                  key={index}
                  className="space-y-4 group bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="inline-block px-4 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                      {item.period}
                    </div>
                    <span className="text-slate-500 text-sm font-medium italic">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base max-w-lg">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <div 
                className="text-slate-400 text-lg italic pl-4 border-l border-emerald-500/30"
              >
                None
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="mt-20 flex justify-center">
        <a
          href="/Mohammad_Abdullah_Resume.pdf"
          download="Mohammad_Abdullah_Resume.pdf"
          className="accent-blue hover:scale-105 active:scale-95 hover:shadow-xl flex items-center gap-3 px-10 py-4 rounded-2xl font-bold text-base text-white transition-all duration-300 shadow-md shadow-blue-500/30"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Full Resume
        </a>
      </div>

      {/* Decorative bottom line */}
      <div className="mt-16 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
    </section>
  );
}
