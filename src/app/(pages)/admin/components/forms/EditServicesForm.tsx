"use client";
import { Input, Textarea } from "@/components";
import { SERVICES_API_URL } from "@/config/apiConstants";
import { SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { ServicesCashType } from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const EditServicesForm = ({ data }: { data: ServicesCashType }) => {
  const EDITMODE = data._id !== "new";
  const router = useRouter();

  const startingData = {
    name: EDITMODE ? data.name : "",
    secid: EDITMODE ? data.secid : 1,
    imgurl: EDITMODE ? data.imgurl : "",
    description: EDITMODE ? data.description : "",
  };

  const [formData, setFormData] = useState(startingData);
  const { data: services } = useFetch(
    SERVICES_QUERY_KEY,
    SERVICES_API_URL
  );
 
  const handler = new FormHandler(setFormData, SERVICES_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    services.map((service : ServicesCashType) => {
      if (service.secid === formData.secid) {
        toast.error('Service id already exist try another');
        e.preventDefault();
      } else {
        handler.submit(e, formData, data._id);
      }
    });
    
  return (
    <>
      <div className="flex justify-center">
        {handler.isLoading && (
          <span className="loading loading-ring loading-lg absolute"></span>
        )}
        <form
          onSubmit={handleSubmit}
          method="post"
          className="mb-3 flex w-full flex-col gap-3 md:w-1/2"
        >
          <h3 className="text-center text-2xl font-semibold">
            {EDITMODE ? "Edit Services" : "New Services"}
          </h3>
          <div>
            <Image
              src={
                !formData.imgurl ? "/static/Image/logo.jpg" : formData.imgurl
              }
              title={formData.name}
              alt={formData.name}
              height={390.938}
              width={695}
              className="aspect-video w-full rounded-xl border border-indigo-500"
            />
          </div>
          <Input
            id="imgurl"
            type="text"
            name="imgurl"
            label="Image Link"
            color="input-primary"
            value={formData.imgurl}
            onChange={handler.trakeChange}
          />
          <Input
            id="name"
            type="text"
            name="name"
            label="Name"
            color="input-primary"
            value={formData.name}
            onChange={handler.trakeChange}
          />
          <Input
            id="secid"
            type="number"
            name="secid"
            label="secid"
            value={formData.secid}
            color="input-primary"
            onChange={handler.trakeChange}
            required
          />
          <Textarea
            id="description"
            name="description"
            label="description"
            color="textarea-primary"
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
