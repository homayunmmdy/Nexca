'use client'
import React from 'react';
import {AF_MAP_CONTENT} from "@/config/Constants";
import useGetMapContent from "@/hooks/useGetMapContent";
import {Spinner} from "@/components/atoms";
import {MapsCashType} from "@/types/CashTypes";

interface Props {
    provinceID : number,
    countryID?: number
}

const AfContent = ({provinceID, countryID = 1} : Props) => {
    const {data,loading} = useGetMapContent(AF_MAP_CONTENT, -1, countryID, provinceID);

    if(loading) {
        return <Spinner />
    }
    return (
        <div className='grid grid-cols-2 gap-4'>
            {data?.map((content : MapsCashType) => (
                <div key={content._id} className="card bg-base-100 w-full shadow-sm">
                    <figure>
                        <img
                            src={content.imgurl}
                            title={content.title}
                            alt={content.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title line-clamp-2">
                            {content.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p className='line-clamp-3'>{content.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AfContent;