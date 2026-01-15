"use client";

import { ArrowUpRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function WhyHireMe() {
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <img
              src="/images/2.png"
              alt="Why hire me"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="flex-1">
            <h2
              className={`text-5xl font-bold mb-8 ${isDark ? "text-gray-100" : "text-gray-800"}`}
            >
              Why <span className="text-theme-primary">Hire me</span>?
            </h2>
            <p
              className={`leading-relaxed mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales magna.
              Sed congue ligula id ligula porta, et tincidunt metus elementum.
            </p>
            <div className="flex gap-4">
              <button className="bg-theme-primary text-white px-6 py-2 rounded-full font-medium hover:bg-theme-primary-hover transition-colors">
                Portfolio
              </button>
              <button className="bg-theme-primary text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-theme-primary-hover transition-colors">
                Hire me <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
