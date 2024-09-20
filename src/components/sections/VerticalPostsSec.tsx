"use client";
import Titr from "@/components/Titr";
import { POST_API_URL } from "@/config/apiConstants";
import { VERTICAL_POSTS_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import { VerticalSkeleton } from "../skelton";
import VerticalPost from "./VerticalPost";

const VerticalPostsSec = () => {
  const { data, loading } = useGetSection(
    VERTICAL_POSTS_QUERY_KEY,
    POST_API_URL,
    -4,
    4
  );

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
