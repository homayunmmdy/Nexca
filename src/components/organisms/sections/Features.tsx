"use client";
import { FullHoverAnimation } from "@/components/molecules";
import { features } from "@/config/data";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import Feature from "./Feature";

const Features: React.FC = () => {
  const shouldReduceMotion = useReducedMotion(); // Respect user's motion preferences

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger child animations
      },
    },
  };

  // Animation variants for each feature item
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 }, // No motion if reduced motion is enabled
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="mx-auto my-10 max-w-7xl px-4">
        <div>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:text-center">
            <motion.span
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#144BCC]/30 bg-gradient-to-r from-[#144BCC]/10 to-indigo-600/10 px-6 py-2 text-sm font-semibold uppercase tracking-wider text-[#144BCC] backdrop-blur-sm lg:mb-8"
              whileHover={{
                scale: shouldReduceMotion ? 1 : 1.05,
                borderColor: "#144BCC",
                boxShadow: "0 0 30px rgba(20, 75, 204, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-1.5 w-1.5 rounded-full bg-[#144BCC] animate-pulse" />
              Key Features
            </motion.span>
            <h2 
            className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl"
            >
              Enhanced
              <FullHoverAnimation text="Content Management" />
            </h2>
          </div>
          <motion.div
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation only once
            variants={containerVariants}
          >
            <div className="grid max-w-xl grid-cols-1 gap-8  lg:max-w-none lg:grid-cols-2 ">
              {features.map((feature) => (
                <motion.div key={feature.id} className="h-full group" variants={itemVariants}>
                  <Feature data={feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
