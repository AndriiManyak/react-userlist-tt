import React from 'react';
import PropTypes from 'prop-types';
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

Pagination.propTypes = {
  totalElements: PropTypes.number.isRequired,
  elementsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
  selectNextPage: PropTypes.func.isRequired,
  selectPreviousPage: PropTypes.func.isRequired,
};
