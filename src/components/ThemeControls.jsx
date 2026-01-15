"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import ThemeSelector from "./ThemeSelector";

export default function ThemeControls() {
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <div className="fixed top-6 right-8 z-50 flex items-center gap-3">
      <ThemeSelector />
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:opacity-80 transition-opacity"
        aria-label="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
