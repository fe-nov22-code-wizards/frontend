import React from 'react';
import './Pagination.scss';

type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (arg0: number) => void;
  prevPage: () => void;
  nextPage: (num: number) => void;
};

export const Pagination: React.FC<Props> = ({
  postsPerPage,
  totalPosts,
  currentPage,
  paginate,
  prevPage,
  nextPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  if (totalPosts <= postsPerPage) {
    return null;
  }

  if (currentPage > pageNumber.length) {
    paginate(1);

    return null;
  }

  const maxPageNumbers = 4;
  const halfMaxPageNumbers = Math.floor(maxPageNumbers / 2);
  let startPage = Math.max(currentPage - halfMaxPageNumbers, 1);
  const endPage = Math.min(startPage + maxPageNumbers - 1, pageNumber.length);

  if (endPage - startPage < maxPageNumbers - 1) {
    startPage = Math.max(endPage - maxPageNumbers + 1, 1);
  }

  return (
    <div className="pagination">
      <ul>
        <li>
          <button disabled={currentPage === 1} onClick={prevPage}>
            &lt;
          </button>
        </li>
        {startPage > 1 && (
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                paginate(1);
              }}
            >
              1
            </a>
          </li>
        )}
        {startPage > 2 && (
          <li>
            <span className="ellipse"></span>
            <span className="ellipse"></span>
            <span className="ellipse"></span>
          </li>
        )}
        {pageNumber.slice(startPage - 1, endPage).map((number) => (
          <li key={number}>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                paginate(number);
              }}
              className={currentPage === number ? 'active' : ''}
            >
              {number}
            </a>
          </li>
        ))}
        {endPage < pageNumber.length - 1 && (
          <li>
            <div className="ellipse_dots">
              <span className="ellipse"></span>
              <span className="ellipse"></span>
              <span className="ellipse"></span>
            </div>
          </li>
        )}
        {endPage < pageNumber.length && (
          <li>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                paginate(pageNumber.length);
              }}
            >
              {pageNumber.length}
            </a>
          </li>
        )}
        <li>
          <button
            disabled={currentPage === pageNumber.length}
            onClick={() => nextPage(currentPage + 1)}
          >
            &gt;
          </button>
        </li>
      </ul>
    </div>
  );
};
