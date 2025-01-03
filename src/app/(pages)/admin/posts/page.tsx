"use client";
import { Input, Spinner } from "@/components";
import { POST_API_URL } from "@/config/apiConstants";
import { ALL_POSTS_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
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

  // Get initial search params from URL
  const initialSearchQuery = searchParams.get("query") || "";
  const initialService = searchParams.get("service") || "";
  const initialSection = searchParams.get("section") || "";

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Extract unique services and sections from posts
  const services = Array.from(new Set(posts.map((post: PostsCashType) => post.services).filter(Boolean)));
  const sections = Array.from(new Set(posts.map((post: PostsCashType) => post.section).filter(Boolean)));

  useEffect(() => {
    setPosts(data?.data || []);
  }, [data]);

  // Update URL with all filter parameters
  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams();
      if (searchQuery) params.set("query", searchQuery);
      if (selectedService) params.set("service", selectedService);
      if (selectedSection) params.set("section", selectedSection);
      
      router.push(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(handler);
  }, [searchQuery, selectedService, selectedSection, router]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const isMaster = checkMaster();

  const filteredPosts = posts
    .sort((a: { createdAt: string }, b: { createdAt: string }) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .filter((post: PostsCashType) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesService = !selectedService || post.services === selectedService;
      const matchesSection = !selectedSection || post.section === selectedSection;
      const matchesMasterEditor = isMaster || !post.masterEditor;

      return matchesSearch && matchesService && matchesSection && matchesMasterEditor;
    });

  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearch = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleServiceChange = (event: { target: { value: string } }) => {
    setSelectedService(event.target.value);
    setCurrentPage(1);
  };

  const handleSectionChange = (event: { target: { value: string } }) => {
    setSelectedSection(event.target.value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedService("");
    setSelectedSection("");
    setSearchQuery("");
    setCurrentPage(1);
  };

  if (!data?.data) {
    return <Spinner />;
  }

  return (
    <div className="p-5">
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search posts"
              value={searchQuery}
              onChange={handleSearch}
              icon={<FiSearch size={24} className="h-4 w-4 opacity-70" color="#4F46E5" />}
              style="w-full"
              color="input-primary"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <FiFilter className="h-4 w-4" />
            Filters
          </button>
        </div>

        {isFilterOpen && (
          <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Service
                </label>
                <select
                  value={selectedService}
                  onChange={handleServiceChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">All Services</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Section
                </label>
                <select
                  value={selectedSection}
                  onChange={handleSectionChange}
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                >
                  <option value="">All Sections</option>
                  {sections.map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}

        {currentPosts.length > 0 ? (
          <div className="shadow-3xl shadow-shadow-500 dark:!bg-navy-800 relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4 dark:text-white dark:shadow-none">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Service</th>
                    <th>Section</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {currentPosts.map((post: PostsCashType) => (
                    <ItemsTable post={post} baseURL="posts" />
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
