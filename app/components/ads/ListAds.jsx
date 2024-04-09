"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";

const ListAds = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Ads`);
        setData(response.data.ads);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  if (!data) {
    return <h1>loading</h1>;
  }
  const filteredData = data.filter((item) => item.advsec == 1);
  return (
    <div>
      <ul className="mb-5 flex flex-col gap-4">
        {filteredData.map(item => (
          <li className="flex p-2 gap-2 items-center border-dotted border-2 border-gray-400 rounded-xl hover:border-gray-900 hover:border-solid">
            <FaCircleDot color='#E51E1E' />
            <a className="hover:text-red-600 font-semibold truncate" href={item.link}>{item.title}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default ListAds