"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import MainItem from "./MainItem";
import MainSkeleton from "./MainSkeleton";

const MainSec = () => {
  const { data, loading } = useGetSection("main_posts", POST_API_URL, -2, 1);

  if (loading) {
    return <MainSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-12 md:gap-9">
        {data?.map((item: PostsCashType) => (
          <MainItem post={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default MainSec;
