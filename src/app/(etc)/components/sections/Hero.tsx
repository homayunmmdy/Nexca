import { Button, FullHoverAnimation } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import AdminImage from "@/../public/static/Image/admin.webp";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  // Animation variants for content
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  // Animation variants for decorative elements
  const decorativeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: { 
      opacity: [0, 0.6, 0.4, 0.8],
      scale: 1,
      transition: {
        duration: 1.5,
        times: [0, 0.3, 0.6, 1]
      }
    }
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section className="relative pt-4">
        <div className="mx-auto max-w-7xl px-4 my-5">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Decorative Elements */}
            <div className="hidden lg:block absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
              <motion.span
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95"
              />
              <motion.span
                variants={decorativeVariants}
                initial="hidden"
                animate="visible"
                className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"
              />
            </div>
            <motion.span
              variants={decorativeVariants}
              initial="hidden"
              animate="visible"
              className="absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90 w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400"
            />

            {/* Content */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
            >
              <motion.h1
                variants={contentVariants}
                className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold"
              >
                Build Your
                <FullHoverAnimation text="Own Blog Website" link="demo" />
                Right Now
              </motion.h1>
              <motion.p
                variants={contentVariants}
                className="mt-8"
              >
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
                    title="Admin Demo"
                    removeDefaultStyle={true}
                    color={null}
                    icon={
                      <IoArrowUpCircleSharp
                        size={40}
                        className="justify-end group-hover:rotate-90 ease-linear duration-300 rounded-full group-hover:border-none p-1 rotate-45"
                      />
                    }
                    style="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg backdrop-blur-md lg:font-semibold isolation-auto border-indigo-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-indigo-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1 overflow-hidden border-2 rounded-full group"
                  />
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl"
            >
              <Image
                src={AdminImage}
                alt="Nexca Admin Panel"
                title="Nexca Admin Panel"
                width={1200}
                height={800}
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96 bg-slate-400"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
