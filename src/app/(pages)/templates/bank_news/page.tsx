'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    FiTrendingUp,
    FiTrendingDown,
    FiClock,
    FiEye,
    FiShare2,
    FiBookmark,
    FiSearch,
    FiMenu,
    FiX,
    FiChevronRight,
    FiBell,
    FiUser,
    FiDollarSign,
    FiGlobe, FiBarChart
} from 'react-icons/fi';
import Image from "next/image";

const BankNewsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const headerY = useTransform(scrollY, [0, 100], [0, -100]);

    const categories = [
        { id: 'all', name: 'All News', icon: FiGlobe },
        { id: 'markets', name: 'Markets', icon: FiBarChart  },
        { id: 'rates', name: 'Interest Rates', icon: FiTrendingUp },
        { id: 'policy', name: 'Policy', icon: FiDollarSign },
        { id: 'crypto', name: 'Digital Assets', icon: FiTrendingDown }
    ];

    const heroNews = {
        title: "Federal Reserve Signals Potential Rate Cut as Inflation Shows Signs of Cooling",
        excerpt: "Fed Chair Jerome Powell indicates central bank may consider easing monetary policy in upcoming meetings as core inflation metrics trend downward for third consecutive month.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop",
        category: "Policy",
        readTime: "4 min read",
        time: "2 hours ago",
        trending: true
    };

    const latestNews = [
        {
            id: 1,
            title: "Major Banks Report Strong Q1 Earnings Despite Economic Headwinds",
            excerpt: "JPMorgan Chase, Bank of America, and Wells Fargo exceed analyst expectations with robust lending growth and improved credit quality metrics.",
            image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=250&fit=crop",
            category: "Banking",
            readTime: "3 min read",
            time: "4 hours ago",
            views: "12.5K"
        },
        {
            id: 2,
            title: "Treasury Yields Surge Following Stronger-Than-Expected Jobs Data",
            excerpt: "10-year Treasury yields climb to highest level in six weeks as employment figures suggest continued economic resilience.",
            image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=250&fit=crop",
            category: "Markets",
            readTime: "2 min read",
            time: "6 hours ago",
            views: "8.7K"
        },
        {
            id: 3,
            title: "Central Bank Digital Currency Pilot Program Enters Phase Two",
            excerpt: "Federal Reserve expands CBDC testing with additional financial institutions as digital dollar development accelerates.",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
            category: "Digital Assets",
            readTime: "5 min read",
            time: "8 hours ago",
            views: "15.2K"
        }
    ];

    const popularNews = [
        {
            id: 1,
            title: "Housing Market Shows Signs of Recovery Amid Lower Mortgage Rates",
            views: "25.3K",
            time: "1 day ago",
            category: "Real Estate"
        },
        {
            id: 2,
            title: "Regional Banks Face Renewed Scrutiny Over Commercial Real Estate Exposure",
            views: "18.7K",
            time: "2 days ago",
            category: "Banking"
        },
        {
            id: 3,
            title: "Inflation Data Signals Potential Shift in Monetary Policy Direction",
            views: "22.1K",
            time: "3 days ago",
            category: "Economy"
        },
        {
            id: 4,
            title: "Cryptocurrency Regulation Framework Moves Forward in Congress",
            views: "31.5K",
            time: "4 days ago",
            category: "Regulation"
        }
    ];

    const marketData = [
        { name: "S&P 500", value: "4,327.78", change: "+1.2%", positive: true },
        { name: "DOW JONES", value: "33,945.58", change: "+0.8%", positive: true },
        { name: "NASDAQ", value: "13,581.72", change: "-0.3%", positive: false },
        { name: "10Y TREASURY", value: "4.52%", change: "+0.05%", positive: true }
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <motion.header
                className="bg-white shadow-sm border-b sticky top-0 z-50"
                style={{ y: headerY }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <motion.div
                                className="flex items-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <FiDollarSign className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">BankNews</span>
                            </motion.div>
                        </div>

                        <nav className="hidden md:flex space-x-8">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                        activeCategory === category.id
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <category.icon className="w-4 h-4 inline mr-2" />
                                    {category.name}
                                </motion.button>
                            ))}
                        </nav>

                        <div className="flex items-center space-x-4">
                            <motion.button
                                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiSearch className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiBell className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiUser className="w-5 h-5" />
                            </motion.button>

                            <button
                                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white border-t"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="px-4 py-3 space-y-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => {
                                        setActiveCategory(category.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                        activeCategory === category.id
                                            ? 'text-blue-600 bg-blue-50'
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                >
                                    <category.icon className="w-4 h-4 inline mr-2" />
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.header>

            {/* Market Ticker */}
            <motion.div
                className="bg-gray-900 text-white py-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <div className="flex animate-pulse">
                    <div className="flex space-x-8 whitespace-nowrap">
                        {marketData.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                                <span className="font-medium">{item.name}</span>
                                <span className="text-gray-300">{item.value}</span>
                                <span className={`flex items-center ${item.positive ? 'text-green-400' : 'text-red-400'}`}>
                  {item.positive ? <FiTrendingUp className="w-3 h-3 mr-1" /> : <FiTrendingDown className="w-3 h-3 mr-1" />}
                                    {item.change}
                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

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
                                            <span className="bg-blue-600 px-2 py-1 rounded text-xs">{heroNews.category}</span>
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
                                <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
                                <motion.button
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                                    whileHover={{ x: 5 }}
                                >
                                    View All <FiChevronRight className="w-4 h-4 ml-1" />
                                </motion.button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {latestNews.map((article, index) => (
                                    <motion.article
                                        key={article.id}
                                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                        variants={itemVariants}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                width={250}
                                                height={192}
                                                loading='lazy'
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                                            </div>
                                        </div>

                                        <div className="p-4">
                                            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                                {article.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <div className="flex items-center space-x-3">
                          <span className="flex items-center">
                            <FiClock className="w-3 h-3 mr-1" />
                              {article.time}
                          </span>
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                          <span className="flex items-center">
                            <FiEye className="w-3 h-3 mr-1" />
                              {article.views}
                          </span>
                                                    <motion.button
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <FiBookmark className="w-3 h-3" />
                                                    </motion.button>
                                                    <motion.button
                                                        className="p-1 hover:bg-gray-100 rounded"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                    >
                                                        <FiShare2 className="w-3 h-3" />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Popular Articles */}
                        <motion.section
                            className="bg-white rounded-xl p-6 shadow-sm"
                            variants={itemVariants}
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <FiTrendingUp className="w-5 h-5 mr-2 text-red-500" />
                                Most Popular
                            </h3>

                            <div className="space-y-4">
                                {popularNews.map((article, index) => (
                                    <motion.div
                                        key={article.id}
                                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer group transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {article.title}
                                            </h4>
                                            <div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                                                <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
                                                <span className="flex items-center">
                          <FiEye className="w-3 h-3 mr-1" />
                                                    {article.views}
                        </span>
                                                <span>{article.time}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Newsletter Signup */}
                        <motion.section
                            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white"
                            variants={itemVariants}
                        >
                            <h3 className="text-lg font-bold mb-2">Stay Informed</h3>
                            <p className="text-blue-100 text-sm mb-4">
                                Get the latest banking and financial news delivered to your inbox daily.
                            </p>

                            <div className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <motion.button
                                    className="w-full bg-white text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe Now
                                </motion.button>
                            </div>
                        </motion.section>

                        {/* Market Summary */}
                        <motion.section
                            className="bg-white rounded-xl p-6 shadow-sm"
                            variants={itemVariants}
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                <FiBarChart  className="w-5 h-5 mr-2 text-green-500" />
                                Market Summary
                            </h3>

                            <div className="space-y-3">
                                {marketData.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                                        <div>
                                            <div className="font-medium text-sm text-gray-900">{item.name}</div>
                                            <div className="text-lg font-bold text-gray-900">{item.value}</div>
                                        </div>
                                        <div className={`text-right ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                                            <div className="flex items-center justify-end">
                                                {item.positive ? <FiTrendingUp className="w-4 h-4 mr-1" /> : <FiTrendingDown className="w-4 h-4 mr-1" />}
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

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <FiDollarSign className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold">BankNews</span>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Your trusted source for banking, finance, and economic news.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Categories</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Markets</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Banking</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Economy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Company</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-3">Connect</h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">RSS Feed</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                        <p>&copy; 2025 BankNews. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default BankNewsPage;