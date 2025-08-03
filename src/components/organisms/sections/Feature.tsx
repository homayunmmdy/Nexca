import { FeaturesType } from "@/types/entities";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface Props {
  data: FeaturesType;
}

const Feature: React.FC<Props> = ({ data }: Props) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative  h-full">
      <motion.div
        className="relative h-full rounded-2xl border  bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 border-[#144BCC]/30 group-hover:bg-gradient-to-br group-hover:from-[#144BCC]/10 group-hover:to-indigo-600/5"
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                boxShadow: "0 25px 50px -12px rgba(20, 75, 204, 0.25)",
              }
        }
        transition={{ duration: 0.3 }}
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#144BCC]/20 via-indigo-600/20 to-[#144BCC]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          initial={false}
        />

        {/* Content */}
        <div className="relative">
          {/* Icon container with styling */}
          <div className="flex gap-5 items-center mb-6">
            <motion.div
              className=" flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-[#144BCC] to-indigo-700 shadow-lg shadow-[#144BCC]/25"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.05,
                      rotate: 5,
                      boxShadow: "0 20px 40px -12px rgba(20, 75, 204, 0.4)",
                    }
              }
              transition={{ duration: 0.3 }}
            >
              <div className=" text-xl">{data.icon}</div>
            </motion.div>
            {/* Title with typography */}
            <motion.h3
              className="mb-3 text-2xl font-bold  transition-colors duration-300 group-hover:text-[#144BCC] md:text-3xl"
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      x: 4,
                    }
              }
              transition={{ duration: 0.2 }}
            >
              {data.title}
            </motion.h3>
          </div>

          {/* Description with enhanced styling */}
          <motion.p
            className="text-base leading-relaxed transition-colors duration-300  md:text-lg"
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    x: 4,
                  }
            }
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {data.description}
          </motion.p>

          {/* Subtle accent line */}
          <motion.div
            className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:via-[#144BCC]/40"
            initial={false}
          />
        </div>

        {/* Floating particles effect (optional) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <motion.div
            className="absolute -top-1 left-1/4 h-1 w-1 rounded-full bg-[#144BCC]/60 opacity-0 group-hover:opacity-100"
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute -top-1 right-1/3 h-1 w-1 rounded-full bg-indigo-400/60 opacity-0 group-hover:opacity-100"
            animate={{
              y: [0, -25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1.2,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Feature;
