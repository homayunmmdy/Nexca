'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiSearch,
    FiShoppingCart,
    FiUser,
    FiHeart,
    FiMenu,
    FiStar,
    FiChevronLeft,
    FiChevronRight,
    FiTruck,
    FiShield,
    FiRefreshCw
} from 'react-icons/fi';

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerChildren = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const scaleOnHover = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 300, damping: 25 }
};

// Header Component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            className="bg-gray-900 text-white sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Top bar */}
            <div className="bg-gray-800 text-sm py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <span>Free shipping on orders over $35</span>
                    <div className="flex gap-4">
                        <span>Customer Service</span>
                        <span>Track Orders</span>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="max-w-7xl mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        className="text-2xl font-bold text-orange-400"
                        whileHover={{ scale: 1.05 }}
                    >
                        ShopZone
                    </motion.div>

                    {/* Search bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full py-2.5 px-4 pr-12 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <motion.button
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 p-2 rounded-md"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiSearch className="text-white" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Navigation icons */}
                    <div className="flex items-center gap-6">
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <FiHeart size={24} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
                            <FiUser size={24} />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer relative">
                            <FiShoppingCart size={24} />
                            <span className="absolute -top-2 -right-2 bg-orange-400 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
                        </motion.div>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                            <FiMenu size={24} />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <nav className="mt-4 hidden md:block">
                    <ul className="flex gap-8 text-sm">
                        {['Electronics', 'Fashion', 'Home & Garden', 'Sports', 'Books', 'Health', 'Automotive'].map((category, index) => (
                            <motion.li
                                key={category}
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="cursor-pointer hover:text-orange-400 transition-colors"
                            >
                                {category}
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

// Hero Section
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Summer Electronics Sale",
            subtitle: "Up to 70% off on trending gadgets",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
            cta: "Shop Now"
        },
        {
            title: "Fashion Forward",
            subtitle: "New arrivals from top brands",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop",
            cta: "Explore Collection"
        },
        {
            title: "Home Essentials",
            subtitle: "Transform your space with style",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop",
            cta: "Discover More"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-96 md:h-[500px] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center text-white text-center"
                >
                    <div className="max-w-4xl px-4">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold mb-4"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {slides[currentSlide].title}
                        </motion.h1>
                        <motion.p
                            className="text-xl md:text-2xl mb-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {slides[currentSlide].subtitle}
                        </motion.p>
                        <motion.button
                            className="bg-orange-400 hover:bg-orange-500 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {slides[currentSlide].cta}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>

            {/* Navigation arrows */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            >
                <FiChevronLeft className="text-white" size={24} />
            </button>
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full transition-colors"
            >
                <FiChevronRight className="text-white" size={24} />
            </button>
        </section>
    );
};

// @ts-ignore
const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            variants={fadeInUp}
            custom={index}
            {...scaleOnHover}
        >
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                />
                {product.discount && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
            -{product.discount}%
          </span>
                )}
                <motion.button
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiHeart className="text-gray-600" />
                </motion.button>
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

                <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className={i < product.rating ? 'fill-current' : ''} size={16} />
                        ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                        )}
                    </div>
                </div>

                <motion.button
                    className="w-full mt-4 bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.div>
    );
};

// Product Section Component
// @ts-ignore
const ProductSection = ({ title, products, viewAllLink }) => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="flex justify-between items-center mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
                    <motion.a
                        href={viewAllLink}
                        className="text-orange-400 hover:text-orange-500 font-semibold"
                        whileHover={{ x: 5 }}
                    >
                        View All →
                    </motion.a>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={staggerChildren}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {/*@ts-ignore*/}
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Features Section
const FeaturesSection = () => {
    const features = [
        {
            icon: <FiTruck size={32} />,
            title: "Free Shipping",
            description: "Free delivery on orders over $35"
        },
        {
            icon: <FiShield size={32} />,
            title: "Secure Payment",
            description: "100% secure and encrypted payments"
        },
        {
            icon: <FiRefreshCw size={32} />,
            title: "Easy Returns",
            description: "30-day hassle-free return policy"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerChildren}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6"
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                        >
                            <div className="text-orange-400 mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-orange-400 mb-4">ShopZone</h3>
                        <p className="text-gray-400">Your trusted online shopping destination with millions of products and great deals.</p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Customer Service</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>Contact Us</li>
                            <li>FAQ</li>
                            <li>Shipping Info</li>
                            <li>Returns</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Affiliate Program</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 bg-blue-600 rounded"></div>
                            <div className="w-8 h-8 bg-pink-600 rounded"></div>
                            <div className="w-8 h-8 bg-blue-400 rounded"></div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 ShopZone. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Main App Component
const AmazonTemplate = () => {
    // Sample product data
    const latestProducts = [
        {
            id: 1,
            name: "Wireless Bluetooth Headphones with Active Noise Cancellation",
            price: 89.99,
            originalPrice: 129.99,
            rating: 4,
            reviews: 1240,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
            discount: 31
        },
        {
            id: 2,
            name: "Smart Fitness Watch with Heart Rate Monitor",
            price: 159.99,
            rating: 5,
            reviews: 892,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Portable Wireless Charging Pad for All Devices",
            price: 29.99,
            originalPrice: 39.99,
            rating: 4,
            reviews: 567,
            image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=300&h=300&fit=crop",
            discount: 25
        },
        {
            id: 4,
            name: "Premium Coffee Maker with Built-in Grinder",
            price: 199.99,
            rating: 5,
            reviews: 324,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop"
        }
    ];

    const popularProducts = [
        {
            id: 5,
            name: "Ultra HD 4K Smart TV 55-inch with HDR",
            price: 449.99,
            originalPrice: 599.99,
            rating: 5,
            reviews: 2150,
            image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
            discount: 25
        },
        {
            id: 6,
            name: "Gaming Mechanical Keyboard RGB Backlit",
            price: 79.99,
            rating: 4,
            reviews: 1876,
            image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop"
        },
        {
            id: 7,
            name: "Wireless Gaming Mouse with Precision Sensor",
            price: 59.99,
            originalPrice: 79.99,
            rating: 4,
            reviews: 945,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
            discount: 25
        },
        {
            id: 8,
            name: "Professional DSLR Camera with Lens Kit",
            price: 899.99,
            rating: 5,
            reviews: 432,
            image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop"
        }
    ];

    const electronicsProducts = [
        {
            id: 9,
            name: "Smartphone with 128GB Storage and Triple Camera",
            price: 699.99,
            originalPrice: 799.99,
            rating: 5,
            reviews: 3240,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
            discount: 13
        },
        {
            id: 10,
            name: "Laptop Stand Adjustable Aluminum Alloy",
            price: 39.99,
            rating: 4,
            reviews: 876,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop"
        },
        {
            id: 11,
            name: "Bluetooth Speaker Waterproof Portable",
            price: 49.99,
            originalPrice: 69.99,
            rating: 4,
            reviews: 1567,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
            discount: 29
        },
        {
            id: 12,
            name: "USB-C Hub with Multiple Ports and Fast Charging",
            price: 34.99,
            rating: 5,
            reviews: 654,
            image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=300&fit=crop"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <HeroSection />
            <ProductSection
                title="Latest Arrivals"
                products={latestProducts}
                viewAllLink="/latest"
            />
            <FeaturesSection />
            <ProductSection
                title="Most Popular"
                products={popularProducts}
                viewAllLink="/popular"
            />
            <ProductSection
                title="Electronics & Tech"
                products={electronicsProducts}
                viewAllLink="/electronics"
            />
            <Footer />
        </div>
    );
};

export default AmazonTemplate;