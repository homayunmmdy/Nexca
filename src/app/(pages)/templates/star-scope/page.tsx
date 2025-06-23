'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaStar,
    FaFire,
    FaPlay,
    FaHeart,
    FaShare,
    FaComment,
    FaSearch,
    FaBars,
    FaTimes,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube,
    FaCalendarAlt,
    FaEye
} from 'react-icons/fa';
import {IoIosTrendingUp} from "react-icons/io";
import Image from "next/image";

const StarScope = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');

    // Sample celebrity news data
    const heroNews = {
        title: "Emma Stone Announces Surprise Engagement at Venice Film Festival",
        excerpt: "The Academy Award winner was spotted with a stunning diamond ring during the festival's closing ceremony, sparking excitement among fans worldwide.",
        image: "https://images.unsplash.com/photo-1594736797933-d0d6ba155c6e?w=1200&h=800&fit=crop",
        category: "Hollywood",
        readTime: "3 min read",
        publishedAt: "2 hours ago"
    };

    const latestNews = [
        {
            id: 1,
            title: "Taylor Swift's New Album Breaks Streaming Records",
            excerpt: "The pop superstar's latest release has already garnered over 100 million streams in its first week.",
            image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
            category: "Music",
            readTime: "4 min read",
            publishedAt: "1 hour ago",
            likes: 1247,
            comments: 89
        },
        {
            id: 2,
            title: "Chris Hemsworth Spotted Filming New Marvel Project",
            excerpt: "Behind-the-scenes photos reveal the Thor actor in an unexpected new costume design.",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=400&h=300&fit=crop",
            category: "Hollywood",
            readTime: "2 min read",
            publishedAt: "3 hours ago",
            likes: 2156,
            comments: 234
        },
        {
            id: 3,
            title: "Zendaya's Fashion Week Moments Take Social Media by Storm",
            excerpt: "The actress and fashion icon has been turning heads with her bold style choices at Paris Fashion Week.",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
            category: "Fashion",
            readTime: "5 min read",
            publishedAt: "5 hours ago",
            likes: 3421,
            comments: 167
        }
    ];

    const popularNews = [
        {
            id: 4,
            title: "Ryan Reynolds and Blake Lively's Charity Gala Raises $5M",
            excerpt: "The power couple's annual charity event exceeded expectations with record-breaking donations.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
            category: "Charity",
            views: "2.3M",
            trending: true
        },
        {
            id: 5,
            title: "Ariana Grande Teases Upcoming Tour Dates",
            excerpt: "The pop star hints at a world tour announcement coming next week.",
            image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=300&fit=crop",
            category: "Music",
            views: "1.8M",
            trending: true
        },
        {
            id: 6,
            title: "Robert Downey Jr. Returns to MCU in Surprise Cameo",
            excerpt: "Sources confirm Iron Man's unexpected appearance in the latest Marvel release.",
            image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
            category: "Hollywood",
            views: "4.1M",
            trending: true
        }
    ];

    const categories = ['all', 'Hollywood', 'Music', 'Fashion', 'TV Shows', 'Sports'];

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          

            {/* Hero Section */}
            <motion.section
                className="relative h-screen flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="absolute inset-0">
                    <Image
                        src={heroNews.image}
                        width={1520}
                        height={511}
                        fetchPriority="high"
                        loading="eager"
                        priority
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
            <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-purple-400 bg-purple-900/50 rounded-full">
              {heroNews.category}
            </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            {heroNews.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            {heroNews.excerpt}
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-sm text-gray-400 mb-8">
              <span className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                  {heroNews.publishedAt}
              </span>
                            <span className="flex items-center">
                <FaEye className="mr-2" />
                                {heroNews.readTime}
              </span>
                        </div>
                        <motion.button
                            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center mx-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaPlay className="mr-2" />
                            Read Full Story
                        </motion.button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Latest News Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Latest Celebrity News</h2>
                        <p className="text-gray-400 text-lg">Stay updated with the hottest stories from Hollywood and beyond</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {latestNews.map((article) => (
                            <motion.article
                                key={article.id}
                                variants={itemVariants}
                                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group"
                                whileHover={{ y: -5 }}
                            >
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={405}
                                        height={192}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 line-clamp-2">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{article.publishedAt}</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            <button className="flex items-center text-gray-400 hover:text-red-400 transition-colors">
                                                <FaHeart className="mr-1" />
                                                {article.likes}
                                            </button>
                                            <button className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                                                <FaComment className="mr-1" />
                                                {article.comments}
                                            </button>
                                        </div>
                                        <button className="text-gray-400 hover:text-purple-400 transition-colors">
                                            <FaShare />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Popular/Trending Section */}
            <section className="py-16 px-4 bg-black/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                            <FaFire className="mr-3 text-orange-500" />
                            Trending Now
                        </h2>
                        <p className="text-gray-400 text-lg">The most talked-about stories this week</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {popularNews.map((article, index) => (
                            <motion.article
                                key={article.id}
                                variants={itemVariants}
                                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                                    index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                                }`}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className={`relative ${index === 0 ? 'h-96 lg:h-full' : 'h-64'}`}>
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={842}
                                        height={544}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                    {article.trending && (
                                        <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                        <IoIosTrendingUp  className="mr-1" />
                        Trending
                      </span>
                                        </div>
                                    )}

                                    <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className={`font-bold mb-2 group-hover:text-purple-400 transition-colors ${
                                        index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                                    }`}>
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-300 mb-3 line-clamp-2">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-400">
                      <FaEye className="mr-1" />
                        {article.views} views
                    </span>
                                        <div className="flex items-center space-x-2">
                                            <button className="text-gray-400 hover:text-red-400 transition-colors">
                                                <FaHeart />
                                            </button>
                                            <button className="text-gray-400 hover:text-purple-400 transition-colors">
                                                <FaShare />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Explore Categories</h2>
                        <p className="text-gray-400 text-lg">Dive deeper into your favorite celebrity topics</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                        {categories.slice(1).map((category, index) => (
                            <motion.button
                                key={category}
                                variants={itemVariants}
                                onClick={() => setActiveCategory(category)}
                                className={`p-6 rounded-xl text-center transition-all duration-300 group ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/70 hover:text-white'
                                }`}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="text-2xl mb-2">
                                    {category === 'Hollywood' && '🎬'}
                                    {category === 'Music' && '🎵'}
                                    {category === 'Fashion' && '👗'}
                                    {category === 'TV Shows' && '📺'}
                                    {category === 'Sports' && '⚽'}
                                </div>
                                <h3 className="font-semibold">{category}</h3>
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

    
        </div>
    );
};

export default StarScope;