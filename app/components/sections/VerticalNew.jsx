import React from 'react'

const VerticalNew = ({ post }) => {
    return (
        <div>
            <a href={`/Posts/${post._id}`} className="card w-96 bg-base-100 shadow-xl">
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

export default VerticalNew