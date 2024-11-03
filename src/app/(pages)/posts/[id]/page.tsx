"use client";
import RecentPosts from "@/app/(pages)/posts/[id]/components/RecentPosts";
import "@/app/tiptap.css";
import { Button } from "@/components";
import { MorePostsSec } from "@/etc/components/sections";
import useReadText from "@/hooks/useReadText";
import useSinglePost from "@/hooks/useSinglePost";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";
import FormatTime from "../components/FormatTime";
import RenderTags from "./components/RenderTags";
import PostSeclton from "./PostSkelton";

const Post: React.FC = () => {
  //@ts-ignore
  const post = useSinglePost();
  //@ts-ignore
  const text = `${post?.title}. ${post?.body}`;
  const { isSpeaking, handleReadText, handleStopReading, cleanup } = useReadText(text);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  if (!post) {
    return <PostSeclton />;
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  // @ts-ignore
  const PostBody = DOMPurify.sanitize(post.body);

  return (
    <>
      <div className="flex flex-col">
        <div className="bg-indigo-500">
          <div className="mx-auto w-[94%] px-4 py-8 md:w-[92%]">
            <h1 className="text-center text-4xl font-extrabold text-white">
              {/* @ts-ignore */}
              {post.title}
            </h1>
            <p className="my-3 text-center text-lg text-white">
              {/* @ts-ignore */}
              <FormatTime timestamp={post.createdAt} options={options} />
            </p>
          </div>
        </div>
        <div className="py-8">
          <div className="mx-auto flex w-[94%] flex-col gap-8 md:w-[92%] md:flex-row">
            <div className="w-full md:w-3/4">
              <Image
                className="aspect-video w-full rounded-3xl py-3"
                //@ts-ignore
                src={post.imgurl}
                //@ts-ignore
                title={post.title}
                //@ts-ignore
                alt={post.title}
                width={662.172}
                height={372.469}
                loading="lazy"
              />
              <div className="flex items-center justify-between gap-3 px-3">
                {/* <p className="text-center">{readingTimeEstimate.text}</p> */}
                {!isSpeaking ? (
                  <Button
                    title={<FaPlay />}
                    style="text-white rounded-full"
                    onClick={isSpeaking ? handleStopReading : handleReadText}
                    color="btn-primary"
                  />
                ) : (
                  <Button
                    title={<FaStop />}
                    style="text-white rounded-full"
                    onClick={isSpeaking ? handleStopReading : handleReadText}
                    color="btn-primary"
                  />
                )}
                <Link
                  href="/demo"
                  className="btn btn-outline btn-primary rounded-full"
                >
                  Back Home
                </Link>
              </div>
              <div
                className="prose mb-3 max-w-none text-lg leading-9"
                dangerouslySetInnerHTML={{ __html: PostBody }}
              />
              <RenderTags post={post} />
              <MorePostsSec />
            </div>
            <div className="w-full py-3 md:w-1/4">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
