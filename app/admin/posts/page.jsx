"use client"
import { POST_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";
import { Pagination, PostTable } from "../components/elements";
import { FiSearch } from "react-icons/fi";

const Posts = () => {
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
        <label className="input input-primary input-bordered flex items-center gap-2 my-2">
          <input type="text" className="grow" placeholder="Search posts"
            value={searchQuery}
            onChange={handleSearch} />
            <FiSearch size={24} className="h-4 w-4 opacity-70" color="#4F46E5"/>
        </label>
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