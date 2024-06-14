"use client";
import FormField from "@/app/components/FormField";
import { PUBLICATIONS_API_URL } from "@/app/config/apiConstants";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditPublicationForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? ticket.title : "",
    description: EDITMODE ? ticket.description : "",
    author: EDITMODE ? ticket.author : "",
    lang: EDITMODE ? ticket.lang : "",
    body: EDITMODE ? ticket.body : "",
    imgurl: EDITMODE ? ticket.imgurl : "",
    relaseTime: EDITMODE ? ticket.relaseTime : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = EDITMODE ? `${PUBLICATIONS_API_URL}/${ticket._id}` : `${PUBLICATIONS_API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} publications`);
    }

    router.refresh();
    router.push("/admin/publication");
  };

  return (
    <div className="flex justify-center">
      {loading && <span className="absolute loading loading-ring loading-lg"></span>}
      <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full md:w-1/2 mb-3">
        <h3 className="text-center font-semibold text-2xl">{EDITMODE ? "Edit Post" : "New Post"}</h3>
        <FormField id="imgurl" name="imgurl" label="Image Link" value={formData.imgurl} onChange={handleChange} />
        <FormField id="title" name="title" label="Title" value={formData.title} onChange={handleChange} required />
        <FormField id="author" name="author" label="Author" value={formData.author} onChange={handleChange} required />
        <FormField id="lang" name="lang" label="Lang" value={formData.lang} onChange={handleChange} required />
        <FormField id="description" name="description" type="textarea" label="Lead" value={formData.description} onChange={handleChange} />
        <label>Relase  Time</label>
        <input
          id="relaseTime"
          name="relaseTime"
          type="datetime-local"
          onChange={handleChange}
          value={formData.relaseTime}
          className="input input-bordered input-primary w-full"
        />
        <FormField id="body" name="body" type="textarea" label="Body" value={formData.body} onChange={handleChange} required />
        <input type="submit" className="btn btn-active btn-primary" value={EDITMODE ? "Save" : "Post"} />
      </form>
    </div>
  );
};

export default EditPublicationForm;