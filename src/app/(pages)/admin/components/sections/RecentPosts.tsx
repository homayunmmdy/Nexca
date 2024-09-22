"use client";
import { useState } from "react";
import RecentPost from "./RecentPost";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { LATEST_POSTS_KEY } from "@/config/Constants";

const RecentPosts = () => {
  const [recentSize] = useState(-3);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
        {/* @ts-ignore */}
        {posts?.map((post, _index) => (
          <>
            {/* @ts-ignore */}
            <RecentPost id={_index} key={_index} post={post} />
          </>
        ))}
      </ul>
    </>
  );
};

export default RecentPosts;
