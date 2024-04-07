"use client"
import { useEffect, useState } from 'react';
import axios from "axios"

const MostTabs = () => {
    const [activeTab, setActiveTab] = useState(1);
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
    const latestNews = data.filter((item) => item.section == "2");
    const mostvisited = data.filter((item) => item.section == "3");

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex">
                <button
                    className={`flex-1 p-3 text-center ${activeTab === 1 ? 'bg-gray-400' : 'bg-gray-200'}`}
                    onClick={() => handleTabClick(1)}
                >
                    جدیدترین اخبار
                </button>
                <button
                    className={`flex-1 p-3 text-center ${activeTab === 2 ? 'bg-gray-400' : 'bg-gray-200'}`}
                    onClick={() => handleTabClick(2)}
                >
                    پربازدیدترین ها
                </button>
            </div>
            <div className="p-4">
                <div className={`${activeTab === 1 ? '' : 'hidden'}`}>
                    {latestNews.map((filteredData) => (
                        <p key={filteredData.id}>{filteredData.title}</p>
                    ))}

                </div>
                <div className={`${activeTab === 2 ? '' : 'hidden'}`}>
                    {mostvisited.map((filteredData) => (
                        <p key={filteredData.id}>{filteredData.title}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MostTabs