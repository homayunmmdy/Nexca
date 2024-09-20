"use client";
import Titr from "@/components/Titr";
import { POST_API_URL } from "@/config/apiConstants";
import { POSTS_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import { PostsSecSkeleton } from "../skelton";
import PostCard from "./PostCard";

const PostsSec = () => {
  const { data, loading } = useGetSection(POSTS_QUERY_KEY, POST_API_URL, -6, 2);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
      <div className="mx-auto pb-6">
        <Titr title="Posts" item="text-left" />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {data?.map((post: PostsCashType) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsSec;
