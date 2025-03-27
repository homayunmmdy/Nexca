"use client";
import { DARKTHEME, LIGHTTHEME } from "@/config/Constants";
import { useEffect, useState } from "react";
import { Button } from "../atoms";

const ThemeBtn = () => {
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

  const toggleTheme = (newTheme: typeof LIGHTTHEME | typeof DARKTHEME) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1">
        <div className="bg-base-100 border-base-content/10 grid shrink-0 grid-cols-2 gap-0.5 rounded-md border p-1">
          <div className="bg-base-content size-1 rounded-full"></div>{" "}
          <div className="bg-primary size-1 rounded-full"></div>{" "}
          <div className="bg-secondary size-1 rounded-full"></div>{" "}
          <div className="bg-accent size-1 rounded-full"></div>
        </div>
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
        <li>
          <Button
            color="btn-ghost"
            className="gap-3 px-2 flex theme-controller w-full  btn-sm btn-block "
            onClick={() => toggleTheme(LIGHTTHEME)}
          >
            <div
              data-theme={LIGHTTHEME}
              className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
            >
              <div className="bg-base-content size-1 rounded-full"></div>{" "}
              <div className="bg-primary size-1 rounded-full"></div>{" "}
              <div className="bg-secondary size-1 rounded-full"></div>{" "}
              <div className="bg-accent size-1 rounded-full"></div>
            </div>{" "}
            <div className="w-32 truncate text-justify">{LIGHTTHEME}</div>{" "}
            {theme === LIGHTTHEME ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-3 w-3 shrink-0"
              >
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>
            ): <div className="h-3 w-3 shrink-0"></div>}
          </Button>
        </li>
        <li>
          <Button
            color="btn-ghost"
            className="gap-3 px-2 flex theme-controller w-full  btn-sm btn-block "
            onClick={() => toggleTheme(DARKTHEME)}
          >
            <div
              data-theme={DARKTHEME}
              className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
            >
              <div className="bg-base-content size-1 rounded-full"></div>{" "}
              <div className="bg-primary size-1 rounded-full"></div>{" "}
              <div className="bg-secondary size-1 rounded-full"></div>{" "}
              <div className="bg-accent size-1 rounded-full"></div>
            </div>{" "}
            <div className="w-32 truncate text-justify">{DARKTHEME}</div>{" "}
            {theme === DARKTHEME ? (
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-3 w-3 shrink-0"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
            </svg>
            ): <div className="h-3 w-3 shrink-0"></div>}
            
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ThemeBtn;
