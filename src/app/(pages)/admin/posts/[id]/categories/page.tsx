"use client";
import RenderTags from "@/app/(pages)/posts/[id]/components/RenderTags";
import { Spinner } from "@/components";
import useSinglePost from "@/hooks/useSinglePost";
import { getIdOfPost } from "@/util/Util";
import ErrorText from "../../../components/elements/ErrorText";

const PostCategories = () => {
  const postId = getIdOfPost();
  const { data: post, isLoading } = useSinglePost(postId);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {post?.categories?.length > 0 ? (
        <div className="my-3 flex items-center gap-3">
          <span className="font-bold">Categories:</span>
          <RenderTags post={post} />
        </div>
      ) : (
        <ErrorText>This post has no categories yet</ErrorText>
      )}
    </>
  );
};

export default PostCategories;
