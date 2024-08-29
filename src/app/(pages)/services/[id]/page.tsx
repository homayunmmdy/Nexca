"use client"
import { POST_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
import { usePathname } from "next/navigation";
import PostCard from "../../demo/components/posts/PostCard";
import PostsSkeleton from "../../demo/components/posts/PostsSkeleton";
import { SubNavbar } from "../../demo/components";

const ServicesPage = () => {
    const pathname = usePathname();
    const id = pathname.slice(10);
    const { data: posts, loading } = useFetch(POST_API_URL)
    //@ts-ignore
    const filteredData = posts?.filter((item) => item.service == id);
    if (loading) {
        return <PostsSkeleton />
    }
    return (
        <>
            <SubNavbar />
            <div className="mx-auto p-10">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {/* @ts-ignore */}
                    {filteredData?.map((item) => (
                        <PostCard key={item._id} post={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicesPage