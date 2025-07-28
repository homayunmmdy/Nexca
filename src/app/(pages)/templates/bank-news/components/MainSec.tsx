import React from 'react';
import ImageCard from "@/app/(pages)/templates/(components)/ImageCard";
import {PostsCashType} from "@/types/CashTypes";
import {SectionController} from "@/util/controller/sectionsController";
import useGetSection from "@/hooks/useGetSection";
import {POSTS_QUERY_KEY} from "@/config/Constants";

const MainSec = () => {
    const { data } = useGetSection(POSTS_QUERY_KEY, -1, 15);

    return (
        <SectionController sectionId={15}>
            {data?.map((post : PostsCashType) => (
                <ImageCard key={post._id} post={post} />
            ))}
        </SectionController>
    );
};

export default MainSec;