import { LinearAds } from "@/components/ads";
import {
  CodingTabs,
  MainSec,
  PostsSec,
  SingleCardSec,
  SliderSec,
  VerticalPostsSec,
} from "@/components/sections";
import React from "react";
import ServicesNav from "./components/ServicesNav";

const DemoPage: React.FC = () => {
  return (
    <>
      <ServicesNav />
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
        <MainSec />
        <div className="grid grid-cols-12 md:gap-9">
          <div className="col-span-12 md:col-span-9">
            <PostsSec />
          </div>
          <div className="col-span-12 md:col-span-3">
            <LinearAds />
          </div>
        </div>
      </div>
      <div className="bg-indigo-600 p-3 sm:p-4 md:p-6 lg:p-9">
        <div className="mt-5' mx-auto w-[94%] md:w-[92%]">
          <SliderSec />
        </div>
      </div>
      <div className="mx-auto w-[94%] pt-2 md:w-[92%]">
        <SingleCardSec />
        <VerticalPostsSec />
        <CodingTabs />
      </div>
    </>
  );
};

export default DemoPage;
