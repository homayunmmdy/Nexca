"use client";
import { MAIN_POSTS_QUERY_KEY } from "@/etc/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import { MainSecSkeleton } from "../skelton";
import MainItem from "./MainItem";
import React from 'react'
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";

const Main: React.FC = () => {
  const { data, loading } = useGetSection(MAIN_POSTS_QUERY_KEY, -2, 1);

  if (loading) {
    return <MainSecSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-12 md:gap-9">
        {data?.map((item: PostsCashType) => (
          <MainItem post={item} key={item._id} />
        ))}
      </div>
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <Main />
  </ErrorBoundaryProvider>
);