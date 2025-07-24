"use client";
import EmailBox from "@/app/(pages)/templates/(components)/EmailBox";
import { PostsCashType } from "@/types/CashTypes";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiTrendingUp } from "react-icons/fi";
import LatestPosts from "../(components)/LatestPosts";
import TabContent from "../(components)/TabContent";
import TextHero from "../(components)/TextHero";
import VerticalCard from "../(components)/VerticalCard";
import { AI_HUB_categories } from "../(static-data)/aiHub";
import MainSec from "./components/MainSec";

const AINewsHub = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const latestNews: PostsCashType[] = [
    {
      _id: "1",
      title: "section 10 Microsoft Copilot Integration Reaches 100 Million Users",
      description:
        "Enterprise adoption surges as AI-powered productivity tools become mainstream across Fortune 500 companies.",
      imgurl:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      body: "test",
      categories: [
        {
          id: 128283283,
          name: "category 1",
        },
      ],
      section : "10",
      templates : '1',
      services : '1',
      author: "Alex Thompson",
       createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
    },
    {
      _id: "2",
      title: "section 11 Google's Gemini Ultra Beats GPT-4 in Mathematical Reasoning",
      description:
        "New benchmarks reveal significant improvements in logical problem-solving and complex mathematical computations.",
      imgurl:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop",
      body: "test",
      section : "11",
      templates : '1',
      services : '1',
      author: "Alex Thompson",
       createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
    },
    {
      _id: "3",
      title: "section 12 AI-Powered Drug Discovery Leads to Cancer Breakthrough",
      description:
        "Machine learning algorithms identify promising compounds 1000x faster than traditional methods.",
      body: "test",
      imgurl:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
      section : "12",
      templates : '1',
      services : '1',
      author: "Alex Thompson",
       createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
    },
    {
      _id: '4',
      title: "section 13 Tesla's FSD Beta Achieves Human-Level Performance",
      description:
        "Latest autonomous driving metrics show AI matching human drivers in complex urban scenarios.",
      body: "test",
      imgurl:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=250&fit=crop",
     section : "13",
      templates : '1',
      services : '1',
      author: "Alex Thompson",
       createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
    },
        {
      _id: '5',
      title: "section 14 Tesla's FSD Beta Achieves Human-Level Performance",
      description:
        "Latest autonomous driving metrics show AI matching human drivers in complex urban scenarios.",
      body: "test",
      imgurl:
        "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=250&fit=crop",
     section : "14",
      templates : '1',
      services : '1',
      author: "Alex Thompson",
       createdAt: "2024-05-22T08:56:49.785Z",
    updatedAt: "2024-05-22T08:56:49.785Z",
    __v: 0,
    }
  ];

  // Filter news based on active category
  const filteredNews = latestNews.filter((article) => {
    if (activeCategory === "all") return true;
    return article.section === activeCategory;
  });

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
      <MainSec />

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {AI_HUB_categories.map((category) => (
            <TabContent
              key={category.id}
              category={category}
              setActiveCategory={setActiveCategory}
              activeCategory={activeCategory}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Posts */}
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
                  Latest Posts
                </h2>
              </motion.div>

              {filteredNews.length > 0 ? (
                <div className="space-y-6">
                  {filteredNews.map((article) => (
                    <VerticalCard data={article} key={article._id} />
                  ))}
                </div>
              ) : (
                <motion.div
                  variants={itemVariants}
                  className="bg-base-200 rounded-xl p-8 text-center"
                >
                  <h3 className="text-xl font-medium mb-2">
                    No articles found
                  </h3>
                  <p className="text-base-100">
                    There are no articles in this category yet.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <LatestPosts />
            <EmailBox
              bg="bg-gradient-to-br from-blue-600 to-purple-600"
              title="Stay Updated!"
              description="Get the latest AI news delivered to your inbox weekly."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINewsHub;
