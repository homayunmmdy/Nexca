"use client";
import { Button, Input } from "@/components/atoms";
import { useEmailForm } from "@/hooks/useEmailForm ";
import { Toaster } from "react-hot-toast";
import { GrFormNextLink } from "react-icons/gr";

const EmailListForm = () => {
  const { formData, handleSubmit, handleChange } = useEmailForm();

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          style="w-full"
          color="input-primary"
          placeholder="Please Enter Your Email here"
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          value={formData.email}
        />
        <Button className="rounded-full" color="btn-primary" type="submit">
          <GrFormNextLink size={24} /> Subscribe
        </Button>
      </form>
    </>
  );
};

export default EmailListForm;
