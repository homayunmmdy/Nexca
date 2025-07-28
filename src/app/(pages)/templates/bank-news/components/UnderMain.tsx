'use client'
import React from 'react';
import PostCard from "@/components/organisms/postsSection/PostCard";
import {SectionController} from "@/util/controller/sectionsController";
import useGetSection from "@/hooks/useGetSection";
import {POSTS_QUERY_KEY} from "@/config/Constants";
import PostsSecSkeleton from "@/components/organisms/postsSection/skeleton/PostsSecSkeleton";
import {PostsCashType} from "@/types/CashTypes";

const UnderMain = () => {
    const { data, loading } = useGetSection(POSTS_QUERY_KEY, -9, 16);
    if (loading) {
        return <PostsSecSkeleton />;
    }
    return (
            <SectionController sectionId={16}>
                {data.map((post : PostsCashType) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </SectionController>
    );
};

export default UnderMain;