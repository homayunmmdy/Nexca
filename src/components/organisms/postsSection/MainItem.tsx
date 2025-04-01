import { PostsCashType } from "@/types/CashTypes";
import { postLinkGenerator } from "@/util/ServerUtil";
import Image from "next/image";
import Link from "next/link";

const MainItem = ({ post }: { post: PostsCashType }) => {
  const postLink = postLinkGenerator(post._id, post.title);
  return (
    <article className="col-span-12 md:col-span-6">
      <div className="group cursor-pointer">
        <div className="overflow-hidden rounded-md transition-all hover:scale-105">
          <Link
            className="relative block aspect-video"
            href={postLink}
            title={post.title.slice(0, 60)}
          >
            <Image
              src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
              alt={post.title}
              title={post.title.slice(0, 60)}
              width={500}
              height={270}
              className="h-full w-full bg-gray-600"
            />
          </Link>
        </div>
        <header>
          <h2 className="mb-2 mt-4 text-lg font-semibold leading-snug tracking-tight">
            <Link href={postLink} title={post.title.slice(0, 60)}>
              <span className="line-clamp-2 duration-500 group-hover:text-indigo-700">
                {post.title}
              </span>
            </Link>
          </h2>
          <p className="line-clamp-3 hidden md:[display:-webkit-box]">
            {post.description.slice(0, 230)}
          </p>
        </header>
      </div>
    </article>
  );
};

export default MainItem;
