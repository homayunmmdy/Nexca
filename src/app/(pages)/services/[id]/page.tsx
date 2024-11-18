"use client";
import { PostsSkeleton } from "@/components/skelton";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { getParameterId } from "@/util/Util";
import React from "react";
import ServicesNav from "../../demo/components/ServicesNav";
import ServicesImg from "./components/ServicesImg";
import PostCard from "@/components/sections/PostCard";

const ServicesPage: React.FC = () => {
  const id = getParameterId(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

 
  
  const filteredData = posts?.filter(
    (item: PostsCashType) => item.services == id
  );

  const sortedByTime = filteredData?.sort(
    (
      a: { createdAt: string | number | Date },
      b: { createdAt: string | number | Date }
    ) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  );
  if (loading) {
    return (
      <>
        <ServicesNav />
        <div className="mx-auto p-10">
          <PostsSkeleton />
        </div>
      </>
    );
  }
  return (
    <>
      <ServicesNav />
      <div className="mx-auto p-4 md:p-10">
        <ServicesImg />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
          {sortedByTime?.map((item: PostsCashType) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
