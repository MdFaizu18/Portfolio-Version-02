"use client";

import { useState } from "react";
import { Palette } from "lucide-react";
import { useTheme, themes } from "../contexts/ThemeContext";

export default function ThemeSelector() {
  const { currentTheme, changeTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeColors = {
    orange: "#ff7f50",
    blue: "#3b82f6",
    purple: "#a855f7",
    teal: "#14b8a6",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:opacity-80 transition-opacity"
        aria-label="Select theme color"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-50 min-w-[200px]">
            <p className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-200">
              Choose Theme
            </p>
            <div className="space-y-2">
              {Object.keys(themes).map((theme) => (
                <button
                  key={theme}
                  onClick={() => {
                    changeTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    currentTheme === theme
                      ? "bg-gray-100 dark:bg-gray-700"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600"
                    style={{ backgroundColor: themeColors[theme] }}
                  />
                  <span className="text-sm font-medium capitalize text-gray-700 dark:text-gray-200">
                    {theme}
                  </span>
                  {currentTheme === theme && (
                    <svg
                      className="w-4 h-4 ml-auto text-gray-700 dark:text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
