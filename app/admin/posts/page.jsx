"use client"
import { POST_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";
import { Pagination, PostTable } from "../components/elements";

const Posts =  () => {
  const data = useFetch(POST_API_URL);

  const [posts, setPosts] = useState(data?.data || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setPosts(data?.data || []);
  }, [data]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  if (!data?.data) {
    return <p>No posts.</p>;
  }

  return (
    <div className="p-5">
      <div>
        <input 
          type="text"
          placeholder="Search posts"
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4 p-2 border rounded"
        />
        {currentPosts.length > 0 ? (
          <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none w-full p-4 h-full">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th className="hidden lg:block">Lead</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((Post, _index) => (
                    <PostTable id={_index} key={_index} post={Post} />
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
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Posts;