"use client";
import { ThemeFiled } from "@/components/atoms";
import { DARKTHEME } from "@/config/Constants";
import { ThemesConfig } from "@/config/themes";
import { useEffect, useState } from "react";

const ThemeSettingPage = () => {
  const [theme, setTheme] = useState<string>(DARKTHEME);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);
  return (
    <ul
      tabIndex={0}
      className="grid w-full p-2 grid-cols-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4"
    >
      {ThemesConfig.map((item, index) => (
        <ThemeFiled
          state={theme}
          key={index}
          setState={setTheme}
          Theme={item.name}
        />
      ))}
    </ul>
  );
};

export default ThemeSettingPage;
