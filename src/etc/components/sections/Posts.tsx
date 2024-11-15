"use client";
import Titr from "@/components/Titr";
import { POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import { PostsSecSkeleton } from "../skelton";
import PostCard from "./PostCard";
import React from 'react'
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";

const Posts: React.FC = () => {
  const { data, loading } = useGetSection(POSTS_QUERY_KEY, -6, 2);

  if (loading) {
    return <PostsSecSkeleton />;
  }

  return (
    <>
      <div className="mx-auto pb-6">
        <Titr title="Posts" item="text-left" />
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
    <Posts />
  </ErrorBoundaryProvider>
);
