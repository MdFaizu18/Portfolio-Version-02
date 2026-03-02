"use client";

import { useTheme } from "../contexts/ThemeContext";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import WorkExperience from "./WorkExperience";
import WhyHireMe from "./WhyHireMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Blog from "./Blog";
import Footer from "./Footer";
import ThemeControls from "./ThemeControls";

export default function Portfolio() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}
    >
      <ThemeControls />
      <Header />
      <Hero />
      <Services />
      <WorkExperience />
      {/* <WhyHireMe /> */}
      <Projects />
      <Contact />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
}
