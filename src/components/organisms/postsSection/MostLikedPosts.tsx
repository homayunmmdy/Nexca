"use client";
import React from 'react';
import { SectionsTitle, LikeButton, Button } from '@/components/atoms';
import { getMostLikedPosts } from '@/util/PostsUtil';
import { postLinkGenerator } from '@/util/ServerUtil';
import Image from 'next/image';
import Link from 'next/link';
import { FaFire, FaHeart } from 'react-icons/fa';

interface MostLikedPostsProps {
  limit?: number;
  showTitle?: boolean;
  className?: string;
}

const MostLikedPosts: React.FC<MostLikedPostsProps> = ({ 
  limit = 5, 
  showTitle = true,
  className = "" 
}) => {
  const mostLikedPosts = getMostLikedPosts(limit);

  if (mostLikedPosts.length === 0) {
    return null;
  }

  return (
    <section className={`${className}`}>
      {showTitle && (
        <SectionsTitle>
          <FaFire className="inline mr-2 text-orange-500" />
          Most Liked Posts
        </SectionsTitle>
      )}
      
      <div className="grid gap-4">
        {mostLikedPosts.map((post, index) => {
          const postLink = postLinkGenerator(post._id, post.title);
          const isTop3 = index < 3;
          
          return (
            <div 
              key={post._id} 
              className={`
                card bg-base-100 shadow-md hover:shadow-lg transition-shadow
                ${isTop3 ? 'border-l-4 border-orange-400' : ''}
              `}
            >
              <div className="card-body p-4">
                <div className="flex items-start gap-4">
                  {/* Ranking Badge */}
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                    ${index === 0 ? 'bg-yellow-500 text-white' : 
                      index === 1 ? 'bg-gray-400 text-white' : 
                      index === 2 ? 'bg-orange-600 text-white' : 
                      'bg-gray-200 text-gray-600'}
                  `}>
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <Link href={postLink}>
                      <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer line-clamp-2">
                        {post.title.slice(0, 80)}
                        {post.title.length > 80 && '...'}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {post.description.slice(0, 120)}
                      {post.description.length > 120 && '...'}
                    </p>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-4">
                        <LikeButton 
                          postId={post._id}
                          postTitle={post.title}
                          initialLikes={post.likes || 0}
                          size="sm"
                        />
                        {post.author && (
                          <span className="text-xs text-gray-500">
                            by {post.author}
                          </span>
                        )}
                      </div>
                      
                      <Link href={postLink}>
                        <Button color="btn-primary btn-xs">
                          Read
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image */}
                  {post.imgurl && (
                    <div className="flex-shrink-0">
                      <Image
                        src={post.imgurl}
                        alt={post.title}
                        width={80}
                        height={60}
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
      
      {/* View All Link */}
      <div className="text-center mt-6">
        <Link href="/most-liked-posts">
          <Button color="btn-outline btn-primary">
            <FaHeart className="mr-2" size={14} />
            View All Most Liked Posts
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MostLikedPosts;