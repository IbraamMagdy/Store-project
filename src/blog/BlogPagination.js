import React, { useState } from 'react';

const BlogPagination = ({ totalPages, currentPage, onPageChange }) => {
  const [page, setPage] = useState(currentPage);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      onPageChange(page + 1); // Pass the new page number to the parent component
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    onPageChange(pageNum); // Pass the new page number to the parent component
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <div className="page-buttons">
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            className={page === pageNum ? 'active' : ''}
            onClick={() => handlePageClick(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
      <button
        className="next-button"
        onClick={handleNextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default BlogPagination;