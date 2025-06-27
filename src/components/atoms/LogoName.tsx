"use client";
import React from 'react';
import SiteConfig from "../../config/site";
import { motion } from "framer-motion";
import Link from "next/link";

const LogoName: React.FC = () => {
  return (
    <motion.p
      className="text-xl font-bold text-indigo-700 md:text-2xl lg:text-3xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
    <Link href="/" title={SiteConfig.name} aria-label="logo link">
        {SiteConfig.name}
      </Link>
    </motion.p>
  );
};

export default LogoName;
