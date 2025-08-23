"use client";
import { Button, LogoName } from "@/components/atoms";
import RouteConfig from "@/config/RouteConfig";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { HomeSettingBtn } from "@/components/molecules";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="h-full w-full p-4">
        <div className="flex items-center justify-between">
          <Link
            className="space-nowrap m-0 flex items-center gap-2 px-4 py-3 text-lg md:text-xl lg:text-2xl"
            href={RouteConfig.admin.base}
          >
            Admin
            <LogoName />
          </Link>
          <HomeSettingBtn />
          <Button
            className="lg:hidden"
            color="btn-primary"
            aria-label="close and open menu"
          >
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
          </Button>
        </div>
        <hr className="mb-2 mt-0 h-px bg-transparent bg-linear-to-r from-transparent via-black/40 to-transparent" />
        {isOpen && <NavLink />}
      </div>
    </>
  );
};

export default Sidebar;
