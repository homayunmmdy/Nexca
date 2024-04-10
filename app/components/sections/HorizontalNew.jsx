import React from 'react'

const HorizontalNew = ({ post }) => {
    return (
        <div>
            <a href={`/Posts/${post._id}`} >
                <div className='flex gap-3 px-3'>
                    <section className="card card-side bg-base-100 h-[200px] shadow-xl ">
                        <img
                            src={post.imgurl}
                            alt={post.title}
                            className='rounded-xl'
                        />
                    </section>
                    <h2 className="card-title">{post.title}</h2>
                </div>
            </a>
        </div>
    )
}

export default HorizontalNew