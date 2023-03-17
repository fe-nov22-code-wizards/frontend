import React from 'react';
import './Pagination.scss';

type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (arg0: number) => void;
  loading: boolean;
  prevPage: () => void;
  nextPage: (num: number) => void;
};

export const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  loading,
  prevPage,
  nextPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

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
            onClick={() => nextPage(pageNumber.length)}
          >
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};
