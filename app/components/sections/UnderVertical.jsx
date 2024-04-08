"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const UnderVertical = ({secid}) => {
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
                <li >{item.title}</li>
            ))}
        </>
    )
}

export default UnderVertical