"use client"
import useGetSection from '@/app/hooks/useGetSection'
import PostCard from './PostCard'
import PostsSkeleton from './PostsSkeleton'
import { useState } from 'react'
import { POST_API_URL } from "@/app/config/apiConstants";

const PostsSec = () => {
    const { data, loading } = useGetSection(POST_API_URL, -8, 2);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (loading) {
        return <PostsSkeleton />
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="mx-auto py-6">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5">
                    {data?.map(post => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </div>
                <div className="relative block md:hidden">
                    <div className="flex overflow-x-auto snap-x snap-mandatory">
                        {data?.map((post, index) => (
                            <div
                                key={post._id}
                                className={`snap-center ${index === currentIndex ? 'block' : 'hidden'}`}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-blue-800 rounded-full text-white p-2"
                        onClick={handlePrev}
                    >
                        &#8592;
                    </button>
                    <button
                        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-blue-800 rounded-full text-white p-2"
                        onClick={handleNext}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </>
    )
}

export default PostsSec