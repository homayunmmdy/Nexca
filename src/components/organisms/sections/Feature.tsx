import { FeaturesType } from "@/types/entities";
import React from "react";

interface Props {
  data: FeaturesType;
}

const Feature: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      <div className="relative pl-16" key={data.id}>
        <div className="text-base font-semibold leading-7 ">
          <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-700">
            {data.icon}
          </div>
          <h3 className='font-bold md:text-2xl'>{data.title}</h3>
        </div>
        <div className="mt-2 text-base leading-7">{data.description}</div>
      </div>
    </>
  );
};

export default Feature;
