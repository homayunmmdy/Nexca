"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import useSinglePost from "@/hooks/useSinglePost";
import React from "react";
import NewsBody from "./components/NewsBody";
import NewsHead from "./components/NewsHead";
import PostSeclton from "./PostSkelton";

const Post: React.FC = () => {
  //@ts-ignore
  const post = useSinglePost();
  //@ts-ignore

  if (!post) {
    return <PostSeclton />;
  }

  return (
    <>
      <div className="flex flex-col">
        {/* @ts-ignore */}
        <NewsHead title={post.title} createdAt={post.createdAt} />
        <div className="py-8">
          <div className="mx-auto flex w-[94%] flex-col gap-8 md:w-[92%] md:flex-row">
            <div className="w-full md:w-3/4">
              <NewsBody post={post} />
            </div>
            <div className="w-full py-3 md:w-1/4">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
