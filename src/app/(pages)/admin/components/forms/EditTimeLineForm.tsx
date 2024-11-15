"use client";
import { Input } from "@/components";
import { TIMELINE_API_URL } from "@/config/apiConstants";
import { TimeLIneCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTimeLineForm = ({ data }: { data: TimeLIneCashType }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    title: EDITMODE ? data.title : "",
    date: EDITMODE ? data.date : "",
    description: EDITMODE ? data.description : "",
  };
  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, TIMELINE_API_URL, router);
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
            {EDITMODE ? "Edit TimeLine" : "New TimeLine"}
          </h3>
          <Input
            id="title"
            type="text"
            name="title"
            label="title"
            color="input-primary"
            value={formData.title}
            onChange={handler.trakeChange}
            required
          />
          <Input
            type="datetime-local"
            id="date"
            name="date"
            label="date"
            color="input-primary"
            value={formData.date}
            onChange={handler.trakeChange}
          />
          <Input
            type="text"
            id="description"
            name="description"
            label="description"
            color="input-primary"
            value={formData.description}
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

export default EditTimeLineForm;
