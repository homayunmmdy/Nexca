"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FiBookmark,
  FiChevronRight,
  FiClock,
  FiCpu,
  FiDatabase,
  FiEye,
  FiGlobe,
  FiShare2,
  FiSmartphone,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import TextHero from "../(components)/TextHero";
import LatestPosts from "../(components)/LatestPosts";

const AINewsHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample news data
  const featuredNews = {
    title:
      "OpenAI Announces GPT-5: Revolutionary Breakthrough in Artificial Intelligence",
    excerpt:
      "The latest iteration promises unprecedented reasoning capabilities and multimodal understanding that could reshape industries worldwide.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    category: "Breaking",
    readTime: "5 min read",
    author: "Sarah Chen",
    publishedAt: "2 hours ago",
    views: "12.3K",
  };

  const latestNews = [
    {
      id: 1,
      title: "Microsoft Copilot Integration Reaches 100 Million Users",
      excerpt:
        "Enterprise adoption surges as AI-powered productivity tools become mainstream across Fortune 500 companies.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "Enterprise",
      readTime: "3 min read",
      author: "Alex Thompson",
      publishedAt: "4 hours ago",
      views: "8.7K",
    },
    {
      id: 2,
      title: "Google's Gemini Ultra Beats GPT-4 in Mathematical Reasoning",
      excerpt:
        "New benchmarks reveal significant improvements in logical problem-solving and complex mathematical computations.",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      category: "Research",
      readTime: "4 min read",
      author: "Dr. Maria Rodriguez",
      publishedAt: "6 hours ago",
      views: "15.2K",
    },
    {
      id: 3,
      title: "AI-Powered Drug Discovery Leads to Cancer Breakthrough",
      excerpt:
        "Machine learning algorithms identify promising compounds 1000x faster than traditional methods.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      category: "Healthcare",
      readTime: "6 min read",
      author: "Dr. James Wilson",
      publishedAt: "8 hours ago",
      views: "22.1K",
    },
    {
      id: 4,
      title: "Tesla's FSD Beta Achieves Human-Level Performance",
      excerpt:
        "Latest autonomous driving metrics show AI matching human drivers in complex urban scenarios.",
      image:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=250&fit=crop",
      category: "Automotive",
      readTime: "4 min read",
      author: "Emily Davis",
      publishedAt: "12 hours ago",
      views: "18.9K",
    },
  ];

  const popularNews = [
    {
      id: 5,
      title: "The Ethics of AI: New Global Governance Framework Proposed",
      views: "45.3K",
      readTime: "8 min read",
      publishedAt: "1 day ago",
    },
    {
      id: 6,
      title: "AI Chips Shortage: Impact on Innovation and Market Dynamics",
      views: "38.7K",
      readTime: "5 min read",
      publishedAt: "2 days ago",
    },
    {
      id: 7,
      title: "Quantum Computing Meets AI: IBM's Latest Breakthrough",
      views: "32.1K",
      readTime: "7 min read",
      publishedAt: "3 days ago",
    },
    {
      id: 8,
      title: "AI in Education: Transforming Learning Experiences Globally",
      views: "29.8K",
      readTime: "6 min read",
      publishedAt: "4 days ago",
    },
  ];

  const categories = [
    { id: "all", name: "All News", icon: FiGlobe },
    { id: "breaking", name: "Breaking", icon: FiZap },
    { id: "research", name: "Research", icon: FiDatabase },
    { id: "enterprise", name: "Enterprise", icon: FiCpu },
    { id: "healthcare", name: "Healthcare", icon: FiSmartphone },
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div>
      <TextHero
        title="Stay Ahead with"
        name="AI News"
        description="Your premier destination for artificial intelligence breakthroughs,
          industry insights, and cutting-edge research updates."
      />
      
            

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-base-200  hover:bg-blue-50 hover:text-blue-600 shadow-md"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent size={16} />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between mb-8"
              >
                <h2 className="text-3xl font-bold  flex items-center">
                  <FiTrendingUp className="mr-3 text-blue-600" />
                  Latest News
                </h2>
                <button className="text-blue-600 hover:text-blue-700 flex items-center font-medium">
                  View All
                  <FiChevronRight className="ml-1" size={16} />
                </button>
              </motion.div>

              <div className="space-y-6">
                {latestNews.map((article) => (
                  <motion.article
                    key={article.id}
                    variants={itemVariants}
                    className="bg-base-200 group rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={266}
                          height={255}
                          loading="lazy"
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-base-300 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <div className="flex items-center text-sm space-x-4">
                            <span className="flex items-center">
                              <FiClock className="mr-1" size={12} />
                              {article.readTime}
                            </span>
                            <span className="flex items-center">
                              <FiEye className="mr-1" size={12} />
                              {article.views}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold  mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
                          {article.title}
                        </h3>

                        <p className=" mb-4 line-clamp-2">{article.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                              {article.author.charAt(0)}
                            </div>
                            <div>
                              <p className="font-medium  text-sm">
                                {article.author}
                              </p>
                              <p className="text-xs text-base-100">
                                {article.publishedAt}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <motion.button
                              className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiBookmark size={16} />
                            </motion.button>
                            <motion.button
                              className="p-2 text-slate-400 hover:text-blue-500 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiShare2 size={16} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LatestPosts />

            {/* Newsletter Signup */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-md p-6 text-white"
            >
              <motion.h3
                variants={itemVariants}
                className="text-xl font-bold mb-3"
              >
                Stay Updated
              </motion.h3>
              <motion.p variants={itemVariants} className="text-blue-100 mb-4">
                Get the latest AI news delivered to your inbox weekly.
              </motion.p>
              <motion.div variants={itemVariants} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 bg-white py-2 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe Now
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINewsHub;
