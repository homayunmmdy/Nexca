"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import PostCard from "./PostCard";
import PostsSecSkeleton from "./PostsSecSkeleton";
import Titr from "../Titr";
import { POSTS_QUERY_KEY } from "@/config/Constants";

const PostsSec = () => {
  const { data, loading } = useGetSection(POSTS_QUERY_KEY,POST_API_URL, -6, 2);

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
