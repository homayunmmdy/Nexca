import { PostsCashType } from "@/types/CashTypes";
import { postLinkGenerator } from "@/util/ServerUtil";
import Image from "next/image";
import Link from "next/link";

const PostItem = ({ post }: { post: PostsCashType }) => {
  const postLink = postLinkGenerator(post._id, post.title);

  return (
    <div className="group h-full card bg-base-300 w-full shadow-sm">
      <figure>
        <Link href={postLink} className="block">
          <div className="relative">
            <Image
              src={post.imgurl || "/static/Image/logo.jpg"}
              alt={post.title}
               width={662.172}
              height={372.469}
              className="aspect-video rounded-xl bg-gray-600 object-cover"
              loading="lazy"
            />
          </div>
        </Link>
      </figure>
      <div className="card-body">
        <Link
          href={postLink}
          title={post.title}
          className="card-title group-hover:text-indigo-700 line-clamp-2"
        >
          {" "}
          {post.title}
        </Link>
        <p className="line-clamp-3">{post.description}</p>
        <div className="card-actions justify-end">
          {post.createdAt
            ? new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })
            : "2 hours ago"}
        </div>
      </div>
    </div>
    // <article className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">

    //   {/* Image */}

    //   {/* Actions */}
    //   <div className="p-3">
    //     {/* Caption */}
    //     <div className="mb-2">
    //       <Link href={postLink} className="block">

    //         <span className="text-sm text-gray-900">
    //           {post.description?.slice(0, 100)}
    //           {post.description?.length > 100 && (
    //             <span className="text-gray-500 ml-1">... more</span>
    //           )}
    //         </span>
    //       </Link>
    //     </div>

    //     {/* Timestamp */}
    //     <div className="text-xs text-gray-400 uppercase tracking-wide">

    //     </div>
    //   </div>
    // </article>
  );
};

export default PostItem;
