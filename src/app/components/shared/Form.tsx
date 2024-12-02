"use client";
import { Button, Input, Textarea } from "@/components";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaRegMessage, FaUser } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

interface Props {
  buttonText: string;
  initalData: any;
  API: string;
}

export const Form = ({ buttonText, initalData, API }: Props) => {
  const router = useRouter();
  const [formData, setFormData] = useState(initalData);

  const handler = new FormHandler(setFormData, API, router);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <>
      {handler.isLoading && (
        <span className="loading loading-ring loading-lg absolute"></span>
      )}
      <form className="rounded-xl bg-gray-100 p-5" onSubmit={handleSubmit}>
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
