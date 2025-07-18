"use client";
import useCheckLogin from "@/hooks/useCheckLogin";
import React from "react";
import { Toaster } from "react-hot-toast";
import { Sidebar } from "./components/sections";

const skipLinkStyles = {
  position: 'absolute',
  left: '-999px',
  top: '10px',
  background: '#fff',
  color: '#000',
  padding: '8px 16px',
  zIndex: 1000,
  borderRadius: '4px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
};
const skipLinkFocusStyles = {
  left: '10px',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useCheckLogin();
  const [isSkipFocused, setSkipFocused] = React.useState(false);
  return (
    <>
      <a
        href="#main"
        style={isSkipFocused ? { ...skipLinkStyles, ...skipLinkFocusStyles } : skipLinkStyles}
        tabIndex={0}
        onFocus={() => setSkipFocused(true)}
        onBlur={() => setSkipFocused(false)}
        onMouseDown={() => setSkipFocused(false)}
      >
        Skip to Main Content
      </a>
      <Toaster />
      <div className="grid grid-cols-12 gap-5 p-5">
        <aside className="col-span-12 rounded-xl border-2 border-indigo-400 shadow-xl lg:col-span-3">
          <Sidebar />
        </aside>
        <main id="main" className="col-span-12 mt-5 rounded-xl border-2 border-indigo-400 shadow-xl lg:col-span-9 lg:mt-0">
          <div className="h-full w-full p-4">{children}</div>
        </main>
      </div>
    </>
  );
}
