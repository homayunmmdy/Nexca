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
            <span className="mb-4 flex rounded-lg bg-[#144BCC] px-2 text-sm font-semibold uppercase leading-7 text-white lg:mb-8">
              Key Features
            </span>
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
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
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <motion.div key={feature.id} variants={itemVariants}>
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
