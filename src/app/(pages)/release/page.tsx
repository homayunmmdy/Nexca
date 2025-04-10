"use client";
import { RELEASE_API_URL } from "@/config/apiConstants";
import { TIMELINE_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import {DeleteBtn} from "@/components/molecules";
import {ReleaseCashType} from "@/types/CashTypes";
import {Button} from "@/components/atoms";

const ReleasePage: React.FC = () => {
    const { data } = useFetch(TIMELINE_KEY, RELEASE_API_URL);

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
                {sortedByTime?.map((item: ReleaseCashType, index: number) => (
                    <li key={item._id}>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div
                            className={`${
                                index % 2 === 0
                                    ? "timeline-start md:text-end"
                                    : "timeline-end md:text-start"
                            } mb-10 `}
                        >
                            {/* <time className="font-mono italic">1984</time> */}
                            <div className="text-lg font-black">{item.title} </div>
                            <p>{item.description}</p>

                            <span
                                className={`flex gap-3 my-2 ${
                                    index % 2 === 0 ? "justify-end" : "justify-start"
                                } `}
                            >
                <Link
                    href={`/admin/release/${item._id}`}
                    style={{ display: "contents" }}
                >
                  <Button color="btn-warning" type="button">
                    <FaEdit />
                  </Button>
                </Link>
                <DeleteBtn path="release" id={item._id} />
              </span>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ReleasePage;