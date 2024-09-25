"use client"
import React from 'react'
import { PostsSkeleton } from '../skelton';
import useGetSection from '@/hooks/useGetSection';
import { MORE_POSTS_QUERY_KEY } from '@/config/Constants';
import { POST_API_URL } from '@/config/apiConstants';
import Titr from '../Titr';
import PostCard from './PostCard';
import { PostsCashType } from '@/types/entities';

const MorePosts = () => {
    const { data, loading } = useGetSection(MORE_POSTS_QUERY_KEY, POST_API_URL, -3, 5);

    if (loading) {
      return <PostsSkeleton />;
    }
  
    return (
      <>
        <div className="mx-auto pb-6">
          <Titr title="More Posts" item="text-left" />
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
            {data?.map((post: PostsCashType) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </>
    );
}

export default MorePosts