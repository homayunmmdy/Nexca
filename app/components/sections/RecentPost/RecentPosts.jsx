"use client"
import { POST_API_URL } from '@/app/config/apiConstants';
import React, { useEffect, useState } from 'react'
import RecentPost from './RecentPost';
import axios from 'axios';

const RecentPosts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [recentSize] = useState(-3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const postResponse = await axios.get(POST_API_URL);
                setPosts(postResponse.data.data.slice(recentSize));
                setLoading(false);

            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [recentSize]);
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">

                {posts?.map((Post, _index) => (
                    <RecentPost id={_index} key={_index} post={Post} />
                ))}
            </ul>
        </>
    )
}

export default RecentPosts