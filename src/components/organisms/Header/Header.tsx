"use client";
import {
  GitHubBtn,
  HamburgerIcon,
  GlobalSearchInput,
  ThemeToggle,
} from "@/components/molecules";
import SiteConfig from "@/config/site";
import { motion, useReducedMotion } from "framer-motion"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import MobileMenu from "./MobileMenu";
import { LogoName } from "@/components/atoms";

const Header = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const shouldReduceMotion = useReducedMotion();

  // Animation variants for the header
  const headerVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : -20,
    },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.header
        className="navbar fixed left-0 right-0 top-0 z-50 border-b-2 border-indigo-400 bg-base-100 shadow-xl transition-all hover:border-indigo-700"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="navbar mx-auto max-w-7xl">
          <div className="navbar-start lg:w-[30%]">
            <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
            <div className="flex items-center gap-2">
              <LogoName />
              <GlobalSearchInput className="hidden lg:block" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex lg:w-[50%] lg:justify-end">
            <HeaderMenu pathname={pathname} nav={nav} />
          </div>
          <div className="navbar-end gap-3 lg:w-[20%]">
            <ThemeToggle />
            <GitHubBtn link={SiteConfig.github} />
          </div>
        </div>
      </motion.header>
      {isOpen && <MobileMenu pathname={pathname} nav={nav} />}
    </>
  );
};

export default Header;
