'use client';
import { HERO_NEWS } from '@/config/Constants';
import useGetSection from '@/hooks/useGetSection';
import { PostsCashType } from '@/types/CashTypes';
import { SectionController } from '@/util/controller/sectionsController';
import { postLinkGenerator } from '@/util/ServerUtil';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MusicHero = () => {
   const { data, loading } = useGetSection(HERO_NEWS, -1, 22);
   const SkeletonLoader = () => (
      <section className="relative py-20 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               {/* Text content skeleton */}
               <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8"
               >
                  {/* Title skeleton */}
                  <div className="h-16 bg-gray-300/20 rounded-2xl animate-pulse lg:h-24 w-full"></div>
                  <div className="h-12 bg-gray-300/20 rounded-2xl animate-pulse lg:h-16 w-4/5"></div>

                  {/* Description skeleton */}
                  <div className="space-y-4">
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-full"></div>
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-5/6"></div>
                     <div className="h-4 bg-gray-300/20 rounded-lg animate-pulse w-4/6"></div>
                  </div>
               </motion.div>

               {/* Image content skeleton */}
               <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
               >
                  {/* Main image skeleton */}
                  <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                     <div className="w-full h-full bg-gray-300/20 animate-pulse"></div>
                  </div>

                  {/* Animated circles skeleton */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-300/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-300/20 rounded-full animate-pulse"></div>
               </motion.div>
            </div>
         </div>
      </section>
   );

   if (loading || !data) {
      return <SkeletonLoader />;
   }

   return (
      <SectionController sectionId={22}>
         <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {data?.map((music: PostsCashType) => {
                  const postLink = postLinkGenerator(music._id, music.title);
                  return (
                     <div
                        className="grid lg:grid-cols-2 gap-12 items-center"
                        key={music._id}
                     >
                        <motion.div
                           initial={{ x: -50, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.8 }}
                           className="space-y-8"
                        >
                           <Link
                              href={postLink}
                              title={music.title}
                              className="text-5xl hover:underline lg:text-7xl font-bold text-white line-clamp-2 leading-tight"
                           >
                              {music.title}
                           </Link>
                           <p className="text-xl line-clamp-3 text-white/80 leading-relaxed">
                              {music.description}
                           </p>
                        </motion.div>
                        <motion.div
                           initial={{ x: 50, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.8, delay: 0.2 }}
                           className="relative"
                        >
                           <Link
                              href={postLink}
                              title={music.title}
                              className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
                           >
                              <Image
                                 src={music.imgurl || '/static/Image/logo.jpg'}
                                 alt={music.title}
                                 className="w-full h-full aspect-video object-cover"
                                 width={584}
                                 height={384}
                                 fetchPriority="high"
                                 loading="eager"
                                 priority
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                           </Link>
                           <motion.div
                              animate={{
                                 scale: [1, 1.2, 1],
                                 opacity: [0.8, 1, 0.8],
                              }}
                              transition={{
                                 repeat: Infinity,
                                 duration: 3,
                                 ease: 'easeInOut',
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
                                 ease: 'easeInOut',
                              }}
                              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"
                           ></motion.div>
                        </motion.div>
                     </div>
                  );
               })}
            </div>
         </section>
      </SectionController>
   );
};

export default MusicHero;
