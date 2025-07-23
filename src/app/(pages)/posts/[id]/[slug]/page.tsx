"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import { Container } from "@/components/atoms";
import { MainHead } from "@/components/molecules";
import useSinglePost from "@/hooks/useSinglePost";
import { SectionController } from "@/util/controller/sectionsController";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NotFound from "../../../[...not_found]/not-found";
import NewsBody from "../components/NewsBody";
import PostMeta from "../components/PostMeta";
import PostSeclton from "../PostSkelton";
import { FiBookmark } from "react-icons/fi";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const Post: React.FC = () => {
  const router = useRouter();
  const { id, slug } = useParams(); // Get `id` and `slug` from the URL

  const { data: post, isLoading, isError } = useSinglePost(id);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (post && post._id) {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarked(bookmarks.includes(post._id));
    }
  }, [post]);

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

  const handleBookmark = () => {
    if (!post || !post._id) return;
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    if (bookmarks.includes(post._id)) {
      bookmarks = bookmarks.filter((id: string) => id !== post._id);
      setBookmarked(false);
    } else {
      bookmarks.push(post._id);
      setBookmarked(true);
    }
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  };

  return (
    <>
      <PostMeta post={post} slug={slug} />
      <div className="flex flex-col">
        <MainHead
          title={post.title}
          description={post.description}
          createdAt={post.createdAt}
        />
        <div className="flex items-center gap-2 px-4 py-2">
          <button
            aria-label={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
            onClick={handleBookmark}
            className={`text-xl ${bookmarked ? "text-yellow-500" : "text-gray-400"}`}
          >
            <FiBookmark />
          </button>
          <span>{bookmarked ? "Bookmarked" : "Bookmark this post"}</span>
        </div>
        <div className="py-8">
          <Container className=" flex flex-col gap-8  md:flex-row">
            <div className="w-full md:w-3/4">
              <NewsBody post={post} />
            </div>
            <div className="w-full py-3 md:w-1/4">
              <SectionController sectionId={8}>
                <RecentPosts />
              </SectionController>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Post;
