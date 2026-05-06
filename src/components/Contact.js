"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Contact Info Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-blue-500"></div>
            <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Contact Us</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            Let&apos;s Talk for <br />
            <span className="text-glow text-blue-500">Your Next Projects</span>
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            I&apos;m always open to discussing new projects, creative ideas or original visions. Let&apos;s build something extraordinary together.
          </p>

          <ul className="space-y-8">
            {[
              { icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ), text: "+880 1XXX-XXXXXX" },
              { icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ), text: "abdullah.dev@example.com" },
              { icon: (
                <div className="font-bold text-xl">S</div>
              ), text: "live:abdullah.skype" },
              { icon: (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ), text: "Dhaka, Bangladesh" },
            ].map((item, i) => (
              <motion.li 
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-gray-300 font-medium text-lg">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 bg-slate-900/40 border border-blue-500/10 rounded-[2.5rem]"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1">Your Name *</label>
                <input className="form-input-custom" placeholder="Ex. Mohammad Abdullah" required type="text" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1">Email *</label>
                <input className="form-input-custom" placeholder="hello@example.com" required type="email" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1">Phone *</label>
                <input className="form-input-custom" placeholder="+880 1..." required type="tel" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-400 ml-1">Interest *</label>
                <select className="form-input-custom appearance-none" required>
                  <option value="" disabled selected>Select Service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="uiux">UI/UX Design</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="block text-sm font-bold text-gray-400 ml-1">Your Message *</label>
              <textarea className="form-input-custom resize-none" placeholder="How can I help you?" required rows="4"></textarea>
            </div>

            <div className="pt-4">
              <button className="submit-button-container group" type="submit">
                <span className="text-white font-bold text-sm uppercase tracking-widest">Send Message</span>
                <div className="arrow-icon-circle">
                  <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
