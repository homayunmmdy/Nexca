import React from 'react'
import { RxDividerVertical } from "react-icons/rx";

const VerticalNew = ({ post }) => {
    return (
        <div>
            <a href={`/Posts/${post._id}`} >
                <section className="card w-96 bg-base-100 shadow-xl">
                    <figure><img
                        className='rounded-xl'
                        src={post.imgurl}
                        alt={post.title}
                    /></figure>
                </section>
                <div className='flex gap-3 items-center mt-3'>
                    <RxDividerVertical size={30} className='text-gray-400 hover:text-red-600'/>
                    <h2 className=' text-2xl font-medium hover:text-red-600'>{post.title}</h2>
                </div>

            </a>
        </div>
    )
}

export default VerticalNew