"use client";
import Comment from "@/app/(pages)/posts/[id]/components/Comment";
import { COMMENTS_API_URL } from "@/config/apiConstants";
import { COMMENTS_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { CommentsCashType } from "@/types/CashTypes";
import { getIdOfPost } from "@/util/Util";
import ErrorText from "../../../components/elements/ErrorText";

const PostCommentsPage = () => {
  const { data } = useFetch(COMMENTS_KEY, COMMENTS_API_URL);
  const postId = getIdOfPost();
  const comments = data?.filter((item: any) => item.postId == postId);

  return (
    <div>
      {comments?.length > 0 ? comments?.map((comment: CommentsCashType) => (
        <Comment comment={comment} key={comment._id} />
      )) : <ErrorText>This post has no comments yet</ErrorText>}
    </div>
  );
};

export default PostCommentsPage;
