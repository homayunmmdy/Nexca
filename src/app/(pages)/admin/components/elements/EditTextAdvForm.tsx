"use client";
import { Input } from "@/components";
import { TEXTADV_API_URL } from "@/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormField } from ".";

//@ts-ignore
const EditTextAdvForm = ({ data }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    textadvid: EDITMODE ? data.textadvid : 1,
    advname: EDITMODE ? data.advname : "",
    body: EDITMODE ? data.body : "",
    link: EDITMODE ? data.link : "",
  };
  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData,TEXTADV_API_URL,router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => handler.submit(e, formData, data._id);

  return (
    <>
      <div className="flex justify-center">
        {handler.isLoading && (
          <span className="absolute loading loading-ring loading-lg"></span>
        )}
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col gap-3 w-full md:w-1/2 mb-3"
        >
          <h3 className="text-center font-semibold text-2xl">
            {EDITMODE ? "Edit TextAdv" : "New TextAdv"}
          </h3>
          <FormField
            id="textadvid"
            type="number"
            name="textadvid"
            label="textadvid"
            value={formData.textadvid}
            onChange={handler.trakeChange}
            required
          />
          <FormField
            id="advname"
            name="advname"
            label="advname"
            value={formData.advname}
            onChange={handler.trakeChange}
            required
          />
          <FormField
            id="body"
            name="body"
            label="body"
            value={formData.body}
            onChange={handler.trakeChange}
            required
          />
          <FormField
            id="link"
            name="link"
            label="link"
            value={formData.link}
            onChange={handler.trakeChange}
            required
          />
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

export default EditTextAdvForm;
