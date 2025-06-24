import React from "react";
import { SectionsTitr } from "../atoms";

const LinearAdsLoading: React.FC = () => {
  return (
    <>
      <SectionsTitr>Ads Default Template</SectionsTitr>
      <div className="flex flex-col gap-4 mb-3">
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
        <div className="skeleton w-full h-11"></div>
      </div>
    </>
  );
};

export default LinearAdsLoading;
