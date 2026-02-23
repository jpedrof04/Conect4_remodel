"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

interface ThemeToggleProps {
  position?: "default" | "dashboard";
}

export default function ThemeToggle({ position = "default" }: ThemeToggleProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const style =     position === "dashboard" ? {
    position: "fixed" as const,
    top: "1rem",
    right: "1rem",
    background: "var(--card-bg)",
    border: "1px solid var(--foreground)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    cursor: "pointer",
    fontSize: "1rem",
    color: "var(--foreground)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1001,
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  } : {
    position: "absolute" as const,
    top: "1rem",
    right: "1rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.25rem",
    color: "var(--foreground)",
    padding: "0.5rem",
    zIndex: 100,
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      style={style}
    >
      <FontAwesomeIcon icon={faMoon} />
      <FontAwesomeIcon icon={faSun} />
    </button>
  );
}
