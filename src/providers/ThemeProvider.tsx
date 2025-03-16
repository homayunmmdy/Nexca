"use client"; 

import { ErrorText } from "@/components/atoms";
import { useEffect, useState } from "react";

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

  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Set the initial online status
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {isOnline ? (
        children
      ) : (
        <ErrorText>
          You are currently offline. and offline feature will add soon
        </ErrorText>
      )}
    </>
  );
}
