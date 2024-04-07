const MainNew = ({ post }) => {
    return (
      <>
        <a href={`/Posts/${post._id}`}>
          <div className="relative  w-full h-full bg-base-100 shadow-xl  rounded-xl">
            <figure className="w-full h-full">
              <img
                src={post.imgurl}
                alt={post.title}
                className="w-full h-full aspect-video object-cover rounded-xl"
              />
            </figure>
            <div className="card-body absolute bottom-2 text-white w-full">
              <h2 className="text-lg truncate">{post.title}</h2>
              <p className="truncate">{post.description}</p>
            </div>
          </div>
        </a>
      </>
    );
  };
  
  export default MainNew;