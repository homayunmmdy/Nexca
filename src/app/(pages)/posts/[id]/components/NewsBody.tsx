import "@/app/tiptap.css";
import NexcaMark from "@/components/NexcaMark";
import { MorePostsSec } from "@/components/sections";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import ReadPost from "./ReadPost";
import RenderTags from "./RenderTags";
import { FormData } from "@/types/entities";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import FormHandler from "@/util/handler/FormHandler";
import { POST_API_URL } from "@/config/apiConstants";
import toast, { Toaster } from "react-hot-toast";
import { Button, Input, Textarea } from "@/components";

const NewsBody = ({ post }: { post: any }) => {
  const text = `${post?.title}. ${post?.description}`;
  const PostBody = DOMPurify.sanitize(post.body);

  // Manage post state with comments
  const [postData, setPostData] = useState({
    ...post,
    comments: post.comments || [],
  });
  
  const router = useRouter();
  const CommentId = useId()
  const handler = new FormHandler(setPostData, POST_API_URL, router);


  // Manage comment input
  const [commentInput, setCommentInput] = useState({
    id : CommentId,
    name: "",
    email: "",
    message: "",
  });

  // Handle new comment addition
  const handleAddComment = () => {
    if (
      !commentInput.name.trim() ||
      !commentInput.email.trim() ||
      !commentInput.message.trim()
    ) {
      toast.error("All fields are required!");
      return;
    }

    handler.addComment(post.id, commentInput);
    setCommentInput({id : CommentId, name: "", email: "", message: "" }); // Clear inputs
  };


  return (
    <>
    <Toaster />
      <Image
        className="aspect-video w-full rounded-3xl py-3"
        src={!post.imgurl ? "/static/Image/logo.jpg" : post.imgurl}
        title={post.title}
        alt={post.title}
        width={662.172}
        height={372.469}
        loading="lazy"
      />
      <div className="flex items-center justify-between gap-3 px-3">
        {/* <p className="text-center">{readingTimeEstimate.text}</p> */}
        <ReadPost text={text} />
        <NexcaMark master={post.masterEditor} />
        <Link href="/demo" className="btn btn-outline btn-primary rounded-full">
          Back Home
        </Link>
      </div>
      <div
        className="prose mb-3 max-w-none text-lg leading-9"
        id="tiptap-style"
        dangerouslySetInnerHTML={{ __html: PostBody }}
      />
        <div className="mt-6">
        <h4 className="text-xl font-semibold">Leave a Comment</h4>
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            name="name"
            color="input-primary"
            placeholder="Your Name"
            value={commentInput.name}
            onChange={(e) =>
              setCommentInput({ ...commentInput, name: e.target.value })
            }
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            color="input-primary"
            value={commentInput.email}
            onChange={(e) =>
              setCommentInput({ ...commentInput, email: e.target.value })
            }
          />
          <Textarea
            name="message"
            placeholder="Your Comment"
            value={commentInput.message}
            color="textarea-primary"
            onChange={(e) =>
              setCommentInput({ ...commentInput, message: e.target.value })
            }
          />
          <Button type="button" onClick={handleAddComment} color="btn-primary">
            Add Comment
          </Button>
        </div>
      </div>

      {/* Display Comments */}
      {postData.comments.length > 0 && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold">Comments</h4>
          <ul className="flex flex-col gap-3">
            {postData.comments.map((comment: { id: number; name: string; email: string; message: string; }) => (
              <li key={comment.id} className="rounded-md border p-3">
                <p>
                  <strong>{comment.name}</strong> ({comment.email})
                </p>
                <p>{comment.message}</p>
              
              </li>
            ))}
          </ul>
        </div>
      )}
      <RenderTags post={post} />
      <MorePostsSec />
    </>
  );
};

export default NewsBody;
