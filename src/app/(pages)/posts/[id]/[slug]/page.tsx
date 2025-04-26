"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import useSinglePost from "@/hooks/useSinglePost";
import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import NotFound from "../../../[...not_found]/not-found";
import NewsBody from "../components/NewsBody";
import NewsHead from "../components/NewsHead";
import PostMeta from "../components/PostMeta";
import PostSeclton from "../PostSkelton";
import {Container} from "@/components/atoms";
import {MainHead} from "@/components/molecules";

const slugify = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

const Post: React.FC = () => {
  const router = useRouter();
  const { id, slug } = useParams(); // Get `id` and `slug` from the URL

  const { data: post, isLoading, isError } = useSinglePost(id);

  useEffect(() => {
    if (post && post.title) {
      const correctSlug = slugify(post.title);
      if (slug !== correctSlug) {
        router.replace(`/posts/${post._id}/${correctSlug}`);
      }
    }
  }, [post, slug, router]);

  if (isLoading) {
    return <PostSeclton />;
  }

  if (isError || !post || !post._id) {
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
};

export default Post;
