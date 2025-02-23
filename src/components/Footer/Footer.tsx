
'use client'
import SiteConfig from "@/config/site";
import CopyRight from "./CopyRight";
import EmailListForm from "./EmailListForm";
import FooterLinks from "./FooterLinks";
import FooterMedia from "./FooterMedia";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  // Animation variants for the footer sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="w-full border-t-2 border-indigo-600">
      <div className="mx-auto w-[94%] md:w-[92%]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-12 gap-x-5 gap-y-8 py-10"
        >
          {/* Logo, Slogan, and Media Section */}
          <motion.div
            variants={childVariants}
            className="relative col-span-full flex h-96 flex-col items-center justify-center gap-12 rounded-2xl border-2 border-indigo-600 bg-base-100 p-6 shadow-xl xl:col-span-3 xl:w-72"
          >
            <motion.h1
              variants={childVariants}
              className="text-xl font-bold text-indigo-700 md:text-2xl lg:text-3xl"
            >
              <Link href="/" title={SiteConfig.name}>
                {SiteConfig.name}
              </Link>
            </motion.h1>
            <motion.p variants={childVariants} className="text-center">
              {SiteConfig.slogan}
            </motion.p>
            <motion.div variants={childVariants}>
              <FooterMedia />
            </motion.div>
          </motion.div>

          {/* Footer Links Section */}
          <motion.div variants={childVariants} className="col-span-full">
            <FooterLinks />
          </motion.div>

          {/* Email List Section */}
          <motion.div
            variants={childVariants}
            className="col-span-full block md:col-span-4 xl:col-span-3 xl:py-16"
          >
            <motion.p
              variants={childVariants}
              className="mb-9 text-center text-lg font-bold xl:text-left"
            >
              Email List
            </motion.p>
            <motion.div variants={childVariants}>
              <EmailListForm />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Copyright Section */}
      <motion.div
        variants={childVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <CopyRight siteName={SiteConfig.name} />
      </motion.div>
    </footer>
  );
};

export default Footer;
