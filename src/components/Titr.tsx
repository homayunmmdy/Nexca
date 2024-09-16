import { TitrType } from "@/types/entities";
import React from "react";

const Titr = ({ title, item, style }: TitrType) => {
  return (
    <h2 className={`border-b-2 border-gray-600 font-bold my-3 ${item} p-2 ${style}`}>
      {title}
    </h2>
  );
};

export default Titr;
