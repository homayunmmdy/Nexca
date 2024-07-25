"use client";
import RecentPosts from "@/app/(pages)/Posts/[id]/components/RecentPosts";
import useSinglePost from "@/app/hooks/useSinglePost";
import PostSeclton from "./PostSkelton";
import useReadText from "@/app/hooks/useReadText";
import { FormatTime } from "@/app/components/general";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa6";


const Post = () => {
  const post = useSinglePost();
  const text = `${post?.title}. ${post?.body}`;
  const { isSpeaking, handleReadText, handleStopReading } = useReadText(text);

  if (!post) {
    return <PostSeclton />
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };

  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-500">
          <div className="w-[94%] md:w-[92%] mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
            <p className="text-lg  text-center my-3 text-white"><FormatTime timestamp={post.createdAt} options={options} /></p>
          </div>
        </div>
        <div className="bg-white py-8">
          <div className="w-[94%] md:w-[92%] mx-auto flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-3/4 ">
              <img
                className="w-full py-3 aspect-video rounded-3xl"
                src={post.imgurl}
                title={post.title}
                alt={post.title}
                loading="lazy"
              />
              <div className="flex gap-3 items-center justify-between px-3">
                {/* <p className="text-center">{readingTimeEstimate.text}</p> */}
                  {!isSpeaking ? (
                    <button
                      onClick={handleReadText}
                      className="px-4 py-2 btn btn-primary rounded-full text-white"
                    >
                      <FaPlay />
                    </button>
                  ) : (
                    <button
                      onClick={handleStopReading}
                      className="px-4 py-2 btn btn-primary rounded-full text-white"
                    >
                      <FaStop />
                    </button>
                  )}
                  <Link href="/" className="btn btn-outline btn-primary rounded-full">Back Home</Link>
              </div>
              <div className="prose max-w-none">
                <p className="p-3 text-lg leading-9	">
                  {post.body}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 py-3">
              <RecentPosts />
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Post;