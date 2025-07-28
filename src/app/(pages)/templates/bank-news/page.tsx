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
            <motion.section variants={itemVariants}>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 sm:h-80">
                  <Image
                    src={heroNews.image}
                    alt={heroNews.title}
                    width={800}
                    height={320}
                    fetchPriority="high"
                    loading="eager"
                    priority
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <FiTrendingUp className="w-3 h-3 mr-1" />
                      TRENDING
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-2 text-white/80 text-sm mb-2">
                      <span className="bg-blue-600 px-2 py-1 rounded text-xs">
                        {heroNews.category}
                      </span>
                      <span className="flex items-center">
                        <FiClock className="w-3 h-3 mr-1" />
                        {heroNews.time}
                      </span>
                      <span>{heroNews.readTime}</span>
                    </div>
                    <h1 className="text-white text-xl sm:text-2xl font-bold leading-tight">
                      {heroNews.title}
                    </h1>
                    <p className="text-white/90 text-sm mt-2 line-clamp-2">
                      {heroNews.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

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
            <motion.section
              className="bg-white rounded-xl p-6 shadow-sm"
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FiBarChart className="w-5 h-5 mr-2 text-green-500" />
                Market Summary
              </h3>

              <div className="space-y-3">
                {marketData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-gray-50"
                  >
                    <div>
                      <div className="font-medium text-sm text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {item.value}
                      </div>
                    </div>
                    <div
                      className={`text-right ${
                        item.positive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      <div className="flex items-center justify-end">
                        {item.positive ? (
                          <FiTrendingUp className="w-4 h-4 mr-1" />
                        ) : (
                          <FiTrendingDown className="w-4 h-4 mr-1" />
                        )}
                        <span className="font-medium">{item.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default BankNewsPage;
