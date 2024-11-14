"use client";
import { Input } from "@/components";
import { SECTIONS_API_URL } from "@/etc/config/apiConstants";
import { SectionCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditSectionForm = ({ data }: {data : SectionCashType}) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    name: EDITMODE ? data.name : "",
    secid: EDITMODE ? data.secid : 1,
  };

  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, SECTIONS_API_URL, router);
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
            {EDITMODE ? "Edit Section" : "New Section"}
          </h3>
          <Input
            id="name"
            type="text"
            name="name"
            label="Name"
            color="input-primary"
            value={formData.name}
            onChange={handler.trakeChange}
          />
          <Input
            id="secid"
            type="number"
            name="secid"
            label="secid"
            color="input-primary"
            value={formData.secid}
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

export default EditSectionForm;
