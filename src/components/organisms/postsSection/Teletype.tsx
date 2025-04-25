'use client'
import { useState, useEffect } from 'react';
import useGetSection from "@/hooks/useGetSection";
import {TELETYPE_QUERY_KEY} from "@/config/Constants";

export default function Teletype({  speed = 100 }) {
    const { data : text } = useGetSection(TELETYPE_QUERY_KEY, -1, 7);
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length && !isHovered) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (isHovered && !isComplete) {
            // Complete the text immediately on hover
            setDisplayText(text);
            setCurrentIndex(text.length);
            setIsComplete(true);
        } else if (currentIndex >= text.length && !isComplete) {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed, isHovered, isComplete]);

    return (
        <>
            <div className="sticky top-[85px] mt-[-40px] z-10 w-full hidden lg:block backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md">
                <div className="max-w-6xl mx-auto px-3 sm:px-4">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex-1">
                            <h1
                                className="text-lg md:text-xl truncate font-medium tracking-tight transition-all text-gray-800 dark:text-gray-200 duration-300 ease-in-out hover:text-indigo-600 border-b border-transparent hover:border-indigo-500"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {isHovered ? text : displayText}
                                {!isComplete && !isHovered && <span className="animate-pulse text-indigo-500">|</span>}
                            </h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center">
              <span className="text-gray-600 dark:text-gray-300 text-xs font-medium bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                {new Date().toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })}
              </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='pb-10'></p>
        </>
    );
}