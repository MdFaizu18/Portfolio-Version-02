"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Projects() {
  const { isDark } = useTheme();
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "CareerCrafter – Job Portal",
      image: "/projects/project02.png",
      description:
        "Enterprise-ready job portal with role-based access and REST APIs.",
      tags: ["Java", "Spring Boot", "React"],
      url: "https://campusvoices.vercel.app/",
    },
    {
      title: "Jobify – Hiring Platform",
      image: "/projects/project01.png",
      description: "Recruitment platform with modern UI and scalable backend.",
      tags: ["Full Stack", "UI/UX"],
      url: "https://jobify-5ur5.onrender.com/",
    },
    {
      title: "Buggy App",
      image: "/projects/project04.png",
      description: "Bug tracking system with dashboards and analytics.",
      tags: ["Dashboard", "Testing"],
      url: "https://buggy-app.onrender.com/",
    },
    {
      title: "Web Spyders",
      image: "/projects/project06.png",
      description: "Agency website with animations and branding.",
      tags: ["Landing Page", "Design"],
      url: "https://webspyderscommunity-xofl.onrender.com/",
    },
    {
      title: "iPhone Product Page",
      image: "/projects/project03.png",
      description: "Apple-inspired product showcase with smooth transitions.",
      tags: ["UI", "Animation"],
      url: "https://mdfaizu18.github.io/Web_Spyders_App/",
    },
    {
      title: "Hot News",
      image: "/projects/project05.png",
      description: "Real-time news platform with category filters.",
      tags: ["API", "React"],
      url: "#",
    },
    {
      title: "Bike Services",
      image: "/projects/bikeservices.png",
      description: "Platform for bike servicing with user & owner modules.",
      tags: ["Node", "MongoDB", "React"],
      url: "https://bike-services-5fd9.onrender.com/",
    },
    {
      title: "Prometrix - AI Prompt Engineering",
      image: "/projects/project07.png",
      description: "Build to maintain the prompts and templates shared public.",
      tags: ["Node", "MongoDB", "React"],
      url: "https://prometrix.vercel.app",
    },
    {
      title: "Axis Automation Services - Client",
      image: "/projects/project08.png",
      description: "Build for the automation serivce and related services.",
      tags: ["Tailwind", "React"],
      url: "https://axis-automation-services.vercel.app",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  return (
    <section
      id="project"
      className={`py-24 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold mb-14 ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Featured <span className="text-theme-primary">Projects</span>
        </h2>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          {visibleProjects.map((project, index) => {
            const colSpan =
              index === 0 || index === 1 || index === 5 || index === 6 || index === 7 || index === 8
                ? "md:col-span-3"
                : "md:col-span-2";

            return (
              <ProjectCard
                key={index}
                project={project}
                isDark={isDark}
                className={colSpan}
              />
            );
          })}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-theme-primary text-white font-medium hover:scale-105 transition"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* PROJECT CARD */
/* -------------------------------- */

function ProjectCard({ project, isDark, className }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl
      ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"} ${className}`}
    >
      {/* Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-black/40 text-white backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-theme-primary flex items-center justify-center hover:scale-110 transition"
            >
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>

          <p className="text-sm text-gray-200 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
