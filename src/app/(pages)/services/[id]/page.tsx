"use client";
import {LinearAds} from "@/components/ads";
import PostCard from "@/components/organisms/postsSection/PostCard";
import {POST_API_URL} from "@/config/apiConstants";
import {ALL_POSTS_QUERY_KEY} from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import {PostsCashType} from "@/types/CashTypes";
import {GetParameterId} from "@/util/Util";
import React from "react";
import NotFound from "../../[...not_found]/not-found";
import ServicesNav from "../../demo/components/ServicesNav";
import ServicesImg from "./components/ServicesImg";
import PostsSkeleton from "@/components/organisms/postsSection/skeleton/PostsSkeleton";
import {Container} from "@/components/atoms";

const ServicesPage: React.FC = () => {
    const id = GetParameterId(10);
    const {data: posts, loading} = useFetch(ALL_POSTS_QUERY_KEY, POST_API_URL);

    if (loading) {
        return (
            <Container className="mb-4 md:mb-8">
                <ServicesNav/>
                <PostsSkeleton/>
            </Container>
        );
    }

    const filteredData = posts?.filter(
        (item: PostsCashType) => item.services == id
    );

    if (!filteredData || filteredData.length == 0) {
        return NotFound();
    }

    const sortedByTime = filteredData.sort(
        (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date }
        ) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
    );

    return (
        <>
            <title>
                Explore our posts in each services | Nexca | The Ultimate Admin Panel
            </title>
            <Container className="mb-4 md:mb-8">
                <ServicesNav/>
                <div className="grid grid-cols-12 md:gap-9">
                    <div className="col-span-12 md:col-span-9">
                        <ServicesImg/>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <LinearAds id={2}/>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                    {sortedByTime.map((item: PostsCashType) => (
                        <PostCard key={item._id} post={item}/>
                    ))}
                </div>
            </Container>

        </>
    );
};

export default ServicesPage;
