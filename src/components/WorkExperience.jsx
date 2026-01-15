"use client";

import { useTheme } from "../contexts/ThemeContext";

export default function WorkExperience() {
  const { isDark } = useTheme();

  const experiences = [
    {
      company: "Zelosify, Bangalore",
      period: "Nov 2024",
      role: "Intern – Software Developer",
      description:
        "Worked on building and enhancing web application features using modern frontend and backend technologies. Collaborated with senior engineers to implement clean UI components, optimize performance, and deliver user-focused solutions in an agile environment.",
      isPrimary: true,
    },
    {
      company: "Hexaware Technologies, Chennai",
      period: "Aug 2025",
      role: "Full Time – Premier Graduate Engineer",
      description:
        "Underwent intensive enterprise-level training and contributed to real-world application development using Java and full-stack technologies. Gained hands-on experience in designing scalable systems, writing production-ready code, and following industry best practices.",
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
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative"
              >
                <div className="text-right">
                  <h3
                    className={`text-2xl font-bold mb-1 ${isDark ? "text-gray-100" : "text-gray-800"}`}
                  >
                    {exp.company}
                  </h3>
                  <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                    {exp.period}
                  </p>
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 shadow-lg z-10 ${
                    exp.isPrimary
                      ? `bg-theme-primary ${isDark ? "border-gray-900" : "border-white"}`
                      : isDark
                        ? "bg-gray-100 border-gray-900"
                        : "bg-gray-800 border-white"
                  }`}
                ></div>

                <div>
                  <h4
                    className={`text-2xl font-bold mb-2 ${isDark ? "text-gray-100" : "text-gray-800"}`}
                  >
                    {exp.role}
                  </h4>
                  <p
                    className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
