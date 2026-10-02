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
    <section className="py-16 md:py-24 relative overflow-hidden" id="skills">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold tracking-widest uppercase">
            My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-slate-900">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Technologies</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Leveraging a modern tech stack to build high-performance, accessible, and user-centric digital solutions.
          </p>
        </header>
      </div>

      {/* Marquee Section */}
      <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] mt-10 md:mt-16 py-10">
        <div className="space-y-8 md:space-y-12">
          {/* Row 1 - Left to Right */}
          <Marquee speed={50} pauseOnHover={true} gradient={false}>
            {skillsRow1.map((skill, index) => (
              <div 
                key={`row1-${index}`}
                className="flex items-center gap-4 mx-4 md:mx-6 my-4 py-4 md:py-5 px-8 md:px-10 rounded-full border border-slate-200 bg-white transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:scale-105 cursor-pointer shadow-md group"
              >
                <skill.icon className={`text-3xl md:text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-wide group-hover:text-blue-600 transition-colors">{skill.title}</span>
              </div>
            ))}
          </Marquee>

          {/* Row 2 - Right to Left */}
          <Marquee speed={45} direction="right" pauseOnHover={true} gradient={false}>
            {skillsRow2.map((skill, index) => (
              <div 
                key={`row2-${index}`}
                className="flex items-center gap-4 mx-4 md:mx-6 my-4 py-4 md:py-5 px-8 md:px-10 rounded-full border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-400 hover:shadow-xl hover:scale-105 cursor-pointer shadow-md group"
              >
                <skill.icon className={`text-3xl md:text-4xl ${skill.color} transition-transform duration-300 group-hover:scale-110`} />
                <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-wide group-hover:text-emerald-600 transition-colors">{skill.title}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
