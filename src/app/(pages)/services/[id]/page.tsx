"use client";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import PostCard from "@/etc/components/sections/PostCard";
import { PostsSkeleton } from "@/etc/components/skelton";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { getParameterId } from "@/util/Util";
import React from "react";
import ServicesNav from "../../../(etc)/demo/components/ServicesNav";
import ServicesImg from "./components/ServicesImg";

const ServicesPage: React.FC = () => {
  const id = getParameterId(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  const filteredData = posts?.filter(
    (item: PostsCashType) => item.services == id
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
          {filteredData?.map((item: PostsCashType) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
