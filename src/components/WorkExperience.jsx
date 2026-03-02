"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function WorkExperience() {
  const { isDark } = useTheme();

  const experiences = [
  {
    company: "Zelosify, Bangalore",
    roles: [
      {
        role: "Intern – Software Developer",
        period: "Nov 2024",
        description:
          "Worked on building and enhancing web application features using modern frontend and backend technologies. Collaborated with senior engineers to implement clean UI components, optimize performance, and deliver user-focused solutions in an agile environment.",
      },
    ],
    isPrimary: true,
  },
  {
    company: "Hexaware Technologies, Chennai",
    roles: [
      {
        role: "Intern – Maverick, PGET",
        period: "Aug 2025 – Nov 2025",
        description:
          "Completed internship focusing on enterprise application development and backend systems using LLM and AI technologies.",
      },
      {
        role: "Associate Software Developer",
        period: "Dec 2025 – Present",
        description:
          "Currently working on scalable enterprise systems, contributing to full-stack development, performance optimization, and production deployments.",
      },
    ],
    isPrimary: false,
  },
];

  return (
    <section
      id="resume"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-5xl mx-auto px-8">
        <h2
          className={`text-4xl font-bold text-center mb-16 ${isDark ? "text-gray-100" : "text-gray-800"}`}
        >
          My <span className="text-theme-primary">Work Experience</span>
        </h2>

        <div className="relative">
          <div
            className={`absolute left-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed -translate-x-1/2 ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          ></div>

          <div className="space-y-12">
           {experiences.map((exp, index) => (
  <div key={index} className="relative grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Left Side Company */}
    <div className="text-right">
      <h3 className={`text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}>
        {exp.company}
      </h3>
    </div>

    {/* Timeline Dot */}
    <div
      className={`absolute left-1/2 top-4 -translate-x-1/2 w-6 h-6 rounded-full border-4 shadow-lg z-10 ${
        exp.isPrimary
          ? `bg-theme-primary ${isDark ? "border-gray-900" : "border-white"}`
          : isDark
            ? "bg-gray-100 border-gray-900"
            : "bg-gray-800 border-white"
      }`}
    />

    {/* Right Side Roles */}
    <div className="space-y-6">
      {exp.roles.map((role, rIndex) => (
        <div key={rIndex} className="relative pl-6 border-l-2 border-dashed border-gray-400">

          <div className="absolute -left-2 top-2 w-4 h-4 rounded-full bg-theme-primary"></div>

          <h4 className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}>
            {role.role}
          </h4>
          <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            {role.period}
          </p>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {role.description}
          </p>
        </div>
      ))}
    </div>
  </div>
))}
          </div>
        </div>
      </div>
    </section>
  );
}
