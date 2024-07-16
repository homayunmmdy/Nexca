"use client"
import { useState } from 'react';
import RecentPost from './RecentPost';
import useGetLatestPosts from '@/app/hooks/useGetLatestPosts';

const RecentPosts = () => {
    const [recentSize] = useState(-5);
    const { posts, loading } = useGetLatestPosts(recentSize);
    return (
        <>
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start py-8">

                {posts?.map((Post, _index) => (
                    <RecentPost id={_index} key={_index} post={Post} />
                ))}
            </ul>
        </>
    )
}

export default RecentPosts