"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import VerticalSkeleton from "./VerticalSkeleton";
import VerticalPost from "./VerticalPost";
import Titr from "../Titr";

const VerticalPostsSec = () => {
  const { data, loading } = useGetSection("vertical_posts",POST_API_URL, -4,4);

  if (loading) {
    return <VerticalSkeleton />;
  }

  return (
    <>
      <div className="mx-auto py-6">
      <Titr title="Vertical Posts" item="text-left" />
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
