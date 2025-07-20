'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    FiShoppingCart,
    FiHeart,
    FiStar,
    FiSearch,
    FiMenu,
    FiX,
    FiUser,
    FiChevronRight,
    FiTruck,
    FiShield,
    FiRefreshCw,
    FiArrowRight
} from 'react-icons/fi';
import Image from "next/image";
import EmailListForm from "@/components/organisms/EmailListForm";

// Mock data
const featuredProducts = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 2847,
        category: "Electronics",
        isNew: true
    },
    {
        id: 2,
        name: "Minimalist Watch Collection",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        rating: 4.9,
        reviews: 1523,
        category: "Accessories",
        isSale: true
    },
    {
        id: 3,
        name: "Smart Fitness Tracker",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
        rating: 4.7,
        reviews: 892,
        category: "Health & Fitness"
    }
];

const popularProducts = [
    {
        id: 4,
        name: "Organic Cotton T-Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        rating: 4.6,
        reviews: 456,
        category: "Fashion"
    },
    {
        id: 5,
        name: "Ceramic Coffee Mug Set",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop",
        rating: 4.8,
        reviews: 234,
        category: "Home & Kitchen"
    },
    {
        id: 6,
        name: "Laptop Backpack",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
        rating: 4.5,
        reviews: 678,
        category: "Travel"
    },
    {
        id: 7,
        name: "Wireless Charging Pad",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
        rating: 4.4,
        reviews: 345,
        category: "Electronics"
    }
];

const categories = [
    { name: "Electronics", icon: "🔌", count: 1247 },
    { name: "Fashion", icon: "👕", count: 892 },
    { name: "Home & Garden", icon: "🏠", count: 567 },
    { name: "Sports & Outdoors", icon: "⚽", count: 423 },
    { name: "Beauty & Health", icon: "💄", count: 334 },
    { name: "Books & Media", icon: "📚", count: 289 }
];

const ProductCard: React.FC<{ product: any; index: number }> = ({ product, index }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
        >
            <div className="relative overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={384}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    {product.isNew && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
                    )}
                    {product.isSale && (
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
                    )}
                </div>
                <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                >
                    <FiHeart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                </button>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg"
                    >
                        Quick View
                    </motion.button>
                </div>
            </div>

            <div className="p-6">
                <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <FiStar
                                key={i}
                                className={`w-4 h-4 ${
                                    i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">
            {product.rating} ({product.reviews})
          </span>
                </div>

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                </h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                ${product.originalPrice}
              </span>
                        )}
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <FiShoppingCart className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

const CategoryCard: React.FC<{ category: any; index: number }> = ({ category, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg transition-all duration-300"
    >
        <div className="text-4xl mb-3">{category.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
        <p className="text-sm text-gray-600">{category.count} items</p>
    </motion.div>
);

export default function EcommerceTemplate() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, -50]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <div className="min-h-screen bg-gray-50">
           

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full opacity-10"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full opacity-10"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white rounded-full opacity-10"></div>
                </motion.div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                Discover Your
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                  Perfect Style
                </span>
                            </h1>
                            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                                Explore our curated collection of premium products designed to elevate your lifestyle. From cutting-edge electronics to timeless fashion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    Shop Now
                                    <FiArrowRight className="ml-2 w-5 h-5" />
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                                <div className="grid grid-cols-3 gap-4">
                                    {featuredProducts.slice(0, 3).map((product, index) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                            className="bg-white rounded-2xl p-3 shadow-lg"
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={138}
                                                height={80}
                                                className="w-full h-20 object-cover rounded-lg mb-2"
                                            />
                                            <p className="text-xs font-medium text-gray-900 line-clamp-2">
                                                {product.name}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: FiTruck, title: "Free Shipping", desc: "On orders over $50" },
                            { icon: FiShield, title: "Secure Payments", desc: "100% protected checkout" },
                            { icon: FiRefreshCw, title: "Easy Returns", desc: "30-day return policy" }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                    <feature.icon className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Browse through our carefully curated categories to find exactly what you&apos;re looking for
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((category, index) => (
                            <CategoryCard key={category.name} category={category} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-center mb-16"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
                            <p className="text-xl text-gray-600">Hand-picked favorites just for you</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700"
                        >
                            View All
                            <FiChevronRight className="ml-1 w-5 h-5" />
                        </motion.button>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Products */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Popular</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Discover what everyone&apos;s talking about - our best-selling items
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Stay in the Loop</h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Get the latest updates on new products, exclusive offers, and style tips
                        </p>
                        <div className="flex flex-col  gap-4 items-center mx-auto">
                            <EmailListForm btnColor="btn-info"/>
                        </div>
                    </motion.div>
                </div>
            </section>

      
        </div>
    );
}