"use client";
import { Spinner } from "@/components";
import { POST_API_URL } from "@/config/apiConstants";
import useSinglePost from "@/hooks/useSinglePost";
import FormHandler from "@/util/handler/FormHandler";
import { checkMaster, getIdOfPost } from "@/util/Util";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryList } from "../../../components/elements";
import ErrorText from "../../../components/elements/ErrorText";
import CategoriesForm from "../../../components/forms/CategoriesForm";
import { CategoryType } from "@/types/CashTypes";

const PostCategories = () => {
  const postId = getIdOfPost();
  const { data: post, isLoading } = useSinglePost(postId);
  let master = checkMaster();
  const router = useRouter();

  const startingTicketData = {
    categories: post?.categories ?? [],
    masterEditor: master ? true : false,
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData, POST_API_URL, router);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <CategoriesForm handler={handler} />
      {formData.categories.length > 0 ? (
        <div className="mt-2 flex flex-col gap-2">
          <h4>Categories</h4>
          {formData.categories.map((category : CategoryType) => (
            <CategoryList
              key={category.id}
              category={category}
              onChange={handler.trakeChange}
              onRemove={handler.removeCategory}
            />
          ))}
        </div>
      ) : (
        <ErrorText>This post has no categories yet</ErrorText>
      )}
    </>
  );
};

export default PostCategories;
