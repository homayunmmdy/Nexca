"use client";
import {RELEASE_API_URL} from "@/config/apiConstants";
import {TIMELINE_KEY} from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import {FaEdit} from "react-icons/fa";
import {DeleteBtn} from "@/components/molecules";
import {ReleaseCashType} from "@/types/CashTypes";
import {Button} from "@/components/atoms";
import RouteConfig from "@/config/RouteConfig";
import {checkMaster} from "@/util/Util";
import ReleaseSec from "@/app/(pages)/release/components/ReleaseSec";

const ReleasePage: React.FC = () => {
    const {data} = useFetch(TIMELINE_KEY, RELEASE_API_URL);

    const sortedByTime = data?.sort(
        (
            a: { createdAt: string | number | Date },
            b: { createdAt: string | number | Date }
        ) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
    );


    return (
        <>
            <ul className="timeline timeline-vertical timeline-snap-icon p-6 max-md:timeline-compact">
                {sortedByTime?.map((item: ReleaseCashType, index: number) =>
                    <ReleaseSec item={ item} index={index} />
                )}
            </ul>
        </>
    );
};

export default ReleasePage;