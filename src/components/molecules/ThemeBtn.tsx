"use client";
import { CUPCAKETHEME, DARKTHEME, FORESTTHEME, LIGHTTHEME, LUXURYTHEME } from "@/config/Constants";
import { useEffect, useState } from "react";
import { ThemeFiled, ThemeIcon } from "../atoms";

const ThemeBtn = () => {
  const [theme, setTheme] = useState<string>(DARKTHEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);
  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1">
        <ThemeIcon themeColor={theme} />
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        <ThemeFiled state={theme} setState={setTheme} Theme={LIGHTTHEME} />
        <ThemeFiled state={theme} setState={setTheme} Theme={DARKTHEME} />
        <ThemeFiled state={theme} setState={setTheme} Theme={CUPCAKETHEME} />
        <ThemeFiled state={theme} setState={setTheme} Theme={FORESTTHEME} />
        <ThemeFiled state={theme} setState={setTheme} Theme={LUXURYTHEME} />
      </ul>
    </div>
  );
};

export default ThemeBtn;
