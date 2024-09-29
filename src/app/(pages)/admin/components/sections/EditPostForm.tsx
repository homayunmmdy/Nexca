"use client";
import { Input } from "@/components";
import {
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/config/apiConstants";
import { SECTIONS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormField, SelectField } from "../elements";

//@ts-ignore
const EditPostForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? ticket.title : "",
    description: EDITMODE ? ticket.description : "",
    body: EDITMODE ? ticket.body : "",
    section: EDITMODE ? ticket.section : "1",
    services: EDITMODE ? ticket.services : "1",
    imgurl: EDITMODE ? ticket.imgurl : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData,POST_API_URL,router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => handler.submit(e, formData, ticket._id);

  const { data: services } = useFetch(SERVICES_QUERY_KEY, SERVICES_API_URL);
  const { data: sections } = useFetch(SECTIONS_QUERY_KEY, SECTIONS_API_URL);

  return (
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
          {EDITMODE ? "Edit Post" : "New Post"}
        </h3>
        <div>
          <Image
            src={formData.imgurl}
            title={formData.title}
            alt={formData.title}
            height={390.938}
            width={695}
            className="w-full rounded-xl border border-indigo-500 aspect-video"
          />
        </div>
        <FormField
          id="imgurl"
          name="imgurl"
          label="Image Link"
          value={formData.imgurl}
          onChange={handler.trakeChange}
        />
        <FormField
          id="title"
          name="title"
          label="Title"
          value={formData.title}
          onChange={handler.trakeChange}
          required
        />
        <FormField
          id="description"
          name="description"
          type="textarea"
          label="Lead"
          value={formData.description}
          onChange={handler.trakeChange}
        />
        <FormField
          id="body"
          name="body"
          type="textarea"
          label="Body"
          value={formData.body}
          onChange={handler.trakeChange}
          required
        />
        {services && (
          <SelectField
            id="services"
            name="services"
            label="Services"
            value={formData.services}
            onChange={handler.trakeChange}
            options={services}
          />
        )}
        {sections && (
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
          type="submit"
          style="btn btn-active btn-primary"
          value={EDITMODE ? "Save" : "Post"}
        />
      </form>
    </div>
  );
};

export default EditPostForm;
