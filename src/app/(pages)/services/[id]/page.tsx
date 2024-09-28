"use client";
import PostCard from "@/components/sections/PostCard";
import { PostsSkeleton } from "@/components/skelton";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { usePathname } from "next/navigation";
import ServicesNav from "../../demo/components/ServicesNav";
import ServicesImg from './components/ServicesImg';

const ServicesPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(10);
  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  //@ts-ignore
  const filteredData = posts?.filter((item) => item.services == id);
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
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {/* @ts-ignore */}
          {filteredData?.map((item) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
