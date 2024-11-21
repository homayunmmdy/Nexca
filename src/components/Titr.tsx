import { TitrType } from "@/types/entities";
import React from "react";

const Titr: React.FC<TitrType> = ({ title, item, style , borderColor }: TitrType) => {
  return (
    <span className={`border-b-2 ${borderColor ? `border-${borderColor}` : 'border-gray-600'} block font-bold my-3 p-2  ${item} ${style}`}>
      {title}
    </span>
  );
};

export default Titr;
