"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <IoSunnyOutline
        aria-label="light Mode themeToggle icon"
        title="light Mode"
        data-testid="light"
        className="swap-off h-10 w-10 fill-current"
      />
      <IoMoonOutline
        aria-label="dark Mode themeToggle"
        title="dark Mode"
        data-testid="dark"
        className="swap-on h-10 w-10 fill-current"
      />
    </label>
  );
};

export default ThemeToggle;