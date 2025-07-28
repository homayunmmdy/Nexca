"use client";
import React, { useState, useEffect } from 'react';
import { Container, SectionsTitle, Button } from '@/components/atoms';
import { getLikedPosts, clearAllLikedPosts, LikedPost } from '@/util/LikesUtil';
import { PostsCashType } from '@/types/CashTypes';
import { postLinkGenerator } from '@/util/ServerUtil';
import PostsCash from '@/cash/PostsCash';
import Link from 'next/link';
import Image from 'next/image';
import { FaHeart, FaTrash } from 'react-icons/fa';

const LikedPostsPage: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<LikedPost[]>([]);
  const [postsData, setPostsData] = useState<PostsCashType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLikedPosts = () => {
      const liked = getLikedPosts();
      setLikedPosts(liked);
      
      // Get full post data for liked posts
      const fullPostsData = liked.map(likedPost => {
        return PostsCash.find(post => post._id === likedPost.id);
      }).filter(Boolean) as PostsCashType[];
      
      setPostsData(fullPostsData);
      setLoading(false);
    };

    loadLikedPosts();
  }, []);

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to clear all liked posts?')) {
      clearAllLikedPosts();
      setLikedPosts([]);
      setPostsData([]);
    }
  };

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center min-h-64">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-4xl mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <SectionsTitle>
            <FaHeart className="inline mr-2 text-red-500" />
            Liked Posts ({likedPosts.length})
          </SectionsTitle>
          {likedPosts.length > 0 && (
            <Button 
              color="btn-error btn-outline"
              onClick={handleClearAll}
              className="flex items-center gap-2"
            >
              <FaTrash size={14} />
              Clear All
            </Button>
          )}
        </div>

        {likedPosts.length === 0 ? (
          <div className="text-center py-16">
            <FaHeart className="mx-auto text-6xl text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No Liked Posts Yet</h2>
            <p className="text-gray-500 mb-6">
              Start exploring posts and like the ones you enjoy!
            </p>
            <Link href="/">
              <Button color="btn-primary">Explore Posts</Button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6">
            {postsData.map((post) => {
              const postLink = postLinkGenerator(post._id, post.title);
              const likedPost = likedPosts.find(lp => lp.id === post._id);
              
              return (
                <div key={post._id} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <Link href={postLink}>
                          <h3 className="card-title hover:text-primary transition-colors cursor-pointer">
                            {post.title.slice(0, 100)}
                            {post.title.length > 100 && '...'}
                          </h3>
                        </Link>
                        <p className="text-gray-600 mt-2">
                          {post.description.slice(0, 200)}
                          {post.description.length > 200 && '...'}
                        </p>
                      </div>
                      {post.imgurl && (
                        <div className="ml-4 flex-shrink-0">
                          <Image
                            src={post.imgurl}
                            alt={post.title}
                            width={120}
                            height={80}
                            className="rounded-lg object-cover"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        <span>Liked on {new Date(likedPost?.likedAt || '').toLocaleDateString()}</span>
                        {post.likes && (
                          <span className="ml-4 flex items-center gap-1">
                            <FaHeart className="text-red-500" size={12} />
                            {post.likes} likes
                          </span>
                        )}
                      </div>
                      
                      <Link href={postLink}>
                        <Button color="btn-primary btn-sm">Read Post</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Container>
  );
};

export default LikedPostsPage;