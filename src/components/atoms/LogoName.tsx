"use client";
import SiteConfig from "../../config/site";
import { motion } from "framer-motion";
import Link from "next/link";

const LogoName = () => {
  return (
    <motion.p
      className="text-xl font-bold text-indigo-700 md:text-2xl lg:text-3xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
    <Link href="/" title={SiteConfig.name}>
        {SiteConfig.name}
      </Link>
    </motion.p>
  );
};

export default LogoName;
