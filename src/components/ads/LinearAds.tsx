"use client"
import { TEXTADV_API_URL } from "@/config/apiConstants";
import { TextAdvCashType } from "@/types/entities";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React from "react";
import { FaCircleDot } from "react-icons/fa6";
import LinearAdsLoading from "./LinearAdsLoading";

const LinearAds = () => {
  const { data, isLoading } = useQuery<TextAdvCashType[]>({
    queryKey: ["textadv"],
    queryFn: () =>
      axios.get<TextAdvCashType[]>(TEXTADV_API_URL).then((res) => res.data),
  });

  if (isLoading) {
    return <LinearAdsLoading />;
  }

  
  //@ts-ignore
  const filteredData = data?.data?.filter((item) => item.textadvid == 1);
  console.log("filter",filteredData)
  const ads = filteredData?.slice(-12);

  return (
    <>
      <h2 className="border-b-2 border-gray-600 font-bold my-3 text-center p-2">
        Ads Demo Page
      </h2>
      <ul className="flex flex-col gap-4 mb-3">
        {/* @ts-ignore */}
        {ads.map((adv) => (
          <li
            key={adv._id}
            className="group flex p-2 gap-2 items-center border-dotted border-2 border-gray-400 rounded-xl hover:border-gray-900 hover:border-solid cursor-pointer"
          >
            <FaCircleDot size={28} color="#4338CA" />
            <Link
              className="group-hover:text-indigo-600 font-semibold truncate"
              href={adv.link}
            >
              {adv.body}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LinearAds;
