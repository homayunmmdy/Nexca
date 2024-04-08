"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <ul>
            {filteredData.map(item => (
                <li><a href={item.link}>{item.title}</a></li>
            ))}
        </ul>
    </div>
  )
}

export default ListAds