"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────────────────
//  EmailJS credentials
// ─────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const services = [
  { value: "web",   label: "Web Development" },
  { value: "app",   label: "App Development" },
  { value: "uiux",  label: "UI/UX Design" },
];

// ── Custom light-themed dropdown ──────────────────────────
function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = services.find((s) => s.value === value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="form-input-custom w-full flex items-center justify-between text-left"
      >
        <span className={selected ? "text-slate-900 font-medium" : "text-slate-400"}>
          {selected ? selected.label : "Select Service"}
        </span>
        <svg
          className={`w-4 h-4 text-slate-400 flex-shrink-0 ml-2 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <ul
          className="absolute z-50 w-full mt-2 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl transition-all duration-150"
        >
          {services.map((s) => (
            <li key={s.value}>
              <button
                type="button"
                onClick={() => { onChange(s.value); setOpen(false); }}
                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 ${
                  value === s.value
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus]   = useState("idle");
  const [interest, setInterest] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!interest) { alert("Please select a service."); return; }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("EmailJS credentials are missing in environment variables.");
      setStatus("error: Email service configuration is missing.");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
      setInterest("");
    } catch (err) {
      console.error("EmailJS error:", err?.text || err?.message || err);
      setStatus(`error: ${err?.text || err?.message || "Something went wrong"}`);
    }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* ── Contact Info Column ─────────────────────── */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-blue-600"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Contact Me</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight text-slate-900">
            Let&apos;s Talk for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Your Next Projects
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-md">
            I&apos;m always open to discussing new projects, creative ideas or original visions. Let&apos;s build something extraordinary together.
          </p>

          <ul className="space-y-8">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                text: "+880 1763-271340",
                href: "tel:+8801763271340",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                text: "mdabdulla01715940008@gmail.com",
                href: "mailto:mdabdulla01715940008@gmail.com",
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                text: "Dhaka, Bangladesh",
                href: null,
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-6 group cursor-pointer transition-transform duration-200 hover:translate-x-2"
              >
                <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 flex-shrink-0 shadow-sm">
                  {item.icon}
                </div>
                {item.href ? (
                  <a href={item.href} className="text-slate-700 font-medium text-lg hover:text-blue-600 transition-colors break-all">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-slate-700 font-medium text-lg">{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Form Column ─────────────────────── */}
        <div
          className="bg-white p-8 md:p-12 border border-slate-200 rounded-[2.5rem] shadow-xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700 ml-1">Your Name *</label>
                <input name="from_name" className="form-input-custom" placeholder="Ex. Mohammad Abdullah" required type="text" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700 ml-1">Email *</label>
                <input name="from_email" className="form-input-custom" placeholder="hello@example.com" required type="email" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700 ml-1">Phone</label>
                <input name="phone" className="form-input-custom" placeholder="+880 1..." type="tel" />
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-700 ml-1">Interest *</label>
                <input type="hidden" name="interest" value={interest} />
                <CustomSelect value={interest} onChange={setInterest} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-bold text-slate-700 ml-1">Your Message *</label>
              <textarea name="message" className="form-input-custom resize-none" placeholder="How can I help you?" required rows="4"></textarea>
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div
                className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold px-5 py-3 rounded-2xl"
              >
                <svg className="w-5 h-5 flex-shrink-0 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {status.startsWith("error") && (
              <div
                className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold px-5 py-3 rounded-2xl"
              >
                <svg className="w-5 h-5 flex-shrink-0 text-red-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {status.split("error: ")[1] || "Something went wrong. Please try again."}
              </div>
            )}

            <div className="pt-4">
              <button
                className="submit-button-container group disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={status === "sending"}
              >
                <span className="text-white font-bold text-sm uppercase tracking-widest">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
                <div className="arrow-icon-circle">
                  {status === "sending" ? (
                    <svg className="h-5 w-5 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
