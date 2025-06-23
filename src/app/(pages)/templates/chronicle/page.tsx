'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {IoIosClose, IoIosGlobe, IoIosSearch, IoIosTrendingUp, IoMdMenu} from "react-icons/io";
import {FaArrowRight, FaEye, FaFacebookF, FaInstagram, FaLinkedinIn, FaRegClock, FaUser} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Image from "next/image";


const TheChronicle = () => {
    const [email, setEmail] = useState('');

    // Real news content
    const featuredNews = {
        title: "Federal Reserve Signals Potential Rate Cuts as Economic Indicators Show Mixed Recovery",
        excerpt: "Central bank officials hint at monetary policy adjustments following latest employment data and inflation metrics, as economists debate the trajectory of post-pandemic economic stabilization across major global markets.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=800&fit=crop",
        category: "Economics",
        readTime: "8 min read",
        author: "Margaret Chen",
        publishedAt: "3 hours ago"
    };

    const latestNews = [
        {
            id: 1,
            title: "European Union Unveils Comprehensive AI Regulation Framework",
            excerpt: "Brussels introduces sweeping legislation governing artificial intelligence development and deployment across member states, establishing global precedent for tech industry oversight and consumer protection measures.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
            category: "Technology",
            readTime: "6 min read",
            publishedAt: "5 hours ago",
            author: "David Richardson"
        },
        {
            id: 2,
            title: "Climate Finance Summit Secures $100 Billion Commitment",
            excerpt: "International coalition of investors and governments pledges unprecedented funding for renewable energy infrastructure projects across developing nations, marking significant milestone in global climate action.",
            image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop",
            category: "Environment",
            readTime: "5 min read",
            publishedAt: "7 hours ago",
            author: "Elena Rodriguez"
        },
        {
            id: 3,
            title: "Pharmaceutical Breakthrough Shows Promise for Alzheimer's Treatment",
            excerpt: "Clinical trials demonstrate significant cognitive improvement in patients treated with novel drug compound, offering hope for millions affected by neurodegenerative diseases worldwide.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
            category: "Healthcare",
            readTime: "7 min read",
            publishedAt: "9 hours ago",
            author: "Dr. James Patterson"
        },
        {
            id: 4,
            title: "Global Supply Chain Disruptions Impact Luxury Goods Market",
            excerpt: "Premium brands face inventory challenges as shipping delays and raw material shortages continue to affect international trade routes, prompting industry-wide strategic adjustments.",
            image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
            category: "Business",
            readTime: "4 min read",
            publishedAt: "11 hours ago",
            author: "Sophie Laurent"
        },
        {
            id: 5,
            title: "Space Technology Advances Enable Next-Generation Satellite Network",
            excerpt: "Private aerospace companies successfully deploy constellation of communications satellites, revolutionizing global internet connectivity and opening new frontiers for digital infrastructure development.",
            image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
            category: "Science",
            readTime: "6 min read",
            publishedAt: "13 hours ago",
            author: "Michael Torres"
        },
        {
            id: 6,
            title: "International Trade Agreement Reshapes Pacific Economic Landscape",
            excerpt: "Historic multilateral pact between Asian and Pacific nations establishes new framework for commerce, investment, and technological cooperation, potentially affecting global trade dynamics.",
            image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
            category: "Politics",
            readTime: "9 min read",
            publishedAt: "15 hours ago",
            author: "Ambassador Liu Wei"
        }
    ];

    const trendingNews = [
        {
            id: 1,
            title: "Central Bank Digital Currencies Gain Momentum Across G20 Nations",
            views: "847K",
            category: "Finance",
            publishedAt: "2 hours ago"
        },
        {
            id: 2,
            title: "Renewable Energy Investments Surpass Fossil Fuel Funding for Third Consecutive Year",
            views: "623K",
            category: "Environment",
            publishedAt: "4 hours ago"
        },
        {
            id: 3,
            title: "Quantum Computing Breakthrough Promises Enhanced Cybersecurity Solutions",
            views: "591K",
            category: "Technology",
            publishedAt: "6 hours ago"
        },
        {
            id: 4,
            title: "Global Education Initiative Addresses Post-Pandemic Learning Gaps",
            views: "478K",
            category: "Education",
            publishedAt: "8 hours ago"
        },
        {
            id: 5,
            title: "Luxury Real Estate Markets Show Resilience Despite Economic Uncertainty",
            views: "412K",
            category: "Real Estate",
            publishedAt: "10 hours ago"
        }
    ];

    const categories = [
        "World News", "Economics", "Technology", "Politics", "Healthcare", "Environment", "Business", "Science", "Culture", "Opinion"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Breaking News Ticker */}
            <motion.div
                className="mt-16 bg-red-600 text-white py-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-center">
                    <div className="flex-shrink-0 px-4 bg-red-700 py-2 font-bold text-sm">
                        BREAKING
                    </div>
                    <div className="flex animate-scroll whitespace-nowrap px-4">
            <span className="text-sm">
              European markets close higher amid positive economic indicators • Tech sector leads gains with 3.2% increase • Oil prices stabilize following diplomatic breakthrough
            </span>
                    </div>
                </div>
            </motion.div>

            {/* Hero Section */}
            <motion.section
                className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-white"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div variants={itemVariants}>
                            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 mb-4">
                                <IoIosGlobe  className="h-3 w-3 mr-1" />
                                Lead Story
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
                                {featuredNews.title}
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-light">
                                {featuredNews.excerpt}
                            </p>
                            <div className="flex items-center space-x-6 text-sm text-slate-500 mb-8">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center mr-2">
                                        <FaUser  className="h-4 w-4" />
                                    </div>
                                    <span className="font-medium">{featuredNews.author}</span>
                                </div>
                                <div className="flex items-center">
                                    <FaRegClock  className="h-4 w-4 mr-2" />
                                    {featuredNews.readTime}
                                </div>
                                <span>{featuredNews.publishedAt}</span>
                            </div>
                            <motion.button
                                className="inline-flex items-center px-8 py-3 bg-slate-900 text-white rounded-none hover:bg-slate-800 transition-colors duration-200 font-medium text-sm tracking-wider uppercase"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Continue Reading
                                <FaArrowRight  className="ml-2 h-4 w-4" />
                            </motion.button>
                        </motion.div>

                        <motion.div
                            className="relative"
                            variants={itemVariants}
                        >
                            <div className="relative overflow-hidden shadow-2xl">
                                <Image
                                    src={featuredNews.image}
                                    alt={featuredNews.title}
                                    width={616}
                                    height={500}
                                    fetchPriority="high"
                                    loading="eager"
                                    priority
                                    className="w-full h-96 lg:h-[500px] object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                    {featuredNews.category}
                  </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Latest News Section */}
            <motion.section
                className="py-16 bg-slate-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div className="mb-12" variants={itemVariants}>
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-2">Latest Reports</h2>
                                <p className="text-lg text-slate-600">
                                    In-depth analysis and breaking developments from around the world
                                </p>
                            </div>
                            <motion.a
                                href="#"
                                className="hidden sm:flex items-center text-slate-900 font-medium hover:underline"
                                whileHover={{ x: 4 }}
                            >
                                View All <FaArrowRight  className="ml-1 h-4 w-4" />
                            </motion.a>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {latestNews.map((article, index) => (
                            <motion.article
                                key={article.id}
                                className="group cursor-pointer bg-white"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            width={384}
                                            height={192}
                                            loading='lazy'
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                        {article.category}
                      </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-200 leading-tight">
                                            {article.title}
                                        </h3>
                                        <p className="text-slate-600 mb-4 line-clamp-3 font-light">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-sm text-slate-500 border-t border-slate-100 pt-4">
                                            <div className="flex items-center space-x-4">
                                                <span className="font-medium">{article.author}</span>
                                                <span>{article.readTime}</span>
                                            </div>
                                            <span>{article.publishedAt}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Trending and Categories Section */}
            <motion.section
                className="py-16 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <motion.div className="lg:col-span-2" variants={itemVariants}>
                            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 flex items-center">
                                <IoIosTrendingUp  className="h-8 w-8 mr-3 text-red-500" />
                                Most Read Today
                            </h2>
                            <div className="space-y-4">
                                {trendingNews.map((article, index) => (
                                    <motion.div
                                        key={article.id}
                                        className="flex items-start p-6 bg-slate-50 hover:bg-slate-100 transition-colors duration-200 cursor-pointer group"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center text-white font-bold text-lg mr-4">
                                            {index + 1}
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex items-center space-x-3 mb-2">
                        <span className="px-2 py-1 bg-white text-slate-700 text-xs font-medium uppercase tracking-wider">
                          {article.category}
                        </span>
                                                <span className="text-xs text-slate-500">{article.publishedAt}</span>
                                            </div>
                                            <h3 className="font-serif font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors duration-200">
                                                {article.title}
                                            </h3>
                                            <div className="flex items-center space-x-4 text-sm text-slate-500">
                                                <div className="flex items-center">
                                                    <FaEye  className="h-4 w-4 mr-1" />
                                                    {article.views} reads
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">Browse by Topic</h3>
                            <div className="space-y-2">
                                {categories.map((category, index) => (
                                    <motion.a
                                        key={category}
                                        href="#"
                                        className="block p-4 bg-slate-50 hover:bg-slate-100 transition-colors duration-200 font-medium text-slate-900 border-l-4 border-transparent hover:border-slate-900"
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {category}
                                    </motion.a>
                                ))}
                            </div>

                            {/* Newsletter Sidebar */}
                            <div className="mt-8 p-6 bg-slate-900 text-white">
                                <h4 className="text-xl font-serif font-bold mb-3">Daily Brief</h4>
                                <p className="text-slate-300 mb-4 text-sm">
                                    Get our top stories delivered to your inbox every morning at 6 AM.
                                </p>
                                <div className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full px-3 py-2 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                                    />
                                    <motion.button
                                        className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium transition-colors duration-200"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Subscribe
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Newsletter Section */}
            <motion.section
                className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Stay Informed</h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-light">
                            Join over 250,000 readers who trust The Chronicle for authoritative journalism and insightful analysis
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400"
                            />
                            <motion.button
                                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-200 tracking-wider uppercase text-sm"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Subscribe
                            </motion.button>
                        </div>
                        <p className="text-sm text-slate-400 mt-4">
                            Free newsletter • No spam • Unsubscribe anytime
                        </p>
                    </motion.div>
                </div>
            </motion.section>

        </div>
    );
};

export default TheChronicle;