"use client";
import { Input } from "@/components";
import { TEXTADV_API_URL } from "@/config/apiConstants";
import { TextAdvCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTextAdvForm = ({ data }: { data: TextAdvCashType }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    textadvid: EDITMODE ? data.textadvid : 1,
    advname: EDITMODE ? data.advname : "",
    body: EDITMODE ? data.body : "",
    link: EDITMODE ? data.link : "",
  };
  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, TEXTADV_API_URL, router);
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
            {EDITMODE ? "Edit TextAdv" : "New TextAdv"}
          </h3>
          <Input
            id="textadvid"
            type="number"
            name="textadvid"
            label="textadvid"
            color="input-primary"
            value={formData.textadvid}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="text"
            id="advname"
            name="advname"
            label="advname"
            color="input-primary"
            value={formData.advname}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="text"
            id="body"
            name="body"
            label="body"
            color="input-primary"
            value={formData.body}
            onChange={handler.trakeChange}
            required
          />
          <Input
            id="link"
            type="text"
            name="link"
            label="link"
            value={formData.link}
            color="input-primary"
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
