"use client";

import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Services() {
  const { isDark } = useTheme();

  const services = [
    {
      title: "UI / UX Design",
      subtitle: "Figma, Design Systems, User Research",
      image: "/ui-ux-design-mobile-mockup.jpg",
    },
    {
      title: "Frontend Engineering",
      subtitle: "React, Tailwind, Performance Optimization",
      image: "/web-design-food-app-mockup.jpg",
    },
    {
      title: "Full-Stack Development",
      subtitle: "Java, Spring Boot, REST APIs",
      image: "/landing-page-mobile-mockup.jpg",
    },
    {
      title: "Product Design",
      subtitle: "User-Centered, Scalable Interfaces",
      image: "/ui-ux-design-mobile-mockup.jpg",
    },
    {
      title: "Landing Pages",
      subtitle: "Conversion-Focused, Responsive Design",
      image: "/web-design-food-app-mockup.jpg",
    },
  ];

  return (
    <section
      id="service"
      className={`py-20 relative overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-gray-950 to-gray-900"
          : "bg-gradient-to-b from-gray-800 to-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-theme-primary rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-20">
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-theme-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-12 gap-6">
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-theme-primary">Services</span>
          </h2>
          <p className="text-gray-400 max-w-md leading-relaxed">
            I help build user-focused digital products using modern design
            systems, scalable architectures, and clean engineering practices.
          </p>
        </div>

        {/* Scrollable services */}
        <div
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-4
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85%] md:w-[32%] snap-start"
            >
              <div
                className={`rounded-3xl p-6 border h-full ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700"
                    : "bg-gradient-to-br from-gray-700 to-gray-800 border-gray-600"
                }`}
              >
                <h3 className="text-white text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 mb-6">
                  {service.subtitle}
                </p>

                <div className="relative aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden group">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <button className="absolute bottom-4 right-4 w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-theme-primary transition-colors">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Scroll horizontally to explore more →
        </p>
      </div>
    </section>
  );
}
