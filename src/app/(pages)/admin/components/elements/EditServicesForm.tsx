"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormField } from ".";
import { Input } from "@/components";
import { SERVICES_API_URL } from "@/config/apiConstants";
import Image from "next/image";

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
  const [loading, setLoading] = useState(false);

  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = EDITMODE
      ? `${SERVICES_API_URL}/${data._id}`
      : `${SERVICES_API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      setLoading(false);
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} services`);
    }

    router.refresh();
    router.push("/admin");
  };
  return (
    <>
      <div className="flex justify-center">
        {loading && (
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
            id="name"
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormField
            id="secid"
            type="number"
            name="secid"
            label="secid"
            value={formData.secid}
            onChange={handleChange}
            required
          />
          <FormField
            id="description"
            name="description"
            type="textarea"
            label="Lead"
            value={formData.description}
            onChange={handleChange}
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
