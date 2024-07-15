"use client";
import RecentPosts from "@/app/(pages)/Posts/[id]/components/RecentPosts";
import PostSeclton from "./PostSkelton";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FormatTime } from "@/app/components/layout";
import useSinglePost from "@/app/hooks/useSinglePost";

const Post = () => {
  const post = useSinglePost();
  const [isSpeaking, setIsSpeaking] = useState(false);
console.log(post)

  if (!post) {
    return <PostSeclton />
  }

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  };


  const handleReadText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);

    utterance.onend = () => {
      setIsSpeaking(false);
    };
  };

  const handleStopReading = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };
  return (
    <>
      <div className="flex flex-col ">
        <div className="bg-indigo-500 pt-10">
          <div className="w-[94%] md:w-[92%] mx-auto px-4 py-8">
            <h1 className="text-4xl text-center font-extrabold text-white">{post.title}</h1>
            {/* <p className="text-lg  text-center my-3 text-white"><FormatTime timestamp={post.createdAt} options={options} /></p> */}
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
                <div>
                  {!isSpeaking ? (
                    <button
                      onClick={handleReadText}
                      className="px-4 py-2 btn btn-outline btn-secondary rounded-full"
                    >
                      Read
                    </button>
                  ) : (
                    <button
                      onClick={handleStopReading}
                      className="px-4 py-2 btn btn-outline btn-secondary rounded-full"
                    >
                      Stop
                    </button>
                  )}
                </div>
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