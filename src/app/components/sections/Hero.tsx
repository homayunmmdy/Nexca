"use client";
import AdminImage from "@/../public/static/Image/admin.webp";
import { Button, FullHoverAnimation } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";

const Hero: React.FC = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for decorative elements
  const decorativeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: [0, 0.6, 0.4, 0.8],
      scale: 1,
      transition: {
        duration: 1.5,
        times: [0, 0.3, 0.6, 1],
      },
    },
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="relative pt-4">
        <div className="mx-auto my-5 max-w-7xl px-4">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
            {/* Decorative Elements */}
            <div className="absolute inset-y-0 hidden w-full lg:right-0 lg:block lg:w-1/2">
              <motion.span
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-6 top-24 h-24 w-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 opacity-60 blur-xl md:left-4 lg:top-28 lg:opacity-95"
              />
              <motion.span
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-12 right-4 h-24 w-24 rounded-3xl bg-blue-600 opacity-80 blur-xl"
              />
            </div>
            <motion.span
              variants={decorativeVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-5 aspect-square w-4/12 rotate-90 skew-x-12 skew-y-12 rounded-full bg-gradient-to-tr from-blue-600 to-green-400 opacity-40 blur-2xl lg:left-0 lg:w-2/12"
            />

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-7 lg:text-left xl:py-8"
            >
              <motion.h1
                variants={contentVariants}
                className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl"
              >
                Build Your
                <FullHoverAnimation text="Own Blog Website" link="demo" />
                Right Now
              </motion.h1>
              <motion.p variants={contentVariants} className="mt-8">
                Create your blog website in less than a day with Nexca. Our
                powerful admin panel lets you manage your content effortlessly,
                no coding required.
              </motion.p>
              <motion.div
                variants={contentVariants}
                className="mt-8 flex items-center justify-center gap-3"
              >
                <Link href="/admin">
                  <Button
                    removeDefaultStyle={true}
                    color={null}
                    style="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto border-indigo-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group"
                  >
                    <IoArrowUpCircleSharp
                      size={40}
                      className="rotate-45 justify-end rounded-full p-1 duration-300 ease-linear group-hover:rotate-90 group-hover:border-none"
                    />{" "}
                    Admin Demo
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none"
            >
              <Image
                src={AdminImage}
                alt="Nexca Admin Panel"
                title="Nexca Admin Panel"
                width={1200}
                height={800}
                className="max-h-96 rounded-3xl bg-slate-400 object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
