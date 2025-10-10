'use client';
import { ErrorText } from '@/components/atoms';
import useFetch from '@/hooks/useFetch';
import { PostsCashType } from '@/types/CashTypes';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiTrendingUp } from 'react-icons/fi';
import LatestPosts from '../(components)/LatestPosts';
import TabContent from '../(components)/TabContent';
import TextHero from '../(components)/TextHero';
import VerticalCard from '../(components)/VerticalCard';
import { AI_HUB_categories } from '../data/aiHub';
import AIHubMainSec from './components/AIHubMainSec';
import EmailBox from '../(components)/EmailBox';

const AINewsHub = () => {
   const [activeCategory, setActiveCategory] = useState('all');
   const data = useFetch('all templates 2', '/api/posts/templates/2');
   const [posts, setPosts] = useState(data?.data || []);

   useEffect(() => {
      setPosts(data?.data || []);
   }, [data]);

   // Filter news based on active category
   const filteredNews = posts.filter((item: PostsCashType) => {
      if (activeCategory === 'all') return true;
      return item.section === activeCategory;
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
            ease: 'easeOut',
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
         <AIHubMainSec />

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

                     <div className="space-y-6">
                        {filteredNews.map((item: PostsCashType) => (
                           <VerticalCard data={item} key={item._id} />
                        ))}
                     </div>
                     {filteredNews.length == 0 && (
                        <motion.div
                           variants={itemVariants}
                           className="bg-base-200 rounded-xl p-8 text-center"
                        >
                           <ErrorText>No post found</ErrorText>
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
