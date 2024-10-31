"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { useState } from "react";
import RecentPost from "./RecentPost";
import React from 'react'

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-4);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 gap-x-6 items-start py-8">
        {/* @ts-ignore */}
        {posts?.map((post, _index) => (
          <>
            {/* @ts-ignore */}
            <RecentPost id={_index} key={_index} post={post} />
          </>
        ))}
      </div>
    </>
  );
};

export default RecentPosts;
