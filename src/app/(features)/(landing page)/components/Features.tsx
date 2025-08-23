"use client";
import { PremiumBadge } from "@/components/atoms";
import { FullHoverAnimation } from "@/components/molecules";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { FeaturesData } from "../data/FeaturesData";
import FeatureCard from "./FeatureCard";

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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
            <PremiumBadge>Key Features</PremiumBadge>
            <h2 className="text-center text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
              Enhanced
              <FullHoverAnimation text="Content Management" />
            </h2>
          </div>
          <motion.div
            className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger animation only once
            variants={containerVariants}
          >
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {FeaturesData.map((feature) => (
                <FeatureCard data={feature} key={feature.title} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Features;
