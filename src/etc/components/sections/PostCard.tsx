import Image from "next/image";
import Link from "next/link";
import React from 'react'
import { PostsCashType } from '../../../types/CashTypes';
import Logo from "@/../public/static/Image/logo.jpg";

const PostCard = ({ post }: {post : PostsCashType}) => {
    return (
      <>
        <div className="card rounded-xl bg-base-100 shadow-xl transition-transform duration-500 ease-in-out md:hover:scale-105">
          <Link href={`/posts/${post._id}`} >
          <figure className="px-5 pt-5">
            <Image
              src={!post.imgurl? Logo: post.imgurl}
              alt={post.title.slice(0,70)}
              width={662.172}
              height={372.469}
              className="aspect-video rounded-xl bg-gray-600 object-cover"
            />
          </figure>
          <div className="card-body items-center p-5 text-center">
            <h2 className="card-title">{post.title.slice(0,70).slice(0, 100)}</h2>
            <p>{post.description.slice(0, 60)}</p>
          </div>
          </Link>
        </div>
      </>
    );
  };
  
  export default PostCard;