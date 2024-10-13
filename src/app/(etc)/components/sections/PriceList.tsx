import { PriceData } from "@/etc/config/staticData";
import React from "react";
import { PriceItem } from "./PriceItem";

const PriceList: React.FC = () => {
  return (
    <>
      <div className="flex  items-center justify-center ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
            <h2 className="mb-10 text-4xl font-bold tracking-tight ">
              Pay once, use forever
            </h2>
          </div>
          <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            {/* @ts-ignore */}
            <PriceItem data={PriceData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
