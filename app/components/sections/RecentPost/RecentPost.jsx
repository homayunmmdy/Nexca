import Link from 'next/link'
import React from 'react'

const RecentPost = ({ post }) => {
    return (
        <>
            <li className="relative flex flex-col sm:flex-row xl:flex-col items-start">
                <Link href={`/Posts/${post._id}`}>
                    <img
                        src={post.imgurl}
                        alt={post.title}
                        className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640" />
                    <div className="order-1 sm:ml-6 xl:ml-0">
                        <h3 className="mb-1 text-slate-900 font-semibold">
                            {post.title}
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600">
                            <p>{post.description}</p>
                        </div>
                    </div>

                </Link>
            </li>
        </>
    )
}

export default RecentPost