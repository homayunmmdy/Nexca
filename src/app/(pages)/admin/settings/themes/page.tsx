"use client";
import { Button, ThemeFiled } from "@/components/atoms";
import { DARKTHEME } from "@/config/Constants";
import { ThemesConfig } from "@/config/themes";
import { useEffect, useState } from "react";

// Define a type for your theme settings
type ThemeSetting = {
  name: string;
  activate: boolean;
};

const ThemeSettingPage = () => {
  const [theme, setTheme] = useState<string>(DARKTHEME);
  const [themeSettings, setThemeSettings] =
    useState<ThemeSetting[]>(ThemesConfig);

  // Load saved theme and settings from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedSettings = localStorage.getItem("themeSettings");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }

    if (savedSettings) {
      setThemeSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Handle theme activation toggle
  const toggleThemeActivation = (themeName: string) => {
    const updatedSettings = themeSettings.map((setting) =>
      setting.name === themeName
        ? { ...setting, activate: !setting.activate }
        : setting
    );

    setThemeSettings(updatedSettings);
    localStorage.setItem("themeSettings", JSON.stringify(updatedSettings));
  };

  return (
    <div className="space-y-4">
      <ul
        tabIndex={0}
        className="grid w-full p-2 grid-cols-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4"
      >
        {themeSettings.map((item, index) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <ThemeFiled state={theme} setState={setTheme} Theme={item.name} />
            <div className="flex items-center gap-2">
              <Button
                onClick={() => toggleThemeActivation(item.name)}
                color={item.activate ? "btn-success" : "btn-error"}
              >
                {item.activate ? "Active" : "Inactive"}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSettingPage;
