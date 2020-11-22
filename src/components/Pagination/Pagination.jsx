/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';

import './Pagination.scss';

export const Pagination = React.memo(
  ({
    totalElements,
    elementsPerPage,
    selectedPage,
  }) => {
    const pagesAmount = Math.ceil(totalElements / elementsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesAmount; i += 1) {
      pages.push(i);
    }

    console.log(pages);

    return (
      <nav className="Pagination">
        <ul className="Pagination__list">
          <li className="Pagination__item">
            <button
              type="button"
              className="Pagination__button"
            >
              Previous
            </button>
          </li>
          {pages.map(page => (
            <li key={page}>
              <button
                type="button"
                className="Pagination__button"
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="Pagination__button"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    );
  },
);
