import React from "react";
import { MainSec, PostsSec, SingleCard, VerticalPostsSec  } from "@/components";
import SubNavbar from "./components/SubNavbar";

const DemoPage = () => {
  return (
    <>
      <SubNavbar />
      <div className="w-[94%] md:w-[92%] mx-auto pt-12">
        <MainSec />
        <PostsSec />
        <SingleCard />
        <VerticalPostsSec />
      </div>
    </>
  );
};

export default DemoPage;
