/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { PaginationButton } from '../PaginationButton/PaginationButton';
import { PaginationPageButton }
  from '../PaginationPageButton/PaginationPageButton';

import './Pagination.scss';

export const Pagination = React.memo(
  ({
    totalElements,
    elementsPerPage,
    currentPage,
    changePage,
    selectNextPage,
    selectPreviousPage,
  }) => {
    const pagesAmount = Math.ceil(totalElements / elementsPerPage);
    const pages = [];

    for (let i = 1; i <= pagesAmount; i += 1) {
      pages.push(i);
    }

    console.log(pages);
    console.log(currentPage);

    return (
      <nav className="Pagination">
        <ul className="Pagination__list">
          <PaginationButton
            text="Previous"
            handleClick={selectPreviousPage}
            isDisabled={currentPage === 1}
          />
          {pages.map(page => (
            <PaginationPageButton
              key={page}
              pageNumber={page}
              handleClick={changePage}
              isActive={page === currentPage}
            />
          ))}
          <PaginationButton
            text="Next"
            handleClick={selectNextPage}
            isDisabled={currentPage === pagesAmount}
          />
        </ul>
      </nav>
    );
  },
);
