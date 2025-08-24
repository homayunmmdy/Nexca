"use client";
import EmailListForm from "@/components/organisms/EmailListForm";
import { motion } from "framer-motion";
import { useState } from "react";
import EmailBox from "../(components)/EmailBox";
import ChronicleHero from "./components/ChronicleHero";
import ChronicleTeleType from "./components/ChronicleTeleType";
import LatestReports from "./components/LatestReports";
import MostReadToday from "./components/MostReadToday";

const TheChronicle = () => {
  const [email, setEmail] = useState("");

  // Real news content
  const featuredNews = {
    title:
      "Federal Reserve Signals Potential Rate Cuts as Economic Indicators Show Mixed Recovery",
    excerpt:
      "Central bank officials hint at monetary policy adjustments following latest employment data and inflation metrics, as economists debate the trajectory of post-pandemic economic stabilization across major global markets.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
    category: "Economics",
    readTime: "8 min read",
    author: "Margaret Chen",
    publishedAt: "3 hours ago",
  };

  const latestNews = [
    {
      id: 1,
      title: "European Union Unveils Comprehensive AI Regulation Framework",
      excerpt:
        "Brussels introduces sweeping legislation governing artificial intelligence development and deployment across member states, establishing global precedent for tech industry oversight and consumer protection measures.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Technology",
      readTime: "6 min read",
      publishedAt: "5 hours ago",
      author: "David Richardson",
    },
    {
      id: 2,
      title: "Climate Finance Summit Secures $100 Billion Commitment",
      excerpt:
        "International coalition of investors and governments pledges unprecedented funding for renewable energy infrastructure projects across developing nations, marking significant milestone in global climate action.",
      image:
        "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop",
      category: "Environment",
      readTime: "5 min read",
      publishedAt: "7 hours ago",
      author: "Elena Rodriguez",
    },
    {
      id: 3,
      title:
        "Pharmaceutical Breakthrough Shows Promise for Alzheimer's Treatment",
      excerpt:
        "Clinical trials demonstrate significant cognitive improvement in patients treated with novel drug compound, offering hope for millions affected by neurodegenerative diseases worldwide.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      category: "Healthcare",
      readTime: "7 min read",
      publishedAt: "9 hours ago",
      author: "Dr. James Patterson",
    },
    {
      id: 4,
      title: "Global Supply Chain Disruptions Impact Luxury Goods Market",
      excerpt:
        "Premium brands face inventory challenges as shipping delays and raw material shortages continue to affect international trade routes, prompting industry-wide strategic adjustments.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
      category: "Business",
      readTime: "4 min read",
      publishedAt: "11 hours ago",
      author: "Sophie Laurent",
    },
    {
      id: 5,
      title:
        "Space Technology Advances Enable Next-Generation Satellite Network",
      excerpt:
        "Private aerospace companies successfully deploy constellation of communications satellites, revolutionizing global internet connectivity and opening new frontiers for digital infrastructure development.",
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
      category: "Science",
      readTime: "6 min read",
      publishedAt: "13 hours ago",
      author: "Michael Torres",
    },
    {
      id: 6,
      title:
        "International Trade Agreement Reshapes Pacific Economic Landscape",
      excerpt:
        "Historic multilateral pact between Asian and Pacific nations establishes new framework for commerce, investment, and technological cooperation, potentially affecting global trade dynamics.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
      category: "Politics",
      readTime: "9 min read",
      publishedAt: "15 hours ago",
      author: "Ambassador Liu Wei",
    },
  ];

  const trendingNews = [
    {
      id: 1,
      title: "Central Bank Digital Currencies Gain Momentum Across G20 Nations",
      views: "847K",
      category: "Finance",
      publishedAt: "2 hours ago",
    },
    {
      id: 2,
      title:
        "Renewable Energy Investments Surpass Fossil Fuel Funding for Third Consecutive Year",
      views: "623K",
      category: "Environment",
      publishedAt: "4 hours ago",
    },
    {
      id: 3,
      title:
        "Quantum Computing Breakthrough Promises Enhanced Cybersecurity Solutions",
      views: "591K",
      category: "Technology",
      publishedAt: "6 hours ago",
    },
    {
      id: 4,
      title:
        "Global Education Initiative Addresses Post-Pandemic Learning Gaps",
      views: "478K",
      category: "Education",
      publishedAt: "8 hours ago",
    },
    {
      id: 5,
      title:
        "Luxury Real Estate Markets Show Resilience Despite Economic Uncertainty",
      views: "412K",
      category: "Real Estate",
      publishedAt: "10 hours ago",
    },
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {/* Breaking News Ticker */}
      <ChronicleTeleType />

      {/* Hero Section */}
      <motion.section
        className="pt-8 pb-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto mt-6">
          <ChronicleHero />
        </div>
      </motion.section>

      {/* Latest News Section */}
      <motion.section
        className="py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold  mb-2">
                  Latest Reports
                </h2>
                <p className="text-lg ">
                  In-depth analysis and breaking developments from around the
                  world
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <LatestReports />
          </div>
        </div>
      </motion.section>

      {/* Trending and Categories Section */}
      <motion.section
        className="py-16 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <MostReadToday />

            <motion.div variants={itemVariants}>
              <EmailBox
                title="Daily Brief"
                description="Get our top stories delivered to your inbox every morning at 6 AM."
                bg="bg-slate-900"
                ElementColor="error"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl text-white sm:text-4xl font-serif font-bold mb-4">
              Stay Informed
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
              Join over 250,000 readers who trust The Chronicle for
              authoritative journalism and insightful analysis
            </p>
            <div className="flex flex-col items-center gap-4  mx-auto">
              <EmailListForm color="error" />
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Free newsletter • No spam • Unsubscribe anytime
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default TheChronicle;
