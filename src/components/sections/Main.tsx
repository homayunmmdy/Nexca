"use client";
import { MAIN_POSTS_QUERY_KEY } from "@/config/Constants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/CashTypes";
import ErrorBoundaryProvider from "@/util/ErrorBoundaryProvider";
import React from "react";
import MainItem from "./MainItem";
import { MainSecSkeleton } from "../skelton";

const Main: React.FC = () => {
  const { data, loading } = useGetSection(MAIN_POSTS_QUERY_KEY, -1, 1);

  if (loading) {
    return <MainSecSkeleton />;
  }

  return (
    <>
      {data?.map((item: PostsCashType) => (
        <MainItem post={item} key={item._id} />
      ))}
    </>
  );
};

export default () => (
  <ErrorBoundaryProvider>
    <Main />
  </ErrorBoundaryProvider>
);
