'use client'
import React from 'react';
import {AF_MAP_CONTENT} from "@/config/Constants";
import useGetMapContent from "@/hooks/useGetMapContent";
import {ErrorText, Spinner} from "@/components/atoms";
import {MapsCashType} from "@/types/CashTypes";
import Image from "next/image";

interface Props {
    provinceID: number,
    countryID?: number
}

const AfContent = ({provinceID, countryID = 1}: Props) => {
    const {data, loading} = useGetMapContent(AF_MAP_CONTENT, -1, countryID, provinceID);

    if (loading) {
        return <Spinner/>
    }
    return (
        <div className='grid grid-cols-2 gap-4'>
            {data.length > 0 ? (
                data?.map((content: MapsCashType) => (
                    <div key={content._id} className="card bg-base-100 w-full shadow-sm">
                        <figure>
                            <Image
                                width={290}
                                height={171}
                                src={content.imgurl}
                                title={content.title}
                                alt={content.title}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title line-clamp-2">
                                {content.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='line-clamp-3'>{content.description}</p>
                        </div>
                    </div>
                ))
            ) : <ErrorText>No Content found for this province.</ErrorText>}
        </div>
    );
};

export default AfContent;