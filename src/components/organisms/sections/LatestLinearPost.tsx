"use client";
import { LATEST_POSTS_KEY } from "@/config/Constants";
import useGetLatestPosts from "@/hooks/useGetLatestPosts";
import { PostsCashType } from "@/types/CashTypes";
import { postLinkGenerator } from "@/util/ServerUtil";
import Link from "next/link";
import { useState } from "react";
import { FaCircleDot } from "react-icons/fa6";

const LatestLinearPost = () => {
  const [recentSize] = useState(-4);
  const { posts } = useGetLatestPosts(recentSize, LATEST_POSTS_KEY);
  return (
    <ul className="mb-3 flex flex-col gap-4">
      {posts?.map((post: PostsCashType) => {
        const postLink = postLinkGenerator(post._id, post.title);
        return (
          <li
            key={post._id}
            className="group flex cursor-pointer items-start gap-2 rounded-xl border-2 border-dotted border-gray-400 p-2 hover:border-solid hover:border-gray-900"
          >
            <div className="h-7 w-7 shrink-0">
              <FaCircleDot
                className="h-full w-full text-indigo-700"
                size={28}
                color="#4338CA"
              />
            </div>
            <Link
              className="line-clamp-2 font-semibold group-hover:text-indigo-600"
              href={postLink}
            >
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LatestLinearPost;
