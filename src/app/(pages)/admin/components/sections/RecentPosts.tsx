"use client";
import { useState } from "react";
import RecentPost from "./RecentPost";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";

const RecentPosts = () => {
  const [recentSize] = useState(-3);
  const { posts } = useGetLatestPosts(recentSize);
  return (
    <>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">
        {posts?.map((Post, _index) => (
          <>
            {/* @ts-ignore */}
            <RecentPost id={_index} key={_index} post={Post} />
          </>
        ))}
      </ul>
    </>
  );
};

export default RecentPosts;
