"use client";
import BreadCrump from "@/app/components/BreadCrump";
import PostSkelton from "./PostSkelton";
import NewsletterBox from "@/app/components/NewsletterBox";
import SinglePost from "@/app/components/SinglePost";
const PostPage = () => {
  const post = SinglePost();

  if (!post) {
    return <PostSkelton />
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-4 p-4 md:p-8">
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          <img
            className="w-full p-3 aspect-video rounded-3xl"
            src={post.imgurl}
            title={post.title}
            alt={post.title}
            width="880"
            height="450"
            loading="lazy"
          />
          <BreadCrump />
          <div >
            <h1 className="text-center mb-3">{post.title}</h1>
            <p>
              {post.description}
            </p>
            <p>{post.body}</p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          {/* <NewsletterBox /> */}
        </div>
      </div>
    </>
  );
};

export default PostPage;
