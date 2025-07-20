'use client'
import React, { useState } from 'react';
import { motion } from "framer-motion";
import {
    FaAward,
    FaCalendarAlt, FaChartLine,
    FaClock,
    FaHeadphones,
    FaHeart, FaMailBulk,
    FaMusic,
    FaPause,
    FaPlay,
    FaPodcast,
    FaShareAlt, FaStar,
    FaUsers,
    FaVolumeUp
} from "react-icons/fa";
import {IoIosFlash} from "react-icons/io";
import Image from "next/image";
import EmailListForm from "@/components/organisms/EmailListForm";

export default function MusicHomepage() {
    const [currentPlaying, setCurrentPlaying] = useState(null);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const featuredTracks = [
        {
            id: 1,
            title: "Midnight Dreams",
            artist: "Luna Eclipse",
            duration: "3:45",
            plays: "2.4M",
            image: "https://picsum.photos/300/300?random=1"
        },
        {
            id: 2,
            title: "Electric Pulse",
            artist: "Neon Waves",
            duration: "4:12",
            plays: "1.8M",
            image: "https://picsum.photos/300/300?random=2"
        },
        {
            id: 3,
            title: "Ocean Breeze",
            artist: "Coastal Vibes",
            duration: "3:28",
            plays: "3.1M",
            image: "https://picsum.photos/300/300?random=3"
        },
        {
            id: 4,
            title: "City Lights",
            artist: "Urban Soul",
            duration: "2:56",
            plays: "1.5M",
            image: "https://picsum.photos/300/300?random=4"
        }
    ];

    const topArtists = [
        {
            id: 1,
            name: "Aurora Sky",
            followers: "5.2M",
            image: "https://picsum.photos/200/200?random=5"
        },
        {
            id: 2,
            name: "Bass Drop",
            followers: "3.8M",
            image: "https://picsum.photos/200/200?random=6"
        },
        {
            id: 3,
            name: "Melody Storm",
            followers: "4.6M",
            image: "https://picsum.photos/200/200?random=7"
        },
        {
            id: 4,
            name: "Echo Chamber",
            followers: "2.9M",
            image: "https://picsum.photos/200/200?random=8"
        }
    ];

    const genres = [
        { name: "Pop", tracks: "2.3M", color: "from-pink-500 to-red-500", image: "https://picsum.photos/300/200?random=9" },
        { name: "Rock", tracks: "1.8M", color: "from-orange-500 to-yellow-500", image: "https://picsum.photos/300/200?random=10" },
        { name: "Hip Hop", tracks: "1.5M", color: "from-purple-500 to-indigo-500", image: "https://picsum.photos/300/200?random=11" },
        { name: "Electronic", tracks: "2.1M", color: "from-blue-500 to-cyan-500", image: "https://picsum.photos/300/200?random=12" },
        { name: "Jazz", tracks: "890K", color: "from-green-500 to-teal-500", image: "https://picsum.photos/300/200?random=13" },
        { name: "Classical", tracks: "650K", color: "from-indigo-500 to-purple-500", image: "https://picsum.photos/300/200?random=14" }
    ];

    const podcasts = [
        {
            id: 1,
            title: "Music & Mind",
            host: "Dr. Sarah Johnson",
            episodes: 45,
            duration: "30-45 min",
            image: "https://picsum.photos/250/250?random=15"
        },
        {
            id: 2,
            title: "Behind the Beat",
            host: "Mike Rodriguez",
            episodes: 67,
            duration: "20-30 min",
            image: "https://picsum.photos/250/250?random=16"
        },
        {
            id: 3,
            title: "Artist Stories",
            host: "Emma Chen",
            episodes: 32,
            duration: "45-60 min",
            image: "https://picsum.photos/250/250?random=17"
        }
    ];

    const liveEvents = [
        {
            id: 1,
            title: "Summer Music Festival",
            date: "July 15, 2025",
            location: "Central Park, NYC",
            price: "$89",
            image: "https://picsum.photos/400/250?random=18"
        },
        {
            id: 2,
            title: "Jazz Night Live",
            date: "June 22, 2025",
            location: "Blue Note, Chicago",
            price: "$45",
            image: "https://picsum.photos/400/250?random=19"
        },
        {
            id: 3,
            title: "Electronic Beats",
            date: "August 3, 2025",
            location: "Warehouse District, LA",
            price: "$65",
            image: "https://picsum.photos/400/250?random=20"
        }
    ];

    const playlists = [
        {
            id: 1,
            title: "Chill Vibes",
            tracks: 42,
            duration: "2h 15m",
            listeners: "1.2M",
            image: "https://picsum.photos/300/300?random=21"
        },
        {
            id: 2,
            title: "Workout Pump",
            tracks: 35,
            duration: "1h 45m",
            listeners: "890K",
            image: "https://picsum.photos/300/300?random=22"
        },
        {
            id: 3,
            title: "Road Trip Hits",
            tracks: 56,
            duration: "3h 20m",
            listeners: "2.1M",
            image: "https://picsum.photos/300/300?random=23"
        },
        {
            id: 4,
            title: "Late Night Lounge",
            tracks: 28,
            duration: "1h 55m",
            listeners: "650K",
            image: "https://picsum.photos/300/300?random=24"
        }
    ];

    const musicNews = [
        {
            id: 1,
            title: "New Album Release: Aurora Sky's 'Stellar Dreams'",
            summary: "The acclaimed artist drops her most ambitious project yet...",
            date: "2 hours ago",
            image: "https://picsum.photos/300/200?random=25"
        },
        {
            id: 2,
            title: "Grammy Nominations 2025 Announced",
            summary: "See which artists made the cut for this year's biggest awards...",
            date: "1 day ago",
            image: "https://picsum.photos/300/200?random=26"
        },
        {
            id: 3,
            title: "Streaming Numbers Hit All-Time High",
            summary: "Music streaming sees unprecedented growth in 2025...",
            date: "3 days ago",
            image: "https://picsum.photos/300/200?random=27"
        }
    ];

    // @ts-ignore
    const playTrack = (trackId) => {
        setCurrentPlaying(currentPlaying === trackId ? null : trackId);
    };

    const handleEmailSubmit = () => {
        if (email && email.includes('@')) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };
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
                duration: 0.5
            }
        }
    };

    const cardHover = {
        scale: 1.03,
        transition: { duration: 0.3 }
    };

    const imageHover = {
        scale: 1.1,
        transition: { duration: 0.5 }
    };
    return (
        <motion.div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
           

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                                Discover Your
                                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"> Sound</span>
                            </h1>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Explore millions of tracks, discover new artists, and create the perfect playlist for every moment of your life.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl"
                                >
                                    Start Listening
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300"
                                >
                                    Browse Music
                                </motion.button>
                            </div>
                            <div className="flex items-center space-x-8 text-white/60">
                                <div className="flex items-center space-x-2">
                                    <FaUsers className="h-5 w-5" />
                                    <span>50M+ Users</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaMusic className="h-5 w-5" />
                                    <span>100M+ Songs</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <FaStar
                                        className="h-5 w-5" />
                                    <span>4.9 Rating</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://picsum.photos/600/400?random=hero"
                                    alt="Music Hero"
                                    className="w-full h-full object-cover"
                                    width={584}
                                    height={384}
                                    fetchPriority="high"
                                    loading="eager"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="text-white text-2xl font-bold mb-2">Now Playing</h3>
                                    <p className="text-white/80">Discover trending music from around the world</p>
                                </div>
                            </div>
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.8, 1, 0.8]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"
                            ></motion.div>
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"
                            ></motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Music Section */}
            <section id="music" className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Featured <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Tracks</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Handpicked songs that are trending right now
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {featuredTracks.map((track) => (
                            <motion.div
                                key={track.id}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="relative mb-4 overflow-hidden rounded-xl">
                                    <motion.img
                                        src={track.image}
                                        alt={track.title}
                                        className="w-full aspect-square object-cover"
                                        whileHover={imageHover}
                                    />
                                    <button
                                        onClick={() => playTrack(track.id)}
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                    >
                                        {currentPlaying === track.id ? (
                                            <FaPause className="h-12 w-12 text-white" />
                                        ) : (
                                            <FaPlay className="h-12 w-12 text-white" />
                                        )}
                                    </button>
                                </div>

                                <h3 className="text-white font-semibold text-lg mb-1">{track.title}</h3>
                                <p className="text-white/60 mb-3">{track.artist}</p>

                                <div className="flex justify-between items-center text-sm text-white/50 mb-4">
                                    <span>{track.duration}</span>
                                    <span>{track.plays} plays</span>
                                </div>

                                <div className="flex space-x-2">
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                                    >
                                        Play
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <FaHeart className="h-4 w-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <FaShareAlt className="h-4 w-4" />
                                    </motion.button>
                    </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Top Artists Section */}
            <section id="artists" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Top <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Artists</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Follow your favorite artists and never miss their latest releases
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {topArtists.map((artist) => (
                            <motion.div
                                key={artist.id}
                                variants={itemVariants}
                                className="text-center group"
                            >
                                <div className="relative mb-6 mx-auto w-48 h-48">
                                    <motion.img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="w-full h-full object-cover rounded-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
                                        whileHover={imageHover}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <h3 className="text-white text-xl font-bold mb-2">{artist.name}</h3>
                                <p className="text-white/60 mb-4">{artist.followers} followers</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                                >
                                    Follow
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Music Genres Section */}
            <section id="genres" className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Explore <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Genres</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Discover music across all genres and find your perfect sound
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {genres.map((genre) => (
                            <motion.div
                                key={genre.name}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                            >
                                <div className="aspect-video relative">
                                    <motion.img
                                        src={genre.image}
                                        alt={genre.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        whileHover={imageHover}
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-r ${genre.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-white text-2xl font-bold mb-1">{genre.name}</h3>
                                    <p className="text-white/80">{genre.tracks} tracks</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Trending Playlists Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Trending <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Playlists</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Curated playlists for every mood and moment
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {playlists.map((playlist) => (
                            <motion.div
                                key={playlist.id}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="relative mb-4">
                                    <motion.img
                                        src={playlist.image}
                                        alt={playlist.title}
                                        className="w-full aspect-square object-cover rounded-xl"
                                        whileHover={imageHover}
                                    />
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                                        <FaHeadphones className="h-5 w-5 text-white" />
                                    </div>
                                </div>

                                <h3 className="text-white font-semibold text-lg mb-2">{playlist.title}</h3>
                                <div className="space-y-1 text-sm text-white/60 mb-4">
                                    <p>{playlist.tracks} tracks • {playlist.duration}</p>
                                    <p>{playlist.listeners} listeners</p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                                >
                                    Play Playlist
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Podcasts Section */}
            <section id="podcasts" className="py-20 bg-black/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Music <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Podcasts</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Deep dive into the world of music with our exclusive podcast series
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {podcasts.map((podcast) => (
                            <motion.div
                                key={podcast.id}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center space-x-4 mb-6">
                                    <motion.img
                                        src={podcast.image}
                                        alt={podcast.title}
                                        className="w-20 h-20 object-cover rounded-xl"
                                        whileHover={{ rotate: 2 }}
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold text-xl mb-1">{podcast.title}</h3>
                                        <p className="text-white/60">by {podcast.host}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center space-x-2 text-white/60">
                                        <FaPodcast className="h-4 w-4" />
                                        <span>{podcast.episodes} episodes</span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-white/60">
                                        <FaClock className="h-4 w-4" />
                                        <span>{podcast.duration}</span>
                                    </div>
                                </div>

                                <div className="flex space-x-3">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                                    >
                                        Listen Now
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        <FaHeart className="h-5 w-5" />
                                    </motion.button>
                    </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Live Events Section */}
            <section id="events" className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Live <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Events</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Experience music like never before at these upcoming live events
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {liveEvents.map((event) => (
                            <motion.div
                                key={event.id}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <motion.img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        whileHover={imageHover}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {event.price}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-white font-bold text-xl mb-3">{event.title}</h3>
                                    <div className="space-y-2 mb-6">
                                        <div className="flex items-center space-x-2 text-white/60">
                                            <FaCalendarAlt className="h-4 w-4" />
                                            <span>{event.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-white/60">
                                            <FaVolumeUp className="h-4 w-4" />
                                            <span>{event.location}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-semibold"
                                    >
                                        Get Tickets
                                    </motion.button>
                            </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Music News Section */}
            <section className="py-20 bg-black/20">
                <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            Music <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">News</span>
                        </h2>
                        <p className="text-xl text-white/70 max-w-2xl mx-auto">
                            Stay updated with the latest happenings in the music world
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {musicNews.map((news) => (
                            <motion.article
                                key={news.id}
                                variants={itemVariants}
                                whileHover={cardHover}
                                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="relative h-48">
                                    <motion.img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        whileHover={imageHover}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center space-x-2 text-pink-400 text-sm mb-3">
                                        <FaChartLine className="h-4 w-4" />
                                        <span>{news.date}</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-3 leading-tight">{news.title}</h3>
                                    <p className="text-white/70 text-sm mb-4 line-clamp-2">{news.summary}</p>
                                    <button className="text-pink-400 hover:text-pink-300 font-semibold text-sm transition-colors">
                                        Read More →
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FaMusic
                                    className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">100M+</h3>
                            <p className="text-white/60">Songs Available</p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FaUsers className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">50M+</h3>
                            <p className="text-white/60">Active Users</p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <FaAward className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">500K+</h3>
                            <p className="text-white/60">Artists</p>
                        </div>

                        <div className="text-center group">
                            <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <IoIosFlash  className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
                            <p className="text-white/60">Streaming</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section id="newsletter" className="py-20 bg-gradient-to-r from-pink-500/20 to-purple-600/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
                        <FaMailBulk className="h-16 w-16 text-pink-400 mx-auto mb-8" />
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                            Stay in the <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Loop</span>
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Get the latest music releases, artist news, and exclusive content delivered straight to your inbox.
                        </p>
                        <div className="flex justify-center">
                            <EmailListForm btnColor="btn-primary"/>
                        </div>


                        <p className="text-white/50 text-sm mt-6">
                            No spam, unsubscribe anytime. Your privacy is important to us.
                        </p>
                    </div>
                </div>
            </section>

 
        </motion.div>
    );
}