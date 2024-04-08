"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import VerticalNew from "./VerticalNew";

const VerticalNews = () => {
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
    const filteredData = data.filter((item) => item.section == "3");
    return (
        <>
            {filteredData.map((filteredData, _index) => (
                <VerticalNew id={_index}  post={filteredData} />
            ))}
        </>
    )
}

export default VerticalNews