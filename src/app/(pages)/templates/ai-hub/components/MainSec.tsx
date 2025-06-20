'use client'
import React from 'react';
import useGetSection from "@/hooks/useGetSection";
import {AIHUB_MAIN_QUERY_KEY} from "@/config/Constants";
import {PostsCashType} from "@/types/CashTypes";
import Image from "next/image";
import {motion} from "framer-motion";
import FormatTime from "@/app/(pages)/posts/components/FormatTime";
import {postLinkGenerator} from "@/util/ServerUtil";
import Link from "next/link";

function MainSec() {
    const {data} = useGetSection(AIHUB_MAIN_QUERY_KEY, -1, 8);
    const itemVariants = {
        hidden: {y: 20, opacity: 0},
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (
        <>
            {data?.map((item: PostsCashType) => {
                const postLink = postLinkGenerator(item._id, item.title);

                return (
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <Link href={postLink} className="md:flex">
                            <div className="md:w-1/2">
                                <Image
                                    src={item.imgurl}
                                    alt={item.title}
                                    width={608}
                                    height={396}
                                    loading='eager'
                                    fetchPriority='high'
                                    priority
                                    className="w-full h-64 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-8">
                                <Link href={postLink} title={item.title} className="text-2xl line-clamp-2 lg:line-clamp-3 md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                                    {item.title}
                                </Link>

                                <p className="text-slate-600 line-clamp-3 lg:line-clamp-5 text-lg mb-6 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 justify-center">
                                            <p className="font-medium text-slate-900">{item.author}</p>
                                            <p className="text-sm text-slate-500"><FormatTime
                                                timestamp={item.createdAt}/></p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )
            })}
        </>
    );
}

export default MainSec;