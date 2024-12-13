"use client";
import { Button, Input, Textarea } from "@/components";
import {
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/config/apiConstants";
import { SECTIONS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { PostsCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { checkMaster } from "@/util/Util";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryList, SelectField, SelectFiledSkeleton } from "../elements";
import TiptapEditor from "../TiptapEditor";

const EditPostForm = ({ post }: { post: PostsCashType }) => {
  const EDITMODE = post._id !== "new";
  const router = useRouter();
  let master = checkMaster();

  const startingTicketData = {
    title: EDITMODE ? post.title : "",
    description: EDITMODE ? post.description : "",
    body: EDITMODE ? post.body : "",
    section: EDITMODE ? post.section : "1",
    services: EDITMODE ? post.services : "1",
    imgurl: EDITMODE ? post.imgurl : "",
    categories: EDITMODE ? post.categories ?? [] : [],
    masterEditor: master ? true : false,
    source: EDITMODE ? post.source : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [categoryInput, setCategoryInput] = useState("");
  const handler = new FormHandler(setFormData, POST_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, post._id);

  const { data: services, loading: serviceLoading } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
  const { data: sections, loading: sectionLoading } = useFetch(
    SECTIONS_QUERY_KEY,
    SECTIONS_API_URL
  );

  return (
    <div className="flex flex-col justify-center">
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <h3 className="mb-4 text-center text-2xl font-semibold">
        {EDITMODE ? "Edit Post" : "New Post"}
      </h3>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mb-3 flex w-full flex-col gap-3 md:flex-row"
      >
        <div className="w-full md:w-1/2">
          {serviceLoading ? (
            <SelectFiledSkeleton label="Services" />
          ) : (
            <SelectField
              id="services"
              name="services"
              label="Services"
              value={formData.services}
              onChange={handler.trakeChange}
              options={services}
            />
          )}
          {sectionLoading ? (
            <SelectFiledSkeleton label="Section" />
          ) : (
            <SelectField
              id="section"
              name="section"
              label="Section"
              value={formData.section}
              onChange={handler.trakeChange}
              options={sections}
            />
          )}

          <Input
            type="text"
            id="title"
            name="title"
            label="Title"
            style="w-full mb-2"
            color="input-primary"
            value={formData.title}
            onChange={handler.trakeChange}
            required
          />
          <Textarea
            id="description"
            name="description"
            style="w-full mb-2"
            color="textarea-primary"
            label="description"
            value={formData.description}
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
              onClick={() =>
                handler.addCategory(categoryInput, setCategoryInput)
              }
              color="btn-primary"
            >
              Add Category
            </Button>
          </div>

          {/* Categories List */}
          {formData.categories.length > 0 ? (
            <div className="flex flex-col gap-2">
              <h4>Categories</h4>
              {formData.categories.map((category) => (
                <CategoryList
                  category={category}
                  onChange={handler.trakeChange}
                  onRemove={handler.removeCategory}
                />
              ))}
            </div>
          ) : null}
          <Input
            type="text"
            id="source"
            name="source"
            label="source"
            style="w-full mb-2"
            color="input-primary"
            value={formData.source}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="submit"
            style="btn btn-active btn-primary w-full hidden md:block mt-3"
            value={EDITMODE ? "Save" : "Post"}
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src={!formData.imgurl ? "/static/Image/logo.jpg" : formData.imgurl}
            title={formData.title}
            alt={formData.title}
            height={390.938}
            width={695}
            className="mb-2 aspect-video w-full rounded-xl border border-indigo-500"
          />
          <Input
            id="imgurl"
            type="text"
            name="imgurl"
            label="Image Link"
            color="input-primary"
            style="w-full"
            value={formData.imgurl}
            onChange={handler.trakeChange}
          />
          <div id="tiptap-style">
            <label htmlFor="body" className="label">
              Body
            </label>
            <TiptapEditor
              content={formData.body}
              onChange={handler.trakeBodyChanges}
            />
          </div>
          <Input
            type="submit"
            style="btn btn-active btn-primary w-full block md:hidden mt-3"
            value={EDITMODE ? "Save" : "Post"}
          />
        </div>
      </form>
    </div>
  );
};

export default EditPostForm;
