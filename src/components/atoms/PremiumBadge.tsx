"use client";
import { motion } from "framer-motion";

const PremiumBadge = ({ label }: { label: string }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="inline-block mb-4"
    >
      <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-base-100 text-indigo-800 text-sm font-semibold rounded-full border border-indigo-200">
        ✨ {label}
      </span>
    </motion.div>
  );
};

export default PremiumBadge;
