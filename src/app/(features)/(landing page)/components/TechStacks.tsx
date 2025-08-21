"use client";
import { PremiumBadge } from "@/components/atoms";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript, SiVercel } from "react-icons/si";

const TechStacks: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

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

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      rotateX: -15,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98],
        type: "spring",
        damping: 25,
        stiffness: 120,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="relative min-h-screen py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-base-200 "
      />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <PremiumBadge label="Premium Technology Stack"/>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Our Tech Arsenal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl  leading-relaxed"
          >
            Discover the cutting-edge technologies powering our digital
            excellence. Each tool is carefully selected to deliver unparalleled
            performance and innovation.
          </motion.p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
              }}
            >
              {/* Card */}
              <div className="relative h-80 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-base-200 shadow-xl border border-gray-100 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: tech.delay,
                      type: "spring",
                      damping: 15,
                    }}
                    className="mb-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-base-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <tech.Icon
                        className={`w-8 h-8 ${tech.iconColor} group-hover:text-indigo-600 transition-colors duration-300`}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: tech.delay + 0.1 }}
                    className="text-xl sm:text-2xl font-bold  mb-4 group-hover:text-indigo-700 transition-colors duration-300"
                  >
                    {tech.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: tech.delay + 0.2 }}
                    className=" leading-relaxed flex-grow text-sm sm:text-base"
                  >
                    {tech.description}
                  </motion.p>

                  {/* Hover Effect Indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: tech.delay + 0.3 }}
                    className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"
                  />
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const techStack = [
  {
    Icon: RiNextjsFill,
    title: "Next.js",
    description:
      "Full-stack React framework with App Router, server components, and advanced routing capabilities for modern web applications.",
    gradient: "from-slate-900 via-slate-800 to-black",
    iconColor: "text-black",
    delay: 0,
  },
  {
    Icon: FaReact,
    title: "React 18",
    description:
      "Cutting-edge component library with concurrent features, server components, and advanced hooks for seamless user experiences.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    iconColor: "text-cyan-300",
    delay: 0.1,
  },
  {
    Icon: SiMongodb,
    title: "MongoDB Atlas",
    description:
      "Cloud-native NoSQL database with advanced indexing, real-time analytics, and enterprise-grade security for scalable data management.",
    gradient: "from-green-600 via-emerald-500 to-teal-500",
    iconColor: "text-green-400",
    delay: 0.2,
  },
  {
    Icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework with custom design systems, responsive breakpoints, and advanced theming capabilities.",
    gradient: "from-teal-400 via-cyan-500 to-blue-500",
    iconColor: "text-cyan-400",
    delay: 0.3,
  },
  {
    Icon: SiTypescript,
    title: "TypeScript",
    description:
      "Enterprise-grade type system providing compile-time safety, advanced IntelliSense, and robust development workflows.",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    iconColor: "text-blue-400",
    delay: 0.4,
  },
  {
    Icon: SiVercel,
    title: "Vercel Platform",
    description:
      "Edge-optimized deployment platform with global CDN, serverless functions, and automatic performance optimization.",
    gradient: "from-gray-900 via-gray-800 to-black",
    iconColor: "text-black",
    delay: 0.5,
  },
];

export default TechStacks;
