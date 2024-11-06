"use client";
import { POST_API_URL } from "@/etc/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { useState } from "react";
import { PostsSecSkeleton } from "../skelton";
import PostCard from "./PostCard";

const CodingTabs = () => {
  const [activeTab, setActiveTab] = useState<"6" | "7" | "8" | "9" | "10">("6");

  const tabs = [
    { id: "6", title: "JS/TS" },
    { id: "7", title: "React" },
    { id: "8", title: "DSA" },
    { id: "9", title: "Technical" },
    { id: "10", title: "Behaviour" },
  ];

  const { data: posts, loading } = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

  if (loading) {
    return <PostsSecSkeleton />;
  }
  const filteredPosts = posts.filter(
    (post: PostsCashType) => post.section == activeTab
  );

  return (
    <>
      {/* Tabs */}
      <div className="mb-12 flex flex-wrap justify-center gap-4">
        {tabs.map(({id , title}) => (
          <button
            key={id}
            onClick={() => setActiveTab(id as typeof activeTab)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeTab === id
                  ? "bg-blue-600 text-white shadow-lg transform scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {filteredPosts.map((post: PostsCashType) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
};

export default CodingTabs;
