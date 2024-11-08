"use client";
import { Input, Textarea } from "@/components";
import { LEARN_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import TiptapEditor from "../TiptapEditor";

//@ts-ignore
const EditLearnForm = ({ data }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    title: EDITMODE ? data.title : "",
    description: EDITMODE ? data.description : "",
    body: EDITMODE ? data.body : "",
    imgurl: EDITMODE ? data.imgurl : "",
  };

  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, LEARN_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, data._id);

  return (
    <>
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
            {EDITMODE ? "Edit Learn" : "New Learn"}
          </h3>
          <div>
            <Image
              src={
                !formData.imgurl ? "/static/Image/logo.jpg" : formData.imgurl
              }
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
            id="title"
            type="text"
            name="title"
            label="Title"
            color="input-primary"
            value={formData.title}
            onChange={handler.trakeChange}
          />
          <Textarea
            id="description"
            name="description"
            color="textarea-primary"
            label="description"
            value={formData.description}
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
            style="btn btn-active btn-primary"
            value={EDITMODE ? "Save" : "Post"}
          />
        </form>
      </div>
    </>
  );
};

export default EditLearnForm;
