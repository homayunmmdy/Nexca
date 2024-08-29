"use client"
import useGetSection from "@/hooks/useGetSection";
import MainItem from "./MainItem";
import { POST_API_URL } from "@/config/apiConstants";
import MainSkeleton from "./MainSkeleton";

const MainSec = () => {
  const { data , loading } = useGetSection(POST_API_URL, -2, 1);

  if (loading) {
    return <MainSkeleton />
}

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* @ts-ignore */}
      {data?.map((item) => (
        <MainItem post={item} key={item._id}  />
      ))}
    </div>
  );
};

export default MainSec;
