const MainNew = ({ post }) => {
  return (
    <>
      <a href={`/Posts/${post._id}`}>
        <div className="relative  w-full h-full bg-base-100 shadow-xl  rounded-xl">
          <figure className="w-full h-full">
            <img
              src={post.imgurl}
              alt={post.title}
              className="bg-gray-300 w-full h-full aspect-video object-cover rounded-xl brightness-90"
            />
          </figure>
          <div className="card-body absolute bottom-2 text-white w-full">
            <h2 className="text-lg truncate font-semibold hover:text-red-600">{post.title}</h2>
            <p className="truncate font-medium hover:text-red-600">{post.description}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default MainNew;