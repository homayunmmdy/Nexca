"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCircleDot } from "react-icons/fa6";

const UnderVertical = ({ secid }) => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/Posts`);
                setData(response.data.posts);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    if (!data) {
        return <h1>loading</h1>;
    }
    const filteredData = data.filter((item) => item.section == secid);
    return (
        <>
            {filteredData.map((item) => (
                <li className="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid">
                    <FaCircleDot color='#E51E1E' />
                    <span class="hover:text-red-600 font-semibold truncate">{item.title}</span>
                </li>
            ))}
        </>
    )
}

export default UnderVertical