"use client";
import { Button, Input, Textarea } from "@/components";
import { PUBLICARIONS_API_URL } from "@/config/apiConstants";
import { CategoryType, PublicationsCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryList } from "../elements";

const EditPublicationForm = ({ data }: { data: PublicationsCashType }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();
  const startingData = {
    title: EDITMODE ? data.title : "",
    description: EDITMODE ? data.description : "",
    body: EDITMODE ? data.body : "",
    imgurl: EDITMODE ? data.imgurl : "",
    author: EDITMODE ? data.author : "",
    page_amount: EDITMODE ? data.page_amount : 0,
    publisher: EDITMODE ? data.publisher : "",
    publication_date: EDITMODE ? data.publication_date : "",
    pdf_link: EDITMODE ? data.pdf_link : "",
    categories: EDITMODE ? data.categories ?? [] : [],
  };

  const [formData, setFormData] = useState(startingData);
  const [categoryInput, setCategoryInput] = useState("");
  const handler = new FormHandler(setFormData, PUBLICARIONS_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, data._id);

  return (
    <div className="flex justify-center">
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
      >
        <h3 className="text-center text-2xl font-semibold">
          {EDITMODE ? "Edit Post" : "New Post"}
        </h3>
        <div>
          <Image
            src={formData.imgurl}
            title={formData.title}
            alt={formData.title}
            height={390.938}
            width={695}
            className="aspect-video w-full rounded-xl border border-indigo-500"
          />
        </div>
        <Input
          id="imgurl"
          type="text"
          name="imgurl"
          label="Image Link"
          color="input-primary"
          value={formData.imgurl}
          onChange={handler.trakeChange}
        />
        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          color="input-primary"
          value={formData.title}
          onChange={handler.trakeChange}
          required
        />
        <Textarea
          id="description"
          name="description"
          color="textarea-primary"
          label="description"
          value={formData.description}
          onChange={handler.trakeChange}
        />
        <Textarea
          id="body"
          name="body"
          label="Body"
          color="textarea-primary"
          value={formData.body}
          onChange={handler.trakeChange}
          required
        />
        <Input
          type="text"
          id="author"
          name="author"
          label="author"
          color="input-primary"
          value={formData.author}
          onChange={handler.trakeChange}
          required
        />
        <Input
          type="number"
          id="page_amount"
          name="page_amount"
          label="page_amount"
          color="input-primary"
          value={formData.page_amount}
          onChange={handler.trakeChange}
          required
        />
        <Input
          type="text"
          id="publisher"
          name="publisher"
          label="publisher"
          color="input-primary"
          value={formData.publisher}
          onChange={handler.trakeChange}
          required
        />
        <Input
          type="datetime-local"
          id="publication_date"
          name="publication_date"
          label="publication_date"
          color="input-primary"
          value={formData.publication_date}
          onChange={handler.trakeChange}
        />
        <Input
          type="text"
          id="pdf_link"
          name="pdf_link"
          label="pdf_link"
          color="input-primary"
          value={formData.pdf_link}
          onChange={handler.trakeChange}
        />
        {/* Add New Category */}
        <div className="mt-2 flex w-full gap-2">
          <Input
            type="text"
            value={categoryInput}
            color="input-primary"
            onChange={(e) => setCategoryInput(e.target.value)}
            placeholder="New Category"
            style="w-full"
          />
          <Button
            type="button"
            onClick={() => handler.addCategory(categoryInput, setCategoryInput)}
            color="btn-primary"
          >
            Add Category
          </Button>
        </div>

        {/* Categories List */}
        <div className="flex flex-col gap-2">
          <h4>Categories</h4>
          {formData.categories.map((category: CategoryType) => (
            <CategoryList
              category={category}
              onChange={handler.trakeChange}
              onRemove={handler.removeCategory}
            />
          ))}
        </div>
        <Input
          type="submit"
          style="btn btn-active btn-primary"
          value={EDITMODE ? "Save" : "Post"}
        />
      </form>
    </div>
  );
};

export default EditPublicationForm;
