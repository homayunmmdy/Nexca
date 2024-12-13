"use client";
import { Input, Textarea } from "@/components";
import { CONTRIBUTION_API_URL } from "@/config/apiConstants";
import { ContributeCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormLayout } from "../shared";

const EditContributionForm = ({
  contribute,
}: {
  contribute: ContributeCashType;
}) => {
  const EDITMODE = contribute._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? contribute.title : "",
    description: EDITMODE ? contribute.description : "",
    link: EDITMODE ? contribute.link : "",
    date: EDITMODE ? contribute.date : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData, CONTRIBUTION_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, contribute._id);

  return (
    <FormLayout
      title={EDITMODE ? "Edit Contribution" : "New Contribution"}
      isLoading={handler.isLoading}
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mb-3 flex w-full flex-col justify-center gap-3 md:w-1/2"
      >
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
          id="link"
          name="link"
          label="Link"
          color="textarea-primary"
          value={formData.link}
          onChange={handler.trakeChange}
        />
        <Input
          type="datetime-local"
          id="date"
          name="date"
          placeholder="date"
          label="Date"
          value={formData.date}
          color="input-primary"
          onChange={handler.trakeChange}
          style="w-full"
          required
        />
        <Input
          type="submit"
          style="btn btn-active btn-primary"
          value={EDITMODE ? "Save" : "Post"}
        />
      </form>
    </FormLayout>
  );
};

export default EditContributionForm;
