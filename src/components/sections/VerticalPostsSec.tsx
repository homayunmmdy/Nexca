"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import PostCard from "./PostCard";
import PostsSkeleton from "./PostsSkeleton";
import VerticalSkeleton from "./VerticalSkeleton";
import VerticalPost from "./VerticalPost";

const VerticalPostsSec = () => {
  const { data, loading } = useGetSection(POST_API_URL, -4,4);

  if (loading) {
    return <VerticalSkeleton />;
  }

  return (
    <>
      <div className="mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {data?.map((post: PostsCashType) => (
            <VerticalPost key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default VerticalPostsSec;
