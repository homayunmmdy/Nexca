"use client"; // Mark this as a Client Component

import React, { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { DARKTHEME, LIGHTTHEME } from "../../config/Constants";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<typeof LIGHTTHEME | typeof DARKTHEME>(
    DARKTHEME
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | typeof LIGHTTHEME
      | typeof DARKTHEME
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === DARKTHEME ? LIGHTTHEME : DARKTHEME;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        className="theme-controller"
        checked={theme === DARKTHEME}
        onChange={toggleTheme}
      />
      <IoSunnyOutline
        aria-label={`${LIGHTTHEME} Mode themeToggle icon`}
        title={`${LIGHTTHEME} Mode`}
        data-testid={LIGHTTHEME}
        className="swap-off h-10 w-10 fill-current"
      />
      <IoMoonOutline
        aria-label={`${DARKTHEME} Mode themeToggle`}
        title={`${DARKTHEME} Mode`}
        data-testid={DARKTHEME}
        className="swap-on h-10 w-10 fill-current"
      />
    </label>
  );
};

export default ThemeToggle;
