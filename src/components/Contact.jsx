"use client";

import { Mail, Star, Award, CheckCircle, ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section
     id="email"
      className={`relative py-24 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-theme-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${
            isDark ? "text-gray-100" : "text-gray-800"
          }`}
        >
          Got a Bold Idea? <br />
          <span className="text-theme-primary">Let’s Build It Together</span>
        </h2>

        <p
          className={`max-w-xl mx-auto mb-12 text-lg ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Turning product ideas into meaningful digital experiences with design
          and engineering.
        </p>

        {/* Email CTA */}
        <div className="flex justify-center mb-14">
          <div
            className={`flex items-center gap-3 rounded-full px-6 py-4 shadow-xl backdrop-blur-md border max-w-md w-full ${
              isDark
                ? "bg-gray-800/70 border-gray-700"
                : "bg-white/70 border-gray-200"
            }`}
          >
            <Mail className="w-5 h-5 text-theme-primary" />
            <input
              type="email"
              placeholder="Enter your email address"
              className={`flex-1 bg-transparent outline-none text-sm ${
                isDark
                  ? "text-gray-100 placeholder-gray-500"
                  : "text-gray-800 placeholder-gray-400"
              }`}
            />
            <button className="group bg-theme-primary text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 hover:bg-theme-primary-hover transition-all">
              Send
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: Star,
              label: "4.7 / 5 Rating",
              desc: "Client Satisfaction",
            },
            {
              icon: Award,
              label: "5+ Achievements",
              desc: "Industry Recognition",
            },
            {
              icon: CheckCircle,
              label: "Product Expert",
              desc: "Design & Engineering",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border transition hover:-translate-y-1 hover:shadow-lg ${
                isDark
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <item.icon className="w-6 h-6 text-theme-primary mx-auto mb-3" />
              <p
                className={`font-semibold ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {item.label}
              </p>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

       {/* Premium Scrolling Skills Banner */}
<div className="relative -mx-6 py-6 overflow-hidden bg-theme-primary rounded-xl">
  {/* Gradient fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-theme-primary to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-theme-primary to-transparent z-10" />

  {/* Layer 1 */}
  <div className="animate-scroll whitespace-nowrap">
    <span className="inline-flex items-center gap-6 text-white text-xl font-semibold mx-8 tracking-wide opacity-90">
      UX Design
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Product Strategy
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Web Apps
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Dashboards
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Wireframes
      <span className="w-2 h-2 rounded-full bg-white/60" />
      User Research
    </span>
  </div>

  {/* Layer 2 (slower & subtle) */}
  <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 animate-scroll-slow whitespace-nowrap opacity-40">
    <span className="inline-flex items-center gap-6 text-white text-xl font-semibold mx-8 tracking-wide">
      UX Design
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Product Strategy
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Web Apps
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Dashboards
      <span className="w-2 h-2 rounded-full bg-white/60" />
      Wireframes
      <span className="w-2 h-2 rounded-full bg-white/60" />
      User Research
    </span>
  </div>
</div>

      </div>
    </section>
  );
}
