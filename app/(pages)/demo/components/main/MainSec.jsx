"use client"
import useGetSection from "@/app/hooks/useGetSection";
import MainItem from "./MainItem";
import { POST_API_URL } from "@/app/config/apiConstants";

const MainSec = () => {
  const { data } = useGetSection(POST_API_URL, -2, 1);

  return (
    <div className="grid grid-cols-12 gap-6">
      {data?.map((item) => (
        <MainItem post={item} key={item._id}  />
      ))}
    </div>
  );
};

export default MainSec;
