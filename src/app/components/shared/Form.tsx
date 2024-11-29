"use client";
import { Button, Input, Textarea } from "@/components";
import { CONTACTS_API_URL } from "@/config/apiConstants";
import { FormData } from "@/types/entities";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

interface Props {
  buttonText: string;
  formHandler?: (content: FormData) => void;
}

export const Form = ({ buttonText, formHandler }: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handler = new FormHandler(setFormData, CONTACTS_API_URL, router);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (!!formHandler) {
      formHandler(formData);
    } else {
      handler.submit(e, formData);
    }
  }

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
            {buttonText}
          </Button>
        </div>
      </form>
    </>
  );
};
