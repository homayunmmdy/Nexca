"use client";
import APIClient from "@/util/apiClient";
import { getParameterId } from "@/util/Util";
import { useEffect, useState } from "react";
import { POST_API_URL } from "../config/apiConstants";

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
