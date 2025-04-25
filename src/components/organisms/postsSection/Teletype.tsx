'use client'
import {useEffect, useState} from "react";
import useGetSection from "@/hooks/useGetSection";
import {TELETYPE_QUERY_KEY} from "@/config/Constants";
import {PostsCashType} from "@/types/CashTypes";
import {Container} from "@/components/atoms";

export default function Teletype() {
    const {data} = useGetSection(TELETYPE_QUERY_KEY, -1, 7);

    const [displayedText, setDisplayedText] = useState('');
    const [postIndex, setPostIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const titles = data?.map((post: PostsCashType) => post.title.slice(0, 85)) || [];

    useEffect(() => {
        if (titles.length === 0) return;

        if (charIndex <= titles[postIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText(titles[postIndex].slice(0, charIndex));
                setCharIndex((prev) => prev + 1);
            }, 50); // typing speed
            return () => clearTimeout(timeout);
        } else {
            // After a full title is typed, pause before moving to the next
            const pause = setTimeout(() => {
                setCharIndex(0);
                setPostIndex((prev) => (prev + 1) % titles.length);
            }, 2000); // pause between titles
            return () => clearTimeout(pause);
        }
    }, [charIndex, postIndex, titles]);

    return (
        <div
            className="sticky top-[85px] mt-[-42px] z-10 w-full hidden lg:block backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md">
            <Container className="px-3 sm:px-4">
                <div className="flex items-center justify-between h-12">
                    <div className="flex-1">
                        <h1
                            className="text-lg md:text-xl truncate font-medium tracking-tight transition-all  duration-300 ease-in-out hover:text-indigo-600 "
                        >
                            {displayedText}
                            <span className="animate-pulse">|</span>
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                                <span
                                    className="text-gray-600 dark:text-gray-300 text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                    {new Date().toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </span>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
