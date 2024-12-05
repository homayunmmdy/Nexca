"use client";
import React, { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

// Define the structure of a single post
interface Post {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

// Define the structure of the paginated response
interface PaginatedPosts {
  data: Post[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

// Function to fetch posts from the backend with pagination
const fetchPosts = async ({ pageParam = 1 }: { pageParam?: number }): Promise<PaginatedPosts> => {
  const res = await fetch(`/api/posts?page=${pageParam}&limit=5`);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data;
};

const Feed: React.FC = () => {
  // useInfiniteQuery to manage infinite scroll data
  const {
    data, // All fetched data
    fetchNextPage, // Fetch the next page
    hasNextPage, // If there are more pages to load
    isFetchingNextPage, // If the next page is being fetched
    error,
    isLoading,
  } = useInfiniteQuery<PaginatedPosts>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    getNextPageParam: (lastPage) => {
      // Determine the next page
      const nextPage = lastPage.meta.page + 1; // Calculate the next page number
      return nextPage <= lastPage.meta.totalPages ? nextPage : undefined; // Return nextPage if it exists, otherwise undefined
    },
  });

  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // No setup observer if there are no more pages or already fetching
    if (!hasNextPage || isFetchingNextPage) return;

    // Set up an IntersectionObserver to trigger fetchNextPage when the element becomes visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage(); // Fetch the next page when the element is visible
        }
      },
      { threshold: 1.0 } // Trigger only when 100% of the element is visible
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current); // Clean up the observer when the component unmounts
      }
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-700">Loading posts...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-red-600">
          Error loading posts. Please try again later.
        </p>
      </div>
    );

  return (
    <div className="feed-container mx-auto max-w-4xl p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Feed</h1>
      {data?.pages[0]?.data.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-medium text-gray-600">No posts available!</p>
        </div>
      ) : (
        <div className="posts space-y-4">
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.data.map((post: Post) => (
                <div
                  key={post._id}
                  className="post-card border border-gray-300 rounded-lg p-4 shadow-md bg-white"
                >
                  <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.body}</p>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      )}
      <div ref={observerRef} className="h-10"></div>
      {isFetchingNextPage && (
        <div className="flex justify-center mt-4">
          <p className="text-sm font-medium text-gray-500 animate-pulse">
            Loading more posts...
          </p>
        </div>
      )}
    </div>
  );
};

export default Feed;
