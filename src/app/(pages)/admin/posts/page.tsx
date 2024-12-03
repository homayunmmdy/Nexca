"use client";
import { Input, Spinner } from "@/components";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { ItemsTable, Pagination } from "../components/elements";
import ErrorText from "../components/elements/ErrorText";
import { checkMaster } from "@/util/Util";

const Posts = () => {
  const data = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState(data?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get initial search query from URL
  const initialSearchQuery = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(() => initialSearchQuery);

  useEffect(() => {
    setPosts(data?.data || []);
  }, [data]);

  // Update the URL when the search query changes with debounce
  useEffect(() => {
    const handler = setTimeout(() => {
      router.push(`?query=${encodeURIComponent(searchQuery)}`);
    }, 400); // debounce delay of 400ms

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, router]);
  useEffect(() => {
    router.push(`?query=${encodeURIComponent(searchQuery)}`);
  }, [searchQuery, router]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const sortedByTime = posts?.sort(
    (
      a: { createdAt: string | number | Date },
      b: { createdAt: string | number | Date }
    ) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  );
 const isMaster = checkMaster(); // Determines if the user is a masterEditor

const filteredPosts = sortedByTime.filter(
  (post: PostsCashType) =>
    (isMaster || !post.masterEditor) && // Include posts with masterEditor if user is master, otherwise exclude
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  if (!data?.data) {
    return <Spinner />;
  }

  return (
    <div className="p-5">
      <div>
        <Input
          type="text"
          placeholder="Search posts"
          value={searchQuery}
          onChange={handleSearch}
          icon={
            <FiSearch
              size={24}
              className="h-4 w-4 opacity-70"
              color="#4F46E5"
            />
          }
          style="my-2 w-full"
          color="input-primary"
        />
        {currentPosts.length > 0 ? (
          <div className="!z-5 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4 dark:text-white dark:shadow-none">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((Post: PostsCashType) => (
                    <ItemsTable post={Post} baseURL="posts" />
                  ))}
                </tbody>
              </table>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={filteredPosts.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        ) : (
          <ErrorText>No posts found.</ErrorText>
        )}
      </div>
    </div>
  );
};

export default Posts;
