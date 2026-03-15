"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinkClass = (section) =>
    activeSection === section
      ? "bg-theme-primary text-white px-6 py-2 rounded-full text-sm font-medium"
      : "text-white text-sm font-medium hover:text-theme-primary";

  const links = [
    { name: "Home", id: "home" },
    { name: "Service", id: "service" },
    { name: "Experience", id: "resume" },
    { name: "Connect", id: "email" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-6 left-0 w-full z-40 flex justify-center px-4">

      {/* NAVBAR */}
      <nav className="bg-gray-800 dark:bg-gray-950 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={navLinkClass("home")}>Home</a>
          <a href="#service" className={navLinkClass("service")}>Service</a>
          <a href="#resume" className={navLinkClass("resume")}>Experience</a>
        </div>

        {/* Logo (always visible) */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">MD</span>
          </div>
          <span className="text-white font-bold text-lg">FAIZU</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#email" className={navLinkClass("email")}>Connect</a>
          <a href="#project" className={navLinkClass("project")}>Project</a>
          <a href="#contact" className={navLinkClass("contact")}>Contact</a>
        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] max-w-sm bg-gray-900 rounded-2xl shadow-xl p-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-white text-sm font-medium hover:text-theme-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}