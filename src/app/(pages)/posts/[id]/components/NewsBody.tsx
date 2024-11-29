import "@/app/tiptap.css";
import NexcaMark from "@/components/NexcaMark";
import { MorePostsSec } from "@/components/sections";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import ReadPost from "./ReadPost";
import RenderTags from "./RenderTags";
import { ContactsForm } from "@/app/components/shared/ContactsForm";
import { FormData } from "@/types/entities";

const NewsBody = ({ post }: { post: any }) => {
  const text = `${post?.title}. ${post?.description}`;
  const PostBody = DOMPurify.sanitize(post.body);

  function getFormData({ name, message, email }: FormData): void {
    console.log(name + " " + email + " " + message);
  }

  return (
    <>
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
      <RenderTags post={post} />
      <ContactsForm formHandler={getFormData} buttonText="Comment" />
      <MorePostsSec />
    </>
  );
};

export default NewsBody;
