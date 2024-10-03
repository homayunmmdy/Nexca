"use client";
import { Input } from "@/components";
import { SERVICES_API_URL } from "@/etc/config/apiConstants";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormField } from ".";

//@ts-ignore
const EditServicesForm = ({ data }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    name: EDITMODE ? data.name : "",
    secid: EDITMODE ? data.secid : 1,
    imgurl: EDITMODE ? data.imgurl : "",
    description: EDITMODE ? data.description : "",
  };

  const [formData, setFormData] = useState(startingData);
  const handler = new FormHandler(setFormData, SERVICES_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, data._id);
  return (
    <>
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
            {EDITMODE ? "Edit Services" : "New Services"}
          </h3>
          <div>
            <Image
              src={formData.imgurl}
              title={formData.name}
              alt={formData.name}
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
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handler.trakeChange}
          />
          <FormField
            id="secid"
            type="number"
            name="secid"
            label="secid"
            value={formData.secid}
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

export default EditServicesForm;
