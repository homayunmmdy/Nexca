import Image from "next/image";
import Link from "next/link";
import React from "react";
import {PostsCashType} from "@/types/CashTypes"

const RecentPost = ({ post }: {post : PostsCashType}) => {
  return (
    <>
      <Link  href={`/posts/${post._id}`} className="relative flex flex-col items-start sm:flex-row xl:flex-col">
       
          <Image
            src={post.imgurl}
            alt={post.title}
            className="mb-6 aspect-video w-full rounded-lg bg-slate-50 shadow-md sm:mb-0 sm:w-[17rem] xl:mb-6 xl:w-full"
            width={1216}
            height={640}
          />
          <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 font-semibold">
              {post.title.slice(0, 60)}
            </h3>
            <div className="prose-slate prose-sm prose text-slate-600">
              <p>{post.description.slice(0, 60)}</p>
            </div>
          </div>
        </Link>
    </>
  );
};

export default RecentPost;
