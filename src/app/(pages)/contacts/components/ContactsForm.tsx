"use client";
import { Button, Input, Textarea } from "@/components";
import { CONTACTS_API_URL } from "@/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

const ContactsForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handler = new FormHandler(setFormData, CONTACTS_API_URL, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);
  return (
    <>
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            color="input-primary"
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<FaUser />}
          />
        </div>
        <div className="mb-6">
          <Input
            type="email"
            name="email"
            color="input-primary"
            placeholder="Email Address"
            value={formData.email}
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<TfiEmail />}
          />
        </div>
        <div className="mb-6">
          <Textarea
            rows={6}
            name="message"
            placeholder="Message"
            value={formData.message}
            color="textarea-primary"
            onChange={handler.trakeChange}
            required={true}
            style="w-full"
            icon={<FaRegMessage />}
          />
        </div>
        <div>
          <Button type="submit" color="btn-primary" style="p-3 w-full">
            send
          </Button>
        </div>
      </form>
    </>
  );
};

export default ContactsForm;
