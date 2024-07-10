const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center">
        {pageNumbers.map(number => (
          <li key={number} className={`mx-1 px-3 py-1 border ${currentPage === number ? 'bg-gray-200' : 'bg-white'} rounded cursor-pointer`} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;