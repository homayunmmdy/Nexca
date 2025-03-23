import React from "react";
import { SectionsTitr } from "../atoms";
const SingleCard: React.FC = () => {
  return (
    <>
      <SectionsTitr>Ads Demo Page</SectionsTitr>
      <div className="card lg:card-side bg-base-100 shadow-xl my-5">
        <div className="skeleton h-80 w-2/4"></div>
        <div className="card-body">
          <div className="skeleton mt-2 h-7 w-full"></div>
          <div className="skeleton mt-2 h-7 w-full"></div>
          <div className="skeleton mt-2 h-7 w-3/5"></div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
