"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import React, { useEffect } from "react";
import NewsBody from "../components/NewsBody";
import PostMeta from "../components/PostMeta";
import PostSeclton from "../PostSkelton";
import {Container} from "@/components/atoms";
import {MainHead} from "@/components/molecules";
import {getSinglePost} from "@/util/postsUtil";
import {redirect} from "next/navigation";
import NotFound from "../../../[...not_found]/not-found";

const slugify = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

export default async function Post({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { id, slug } = params;
  const post = await getSinglePost(id);

  // Handle loading state (optional - consider streaming with suspense)
  if (!post) {
    return <PostSeclton />;
  }

  // Verify slug and redirect if needed
      const correctSlug = slugify(post.title);
      if (slug !== correctSlug) {
    redirect(`/posts/${post._id}/${correctSlug}`);
    }

  // Handle not found
  if (!post || !post._id) {
    return NotFound();
  }

  return (
    <>
      <PostMeta post={post} slug={slug}/>
      <div className="flex flex-col">
        <MainHead title={post.title} description={post.description} createdAt={post.createdAt} />
        <div className="py-8">
          <Container className=" flex flex-col gap-8  md:flex-row">
            <div className="w-full md:w-3/4">
              <NewsBody post={post} />
            </div>
            <div className="w-full py-3 md:w-1/4">
              <RecentPosts />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}