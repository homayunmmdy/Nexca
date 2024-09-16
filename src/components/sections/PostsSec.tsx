"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import PostCard from "./PostCard";
import PostsSecSkeleton from "./PostsSecSkeleton";

const PostsSec = () => {
  const { data, loading } = useGetSection("posts",POST_API_URL, -6, 2);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
      <div className="mx-auto py-6">
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
