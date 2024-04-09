"use client";
import PostSkelton from "./PostSkelton";
import SinglePost from "@/app/components/SinglePost";
import VerticalNews from "@/app/components/sections/VerticalNews";
import LinearNews from "@/app/components/sections/LinearNews";
import ListAds from "@/app/components/ads/ListAds";

const PostPage = () => {
  const post = SinglePost();

  if (!post) {
    return <PostSkelton />
  }

  return (
    <>
        <div className='px-6 sm:px-12'>

    <VerticalNews secid="18" />
    <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6">
        <h1 className="text-center mb-3">{post.title}</h1>
        <img
            className="w-full p-3 aspect-video rounded-3xl"
            src={post.imgurl}
            title={post.title}
            alt={post.title}
            width="880"
            height="450"
            loading="lazy"
          />
              <p>
              {post.description}
            </p>
            <p>{post.body}</p>
        </div>
        <div className="col-span-12 md:col-span-3">
          <LinearNews secid="2" />
          <LinearNews secid="19" />
        </div>
        <div className="col-span-12 md:col-span-3">
         <ListAds />
        </div>
      </div>
      
      </div>
    </>
  );
};

export default PostPage;
