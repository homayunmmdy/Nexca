"use client";
import { Button, Input } from "@/components";
import { EMAIL_API_URL } from "@/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GrFormNextLink } from "react-icons/gr";

const EmailListForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
  });

  const handler = new FormHandler(setFormData, EMAIL_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData);

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        style="w-full"
        color="input-primary"
        placeholder="Please Enter Your Email here"
        onChange={handler.trakeChange}
        type="email"
        id="email"
        name="email"
        value={formData.email}
      />
      <Button className="rounded-full" color="btn-primary" type="submit">
        <GrFormNextLink size={24} /> Subscribe
      </Button>
    </form>
  );
};

export default EmailListForm;
