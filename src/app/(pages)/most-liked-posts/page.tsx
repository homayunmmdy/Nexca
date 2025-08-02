"use client";
import React, { useState } from 'react';
import { Container, SectionsTitle, LikeButton, Button } from '@/components/atoms';
import { getMostLikedPosts, getTotalLikesCount, getAverageLikes } from '@/util/PostsUtil';
import { postLinkGenerator } from '@/util/ServerUtil';
import Link from 'next/link';
import Image from 'next/image';
import { FaFire, FaHeart, FaTrophy, FaChartLine } from 'react-icons/fa';

const MostLikedPostsPage: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const allMostLikedPosts = getMostLikedPosts();
  const displayedPosts = showAll ? allMostLikedPosts : allMostLikedPosts.slice(0, 10);
  
  const totalLikes = getTotalLikesCount();
  const averageLikes = getAverageLikes();

  return (
    <Container>
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <SectionsTitle>
            <FaTrophy className="inline mr-2 text-yellow-500" />
            Most Liked Posts
          </SectionsTitle>
          <p className="text-gray-600 mt-2">
            Discover the most popular posts loved by our community
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-figure text-primary">
              <FaHeart size={24} />
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">{totalLikes}</div>
            <div className="stat-desc">Across all posts</div>
          </div>
          
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-figure text-secondary">
              <FaChartLine size={24} />
            </div>
            <div className="stat-title">Average Likes</div>
            <div className="stat-value text-secondary">{averageLikes}</div>
            <div className="stat-desc">Per post</div>
          </div>
          
          <div className="stat bg-base-100 rounded-lg shadow">
            <div className="stat-figure text-accent">
              <FaFire size={24} />
            </div>
            <div className="stat-title">Popular Posts</div>
            <div className="stat-value text-accent">{allMostLikedPosts.length}</div>
            <div className="stat-desc">With likes</div>
          </div>
        </div>

        {/* Posts Grid */}
        {allMostLikedPosts.length === 0 ? (
          <div className="text-center py-16">
            <FaHeart className="mx-auto text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No Liked Posts Yet</h2>
            <p className="text-gray-500 mb-6">
              Be the first to like some posts and they'll appear here!
            </p>
            <Link href="/">
              <Button color="btn-primary">Explore Posts</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid gap-6">
              {displayedPosts.map((post, index) => {
                const postLink = postLinkGenerator(post._id, post.title);
                const isTop3 = index < 3;
                
                return (
                  <div 
                    key={post._id} 
                    className={`
                      card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300
                      ${isTop3 ? 'border-l-4 border-yellow-400' : ''}
                    `}
                  >
                    <div className="card-body">
                      <div className="flex items-start gap-6">
                        {/* Ranking */}
                        <div className="flex-shrink-0">
                          <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                            ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white' : 
                              index === 1 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-white' : 
                              index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600 text-white' : 
                              'bg-gray-200 text-gray-600'}
                          `}>
                            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <Link href={postLink}>
                            <h3 className="card-title text-xl hover:text-primary transition-colors cursor-pointer mb-2">
                              {post.title.slice(0, 120)}
                              {post.title.length > 120 && '...'}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 mb-4">
                            {post.description.slice(0, 250)}
                            {post.description.length > 250 && '...'}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <LikeButton 
                                postId={post._id}
                                postTitle={post.title}
                                initialLikes={post.likes || 0}
                                size="md"
                              />
                              {post.author && (
                                <span className="text-sm text-gray-500">
                                  by <span className="font-medium">{post.author}</span>
                                </span>
                              )}
                              <span className="text-sm text-gray-500">
                                {new Date(post.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <Link href={postLink}>
                              <Button color="btn-primary">Read Post</Button>
                            </Link>
                          </div>
                        </div>
                        
                        {/* Image */}
                        {post.imgurl && (
                          <div className="flex-shrink-0">
                            <Image
                              src={post.imgurl}
                              alt={post.title}
                              width={150}
                              height={100}
                              className="rounded-lg object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Load More Button */}
            {!showAll && allMostLikedPosts.length > 10 && (
              <div className="text-center mt-8">
                <Button 
                  color="btn-outline btn-primary"
                  onClick={() => setShowAll(true)}
                >
                  Show All {allMostLikedPosts.length} Posts
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </Container>
  );
};

export default MostLikedPostsPage;