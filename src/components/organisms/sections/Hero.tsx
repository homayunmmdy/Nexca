
"use client";
import AdminImage from "@/../public/static/Image/admin.webp";
import {  CTABtn, FullHoverAnimation } from "@/components/molecules";
import RouteConfig from "@/config/RouteConfig";
import SiteConfig from "@/config/site";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  // Simplified animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  // Simplified decorative elements animation
  const decorativeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  // Simplified image animation
  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-4">
      <div className="mx-auto my-5 max-w-7xl px-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Decorative Elements */}
          <div className="absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2">
            <motion.span
              variants={decorativeVariants}
              initial="hidden"
              animate="visible"
              className="absolute -left-6 top-24 h-24 w-24 rounded-3xl bg-green-400 opacity-60 blur-lg md:left-4 lg:top-28"
              style={{ willChange: "opacity, transform" }}
            />
            <motion.span
              variants={decorativeVariants}
              initial="hidden"
              animate="visible"
              className="absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-lg"
              style={{ willChange: "opacity, transform" }}
            />
          </div>
          <motion.span
            variants={decorativeVariants}
            initial="hidden"
            animate="visible"
            className="absolute -top-5 aspect-square w-4/12 rounded-full bg-linear-to-tr from-blue-600 to-green-400 opacity-40 blur-xl lg:left-0 lg:w-2/12"
            style={{ willChange: "opacity, transform" }}
          />

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"
          >
            <motion.h2
              variants={contentVariants}
              className="font-bold leading-tight text-5xl md:text-6xl xl:text-7xl"
            >
              Explore the
              <FullHoverAnimation text="Web Demo" link="demo" />
              Right Now
            </motion.h2>
            <motion.p variants={contentVariants} className="mt-8 md:text-xl">
              {SiteConfig.slogan}
            </motion.p>
            <motion.div
              variants={contentVariants}
              className="mt-8 flex items-center justify-center gap-3"
            >
              <CTABtn href={RouteConfig.admin.base}>
              Admin Demo
              </CTABtn>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none"
            style={{ willChange: "opacity, transform" }}
          >
            <Image
              src={AdminImage}
              alt="Nexca Admin Panel"
              title="Nexca Admin Panel"
              width={1200}
              height={800}
              priority // Improves LCP
              className="max-h-96 rounded-3xl bg-slate-400 object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
            
