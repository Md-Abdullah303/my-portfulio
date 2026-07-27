"use client";

import { motion } from "framer-motion";
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
  { title: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { title: "React.js", icon: SiReact, color: "text-sky-400" },
  { title: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { title: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { title: "CSS3", icon: SiCss, color: "text-blue-500" },
  { title: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
  { title: "Figma", icon: SiFigma, color: "text-pink-500" },
  { title: "Stripe", icon: SiStripe, color: "text-indigo-400" },
];

const skillsRow2 = [
  { title: "Node.js", icon: SiNodedotjs, color: "text-emerald-500" },
  { title: "Express.js", icon: SiExpress, color: "text-slate-300" },
  { title: "MongoDB", icon: SiMongodb, color: "text-emerald-600" },
  { title: "JWT Auth", icon: SiJsonwebtokens, color: "text-purple-400" },
  { title: "Git & GitHub", icon: SiGithub, color: "text-white" },
  { title: "Vercel", icon: SiVercel, color: "text-white" },
  { title: "Render", icon: SiRender, color: "text-white" },
  { title: "Postman", icon: SiPostman, color: "text-orange-400" },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="skills">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.05 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-widest uppercase"
          >
            My Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Technologies</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Leveraging a modern tech stack to build high-performance, accessible, and user-centric digital solutions.
          </motion.p>
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
                className="flex items-center gap-4 mx-4 md:mx-6 my-6 py-4 md:py-5 px-8 md:px-10 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-800/80 hover:scale-110 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] group"
              >
                <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-xl`} />
                <span className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide group-hover:text-white transition-colors">{skill.title}</span>
              </div>
            ))}
          </Marquee>

          {/* Row 2 - Right to Left */}
          <Marquee speed={45} direction="right" pauseOnHover={true} gradient={false}>
            {skillsRow2.map((skill, index) => (
              <div 
                key={`row2-${index}`}
                className="flex items-center gap-4 mx-4 md:mx-6 my-6 py-4 md:py-5 px-8 md:px-10 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:scale-110 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] group"
              >
                <skill.icon className={`text-3xl md:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 drop-shadow-xl`} />
                <span className="text-xl md:text-2xl font-bold text-slate-200 tracking-wide group-hover:text-white transition-colors">{skill.title}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
