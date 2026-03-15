"use client";

import { useState } from "react";
import { Palette, Check } from "lucide-react";
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

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-gray-800/90 dark:bg-gray-700 backdrop-blur-md text-white hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label="Select theme color"
      >
        <Palette className="w-5 h-5" />
      </button>

      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* ================= DESKTOP DROPDOWN ================= */}
          <div className="hidden md:block absolute right-0 mt-3 w-64 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-2xl p-5 z-50 animate-fadeIn">

            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-4">
              🎨 Choose Theme
            </p>

            <div className="grid grid-cols-2 gap-3">
              {Object.keys(themes).map((theme) => (
                <button
                  key={theme}
                  onClick={() => {
                    changeTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`relative flex flex-col items-center justify-center p-4 rounded-lg border transition-all duration-200
                  ${currentTheme === theme
                      ? "border-theme-primary bg-gray-100 dark:bg-gray-800"
                      : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                >
                  <div
                    className="w-10 h-10 rounded-full shadow-md border-2 border-white"
                    style={{ backgroundColor: themeColors[theme] }}
                  />

                  <span className="text-xs mt-2 capitalize text-gray-700 dark:text-gray-300">
                    {theme}
                  </span>

                  {currentTheme === theme && (
                    <Check className="absolute top-2 right-2 w-4 h-4 text-theme-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ================= MOBILE BOTTOM SHEET ================= */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-3xl shadow-2xl p-6 z-50 animate-slideUp">

            {/* drag indicator */}
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-5"></div>

            <p className="text-center text-sm font-semibold text-gray-700 dark:text-gray-200 mb-6">
              🎨 Select Theme
            </p>

            <div className="grid grid-cols-2 gap-4">
              {Object.keys(themes).map((theme) => (
                <button
                  key={theme}
                  onClick={() => {
                    changeTheme(theme);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all
                  ${currentTheme === theme
                      ? "bg-gray-100 dark:bg-gray-800 ring-2 ring-theme-primary"
                      : "bg-gray-50 dark:bg-gray-800 hover:scale-[1.02]"
                    }`}
                >
                  <div
                    className="w-8 h-8 rounded-full shadow border-2 border-white"
                    style={{ backgroundColor: themeColors[theme] }}
                  />

                  <span className="text-sm capitalize text-gray-700 dark:text-gray-200">
                    {theme}
                  </span>

                  {currentTheme === theme && (
                    <Check className="ml-auto w-4 h-4 text-theme-primary" />
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
