import React from 'react'

const HorizontalNew = ({ post }) => {
    return (
        <div>
            <a href={`/Posts/${post._id}`} className="card card-side bg-base-100 h-[200px] shadow-xl">
                <figure><img
                    src={post.imgurl}
                    alt={post.title} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                </div>
            </a>
        </div>
    )
}

export default HorizontalNew