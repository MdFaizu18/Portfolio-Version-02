"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const themes = {
  orange: {
    primary: "#ff7f50",
    primaryHover: "#ff6a3d",
    primaryLight: "#ffb499",
  },
  blue: {
    primary: "#3b82f6",
    primaryHover: "#2563eb",
    primaryLight: "#93c5fd",
  },
  purple: {
    primary: "#a855f7",
    primaryHover: "#9333ea",
    primaryLight: "#d8b4fe",
  },
  teal: {
    primary: "#14b8a6",
    primaryHover: "#0d9488",
    primaryLight: "#5eead4",
  },
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("orange");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColorTheme = localStorage.getItem("colorTheme");

    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    if (savedColorTheme && themes[savedColorTheme]) {
      setCurrentTheme(savedColorTheme);
    }
  }, []);

  useEffect(() => {
    const colors = themes[currentTheme];
    document.documentElement.style.setProperty(
      "--theme-primary",
      colors.primary,
    );
    document.documentElement.style.setProperty(
      "--theme-primary-hover",
      colors.primaryHover,
    );
    document.documentElement.style.setProperty(
      "--theme-primary-light",
      colors.primaryLight,
    );
  }, [currentTheme]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("colorTheme", theme);
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleDarkMode, currentTheme, changeTheme, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
