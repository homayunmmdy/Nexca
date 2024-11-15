"use client";
import { MORE_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import Titr from "../../../components/Titr";
import { PostsSkeleton } from "../skelton";
import PostCard from "./PostCard";
import React from 'react'
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";

const MorePosts: React.FC = () => {
  const { data, loading } = useGetSection(MORE_POSTS_QUERY_KEY, -3, 5);

  if (loading) {
    return <PostsSkeleton />;
  }

  return (
    <>
      <div className="mx-auto pb-6">
        <Titr title="More Posts" item="text-left" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {data?.map((post: PostsCashType) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <MorePosts />
  </ErrorBoundaryProvider>
);
