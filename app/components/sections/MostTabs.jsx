"use client"
import { useEffect, useState } from 'react';
import axios from "axios"
import { FaCircleDot } from "react-icons/fa6";

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
            <div className=' bg-neutral-700 p-2 rounded-lg'>
                <div className="flex">
                    <button
                        className={`flex-1 text-gray-100 p-1 mx-1 text-center rounded-md text-lg ${activeTab === 1 ? 'bg-gray-200 border-2 border-red-600 text-gray-900' : 'bg-neutral-700'}`}
                        onClick={() => handleTabClick(1)}
                    >
                        جدیدترین اخبار
                    </button>
                    <button
                        className={`flex-1 text-gray-100 p-1 mx-1 text-center rounded-md text-lg ${activeTab === 2 ? 'bg-gray-200 border-2 border-red-600 text-gray-900' : 'bg-neutral-700'}`}
                        onClick={() => handleTabClick(2)}
                    >
                        پربازدیدترین ها
                    </button>
                </div>
            </div>
            <div className="p-4">
                <ul className={`${activeTab === 1 ? '' : 'hidden'} mb-5 flex flex-col gap-4`}>
                    {latestNews.map((filteredData) => (
                        <a href={`/Posts/${filteredData._id}`}>
                            <li className="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid" key={filteredData.id}>
                                <FaCircleDot color='#E51E1E' />
                                <span className="hover:text-red-600 font-semibold truncate" >{filteredData.title}</span>
                            </li>
                        </a>
                    ))}

                </ul>
                <ul className={`${activeTab === 2 ? '' : 'hidden'} mb-5 flex flex-col gap-4`}>
                    {mostvisited.map((filteredData) => (
                        <a href={`/Posts/${filteredData._id}`}>
                            <li className="flex p-2 gap-2 items-center border-dotted border-b-2 border-gray-400 hover:border-gray-900 hover:border-solid" key={filteredData.id}>
                                <FaCircleDot color='#E51E1E' />
                                <span className="hover:text-red-600 font-semibold truncate" >{filteredData.title}</span>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MostTabs