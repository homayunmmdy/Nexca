'use client'
import {motion} from 'framer-motion';
import {FiArrowRight} from 'react-icons/fi';

const Sport = () => {
    // Animation variants
    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
        },
    };

    const hoverVariants = {
        hover: {
            scale: 1.03,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            },
        }
    };

    return (
        <section className="py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Featured Post (Left) */}
                <motion.div
                    className="lg:col-span-2 relative group overflow-hidden rounded-xl shadow-2xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    whileHover="hover"
                >
                    <motion.div variants={hoverVariants} className="h-full">
                        <div className="relative h-full min-h-[500px]">
                            <img
                                src="/Image/logo.jpg"
                                alt="Featured post"
                                className="w-full h-full object-cover absolute inset-0"
                                loading="eager"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/30 to-transparent"/>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <motion.div variants={itemVariants}>
                    <span
                        className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                      Featured
                    </span>
                                </motion.div>
                                <motion.h2
                                    variants={itemVariants}
                                    className="text-3xl md:text-4xl font-bold mb-4"
                                >
                                    The Future of Athletic Performance Training
                                </motion.h2>
                                <motion.p variants={itemVariants} className="text-lg mb-6 max-w-lg">
                                    Discover cutting-edge techniques being used by elite athletes worldwide to push
                                    human limits.
                                </motion.p>
                                <motion.div variants={itemVariants}>
                                    <button className="flex items-center text-white font-medium group">
                                        Read Article
                                        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform"/>
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Secondary Posts (Right) */}
                <div className="space-y-6">
                    {/* Post 1 */}
                    <motion.div
                        className="relative group overflow-hidden rounded-xl shadow-lg h-[242px]"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        whileHover="hover"
                    >
                        <motion.div variants={hoverVariants} className="h-full">
                            <div className="relative h-full">
                                <img
                                    src="/Image/logo.jpg"
                                    alt="Secondary post 1"
                                    className="w-full h-full object-cover absolute inset-0"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/30 to-transparent"/>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <motion.h3
                                        variants={itemVariants}
                                        className="text-xl font-bold mb-2"
                                    >
                                        Nutrition Strategies for Peak Performance
                                    </motion.h3>
                                    <motion.div variants={itemVariants}>
                                        <button className="flex items-center text-white text-sm font-medium group">
                                            Read More
                                            <FiArrowRight
                                                className="ml-1 group-hover:translate-x-1 transition-transform"/>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Post 2 */}
                    <motion.div
                        className="relative group overflow-hidden rounded-xl shadow-lg h-[242px]"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        whileHover="hover"
                    >
                        <motion.div variants={hoverVariants} className="h-full">
                            <div className="relative h-full">
                                <img
                                    src="/Image/logo.jpg"
                                    alt="Secondary post 2"
                                    className="w-full h-full object-cover absolute inset-0"
                                    loading="lazy"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/30 to-transparent"/>
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <motion.h3
                                        variants={itemVariants}
                                        className="text-xl font-bold mb-2"
                                    >
                                        Recovery Protocols for Elite Athletes
                                    </motion.h3>
                                    <motion.div variants={itemVariants}>
                                        <button className="flex items-center text-white text-sm font-medium group">
                                            Read More
                                            <FiArrowRight
                                                className="ml-1 group-hover:translate-x-1 transition-transform"/>
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Sport;