"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { usePathname } from "next/navigation";
import { notFound } from 'next/navigation'
import MostTabs from '@/app/components/sections/MostTabs';

const ServicesPage = () => {
    const pathname = usePathname();
    const id = pathname.slice(10);
    const [data, setData] = useState();
    // const [post, setPost] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/Services`);
                setData(response.data.services);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     const fetchpost = async () => {
    //         try {
    //             const response = await axios.get(`/api/Posts`);
    //             setPost(response.post.posts);
    //             console.log(response.post.posts)

    //         } catch (error) {
    //             console.error("Error fetching post:", error);
    //         }
    //     };

    //     fetchpost();
    // }, []);

    // if (!post) {
    //     return <h1>loading</h1>;
    // }
    if (!data) {
        return <h1>loading</h1>;
    }
    const secids = data.map((item) => item.secid);
    // const filterPosts = post.filter((item) => item.service );
    if (secids.includes(parseInt(id))) {
        return (
            <div>
                <div className='px-6 sm:px-12'>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-8">
                            service page
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <MostTabs />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return notFound();
    }

}

export default ServicesPage