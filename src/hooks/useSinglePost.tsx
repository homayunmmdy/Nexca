"use client";
import APIClient from "@/util/apiClient";
import { getParameterId } from "@/util/Util";
import { useEffect, useState } from "react";
import { POST_API_URL } from "../config/apiConstants";

/**
 * Custom hook to fetch a single post by its ID from the API
 * 
 * @description
 * This hook extracts a post ID from the URL parameters, 
 * fetches the corresponding post data from the API, 
 * and manages the post state.
 * 
 * @returns {Object|undefined} The fetched post data or undefined if not loaded
 * 
 * @example
 * // In a component
 * const post = useSinglePost();
 * 
 * @throws {Error} Logs any errors that occur during post fetching
 */

const useSinglePost = () => {
  const id = getParameterId(7);
  const [post, setPost] = useState();
  const apiClient = new APIClient(POST_API_URL);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await apiClient.get(`/${id}`);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return post;
};

export default useSinglePost;
