"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 60% visible triggers active
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinkClass = (section) =>
    activeSection === section
      ? "bg-theme-primary text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
      : "text-white text-sm font-medium hover:text-theme-primary transition-colors";

  return (
    <div className="fixed top-6 left-0 w-full z-40 flex justify-center">
      <nav className="bg-gray-800 dark:bg-gray-950 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">
        <a href="#home" className={navLinkClass("home")}>
          Home
        </a>

        <a href="#service" className={navLinkClass("service")}>
          Service
        </a>

        <a href="#resume" className={navLinkClass("resume")}>
          Experience
        </a>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">MD</span>
          </div>
          <span className="text-white font-bold text-lg">FAIZU</span>
        </div>

        <a href="#email" className={navLinkClass("email")}>
          Connect
        </a>
        <a href="#project" className={navLinkClass("project")}>
          Project
        </a>

        <a href="#contact" className={navLinkClass("contact")}>
          Contact
        </a>
      </nav>
    </div>
  );
}