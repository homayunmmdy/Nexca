"use client";
import PostCard from "@/components/sections/PostCard";
import PostsSkeleton from "@/components/sections/PostsSkeleton";
import { POST_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/entities";
import { usePathname } from "next/navigation";
import ServicesNav from "../../demo/components/ServicesNav";

const ServicesPage = () => {
  const pathname = usePathname();
  const id = pathname.slice(10);
  const { data: posts, loading } = useFetch("all_posts", POST_API_URL);

  //@ts-ignore
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
  console.log("url id",id)
  return (
    <>
      <ServicesNav />
      <div className="mx-auto p-10">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
          {filteredData?.map((item: PostsCashType) => (
            <PostCard key={item._id} post={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
