"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import {
  FiBarChart,
  FiBookmark,
  FiChevronRight,
  FiClock,
  FiDollarSign,
  FiEye,
  FiGlobe,
  FiShare2,
  FiTrendingDown,
  FiTrendingUp,
} from "react-icons/fi";
import {LatestLinearPost} from "@/components/organisms";
import LatestPosts from "@/app/(pages)/templates/(components)/LatestPosts";
import EmailBox from "@/app/(pages)/templates/(components)/EmailBox";
import PostCard from "@/components/organisms/postsSection/PostCard";
import UnderMain from "@/app/(pages)/templates/bank-news/components/UnderMain";
import MainSec from "@/app/(pages)/templates/bank-news/components/MainSec";
import MarketSummary from "@/app/(pages)/templates/bank-news/components/MarketSummary";

const BankNewsPage = () => {

  const heroNews = {
    title:
      "Federal Reserve Signals Potential Rate Cut as Inflation Shows Signs of Cooling",
    excerpt:
      "Fed Chair Jerome Powell indicates central bank may consider easing monetary policy in upcoming meetings as core inflation metrics trend downward for third consecutive month.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
    category: "Policy",
    readTime: "4 min read",
    time: "2 hours ago",
    trending: true,
  };

  const marketData = [
    { name: "S&P 500", value: "4,327.78", change: "+1.2%", positive: true },
    { name: "DOW JONES", value: "33,945.58", change: "+0.8%", positive: true },
    { name: "NASDAQ", value: "13,581.72", change: "-0.3%", positive: false },
    { name: "10Y TREASURY", value: "4.52%", change: "+0.05%", positive: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <MainSec />

            {/* Latest News */}
            <motion.section variants={itemVariants}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Latest News
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <UnderMain />
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Latest Posts */}
            <LatestPosts />

            {/* Newsletter Signup */}
            <EmailBox title="Stay Informed" description="Get the latest banking and financial news delivered to your
                inbox daily." bg="bg-gradient-to-r from-blue-600 to-blue-700" ElementColor="ghost"/>
            {/* Market Summary */}
             <MarketSummary />
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BankNewsPage;
