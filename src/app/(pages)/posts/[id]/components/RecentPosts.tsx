"use client";
import { LATEST_POSTS_KEY } from "@/etc/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { PostsCashType } from "@/types/CashTypes";
import React, { useState } from "react";
import RecentPost from "./RecentPost";
import RecentPostSkeleton from "./RecentPostSkeleton";

const RecentPosts: React.FC = () => {
  const [recentSize] = useState(-3);
  const { posts, loading } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);

  if (loading) {
    return <RecentPostSkeleton />;
  }
  return (
    <>
      <div className="w-full rounded-[10px] border border-indigo-100 p-4 sm:p-7">
        <h2 className="text-custom-4 text-dark mb-3 text-center text-xl font-semibold">
          Recent Posts
        </h2>
        {posts && (
          <div className="grid grid-cols-1 items-start gap-x-3 gap-y-5">
            {posts?.map((Post: PostsCashType) => (
              <RecentPost post={Post} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RecentPosts;
