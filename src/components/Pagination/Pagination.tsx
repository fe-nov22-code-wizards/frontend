import React from 'react';
import './Pagination.scss';

type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (arg0: number) => void;
  loading: boolean;
};

export const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  loading,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < pageNumber.length) {
      paginate(currentPage + 1);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className="pagination">
      <ul>
        <li>
          <button disabled={currentPage === 1} onClick={prevPage}>
            &lt;
          </button>
        </li>
        {pageNumber.map((number) => (
          <li key={number}>
            <a
              href={`page${number}`}
              onClick={() => paginate(number)}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === pageNumber.length}
            onClick={nextPage}
          >
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};
