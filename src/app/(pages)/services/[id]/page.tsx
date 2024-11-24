"use client";
import { PostsSkeleton } from "@/components/skelton";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { getParameterId } from "@/util/Util";
import React, { useEffect } from "react";
import ServicesNav from "../../demo/components/ServicesNav";
import ServicesImg from "./components/ServicesImg";
import PostCard from "@/components/sections/PostCard";
import { useRouter } from 'next/navigation';

const ServicesPage: React.FC = () => {
  const router = useRouter();
  const id = getParameterId(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  useEffect(() => {
    // Check if posts are loaded and if the service ID exists
    if (!loading && posts) {
      const serviceExists = posts.some((item: PostsCashType) => item.services === id);
      
      if (!serviceExists) {
        // Redirect to 404 page if service doesn't exist
        router.replace('/404', undefined, { shallow: true });
      }
    }
  }, [posts, loading, id, router]);

  const filteredData = posts?.filter(
    (item: PostsCashType) => item.services === id
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

  // Return null if no matching service (while redirect is happening)
  if (!loading && (!filteredData || filteredData.length === 0)) {
    return null;
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
