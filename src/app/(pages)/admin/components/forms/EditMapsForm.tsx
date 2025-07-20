"use client";
import { Button, Input, Textarea } from "@/components/atoms";
import SpeechToText from "@/components/organisms/SpeechToText";
import {
  MAPS_API_URL,
  POST_API_URL,
  SECTIONS_API_URL,
  SERVICES_API_URL,
} from "@/config/apiConstants";
import { SECTIONS_QUERY_KEY, SERVICES_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import {MapsCashType, PostsCashType} from "@/types/CashTypes";
import FormHandler from "@/util/handler/FormHandler";
import { checkMaster } from "@/util/Util";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryList, SelectField, SelectFiledSkeleton } from "../elements";
import { FormLayout, ImagePreview } from "../shared";
import TiptapEditor from "../TiptapEditor";
import CategoriesForm from "./CategoriesForm";
import { templatesData } from "@/config/tempaltes";
import {AF_MAP_DATA} from "@/config/maps";
import {CountriesMapData} from "@/config/countries";
import {getProvinceData} from "@/config/getProvinceData";

const EditMapsForm = ({ post }: { post: MapsCashType }) => {
  const EDITMODE = post._id !== "new";
  const router = useRouter();
  let master = checkMaster();

  const startingTicketData = {
    title: EDITMODE ? post.title : "",
    description: EDITMODE ? post.description : "",
    body: EDITMODE ? post.body : "",
    country: EDITMODE ? post.country : "1",
    province: EDITMODE ? post.province : "1",
    imgurl: EDITMODE ? post.imgurl : "",
    imgAlt: EDITMODE ? post.imgAlt : "",
    source: EDITMODE ? post.source : "",
    author: master ? "masterEditor" : EDITMODE ? post.author : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const handler = new FormHandler(setFormData, MAPS_API_URL, router);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    handler.submit(e, formData, post._id);

  return (
    <FormLayout
      title={EDITMODE ? "Edit Content" : "New Content"}
      isLoading={handler.isLoading}
    >
      <form
        onSubmit={handleSubmit}
        method="post"
        className="mb-3 flex w-full flex-col gap-3 md:flex-row"
      >
        <div className="w-full md:w-1/2">

          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <div className="w-full">
              <SelectField
                  id="country"
                  name="country"
                  label="country"
                  value={formData.country}
                  onChange={handler.trakeChange}
                  options={CountriesMapData}
              />
            </div>
            <div className="w-full">
              <SelectField
                  id="province"
                  name="province"
                  label="province"
                  value={formData.province}
                  onChange={handler.trakeChange}
                  options={getProvinceData(formData.country)}
              />
            </div>
          </div>
          <Input
            type="text"
            id="title"
            name="title"
            label="Title"
            className="w-full mb-2"
            color="input-primary"
            value={formData.title}
            onChange={handler.trakeChange}
            required
          />
          <Textarea
            id="description"
            name="description"
            className="w-full mb-2"
            color="textarea-primary"
            label="description"
            value={formData.description}
            onChange={handler.trakeChange}
          />
          <Input
            type="text"
            id="source"
            name="source"
            label="source"
            className="w-full mb-2"
            color="input-primary"
            value={formData.source}
            onChange={handler.trakeChange}
          />
          <SpeechToText />
          <Button
            type="submit"
            color="btn-primary"
            aria-label={EDITMODE ? "Save" : "Post"}
            className="btn-active mt-3 hidden w-full md:block"
          >
            {EDITMODE ? "Save" : "Post"}
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <ImagePreview
            imgurl={formData.imgurl}
            alt={formData.imgAlt}
            title={formData.title}
            onChange={handler.trakeChange}
          />
          <Input
            type="text"
            id="imgAlt"
            name="imgAlt"
            label="Image Alt Text"
            className="w-full mb-2"
            color="input-primary"
            value={formData.imgAlt}
            onChange={handler.trakeChange}
            placeholder="Describe the image for accessibility (alt text)"
          />
          <div className="text-xs text-warning mb-2">Alt text helps screen readers describe images. If left blank, the image will be ignored by screen readers.</div>
          <div id="tiptap-style">
            <label htmlFor="body" className="label">
              Body
            </label>
            <TiptapEditor
              content={formData.body}
              onChange={handler.trakeBodyChanges}
            />
          </div>
          {!master && (
            <Input
              type="text"
              id="author"
              name="author"
              label="author"
              className="w-full mb-2"
              color="input-primary"
              value={formData.author}
              onChange={handler.trakeChange}
            />
          )}
          <Button
            type="submit"
            color="btn-primary"
            aria-label={EDITMODE ? "Save" : "Post"}
            className="btn-active mt-3 block w-full md:hidden"
          >
            {EDITMODE ? "Save" : "Post"}
          </Button>
        </div>
      </form>
    </FormLayout>
  );
};

export default EditMapsForm;
