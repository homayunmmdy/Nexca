"use client"; // Mark this as a Client Component

import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Retrieve the theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "light";
    // Apply the theme to the <html> element
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return <>{children}</>;
}