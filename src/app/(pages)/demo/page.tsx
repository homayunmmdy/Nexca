import React from "react";
import { SubNavbar } from "./components";
import { MainSec, PostsSec, SingleCard } from "@/components";

const DemoPage = () => {
  return (
    <>
      <SubNavbar />
      <div className="w-[94%] md:w-[92%] mx-auto pt-12">
        <MainSec />
        <PostsSec />
        <SingleCard />
      </div>
    </>
  );
};

export default DemoPage;
