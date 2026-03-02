"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useRef } from "react";
import uiux from "/services/uiux.jpg"

export default function Services() {
  const { isDark } = useTheme();
  const scrollRef = useRef(null);

const scroll = (direction) => {
  if (!scrollRef.current) return;

  const scrollAmount = 350;

  scrollRef.current.scrollBy({
    left: direction === "left" ? -scrollAmount : scrollAmount,
    behavior: "smooth",
  });
};

  const services = [
    {
      title: "UI / UX Design",
      subtitle: "Figma, Design Systems, User Research",
      description:
        "I design intuitive and user-centered interfaces backed by strong research and scalable design systems.",
      image: "/ui-ux-design-mobile-mockup.jpg",
    },
    {
      title: "Frontend Engineering",
      subtitle: "React, Tailwind, Performance Optimization",
      description:
        "I build high-performance, scalable frontend applications using modern React architecture and clean UI systems.",
      image: "/web-design-food-app-mockup.jpg",
    },
    {
      title: "Full-Stack Development",
      subtitle: "Java, Spring Boot, REST APIs",
      description:
        "From backend architecture to API integrations, I build secure and scalable full-stack solutions.",
      image: "/landing-page-mobile-mockup.jpg",
    },
    {
      title: "Product Design",
      subtitle: "User-Centered, Scalable Interfaces",
      description:
        "I craft scalable digital products focused on usability, business goals, and delightful interactions.",
      image: "/ui-ux-design-mobile-mockup.jpg",
    },
    {
      title: "Landing Pages",
      subtitle: "Conversion-Focused, Responsive Design",
      description:
        "I create high-converting landing pages optimized for responsiveness, SEO, and performance.",
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

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-4 mb-6">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-theme-primary transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-theme-primary transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="
            flex gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
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
              <div className="group perspective">
                <div className="relative h-[390px] w-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

                  {/* FRONT */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-6 border backface-hidden ${
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

                    <div className="relative aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className={`absolute inset-0 rounded-3xl p-6 border rotate-y-180 backface-hidden flex items-center justify-center text-center ${
                      isDark
                        ? "bg-gradient-to-br from-theme-primary/20 to-gray-900 border-theme-primary/40"
                        : "bg-gradient-to-br from-theme-primary/20 to-gray-800 border-theme-primary/40"
                    }`}
                  >
                    <div className="max-w-xs">
                      <h3 className="text-white text-2xl font-semibold mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex justify-center">
                        <button className="w-14 h-14 bg-theme-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <ArrowUpRight className="w-6 h-6 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}