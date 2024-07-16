"use client";
import React, { useState } from "react";
import SiteConfig from '@/app/config/site';
import Link from "next/link";
import NavLink from "./NavLink";
import { LogoutButton } from "../../elements";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="w-full h-full px-4">
        <div className="flex justify-between items-center">
          <Link
            className="block px-4 py-3 m-0 text-lg whitespace-nowrap text-slate-700"
            href="/"
            target="_blank"
          >
            Admin
            <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
              {" "}
              {SiteConfig.name}
            </span>
          </Link>
          <svg
            onClick={toggleMenu}
            className="h-6 w-6 lg:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </div>
        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent mb-2" />
        {isOpen && <NavLink />}
        <LogoutButton />
      </div>
    </>
  );
};

export default Sidebar;
