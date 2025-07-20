"use client";
import { Button, Input } from "@/components/atoms";
import { useEmailForm } from "@/hooks/useEmailForm ";
import { Toaster } from "react-hot-toast";
import { GrFormNextLink } from "react-icons/gr";
import {AllowedColors} from "@/types/AllowedOptions";
import {motion} from "framer-motion";

const EmailListForm = ({btnColor= 'btn-primary' } : {bthColor?:`btn-${AllowedColors}`}) => {
  const { formData, handleSubmit, handleChange } = useEmailForm();

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          color="input-primary"
          placeholder="Please Enter Your Email here"
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          className='text-black'
          value={formData.email}
        />
        <Button className="rounded-full" color={btnColor} type="submit" whileHover={{ scale: 1.02 }}>
          <GrFormNextLink size={24} /> Subscribe
        </Button>
      </form>
    </>
  );
};

export default EmailListForm;
