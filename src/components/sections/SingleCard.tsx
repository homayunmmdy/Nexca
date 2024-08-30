"use client";
import { POST_API_URL } from "@/config/apiConstants";
import useGetSection from "@/hooks/useGetSection";
import { PostsCashType } from "@/types/entities";
import Image from "next/image";
import Button from "../Button";
import SingleCardSkeleton from "./SingleCardSkeleton";

const SingleCard = () => {
  const { data, loading } = useGetSection(POST_API_URL, -1, 1);

  if (loading) {
    return <SingleCardSkeleton />;
  }

  return (
    <>
      {data?.map((post: PostsCashType) => (
        <div
          key={post._id}
          className="card lg:card-side bg-base-100 shadow-xl my-5"
        >
          <figure>
            <Image
              src={post.imgurl}
              alt={post.title.slice(0, 70)}
              width={928}
              height={548}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{post.title.slice(0, 70)}</h2>
            <p>{post.description.slice(0, 150)}</p>
            <div className="card-actions justify-end">
              <Button title="Read Now" color="btn-primary" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleCard;
