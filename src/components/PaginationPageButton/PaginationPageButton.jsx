/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

export const PaginationPageButton = ({
  pageNumber,
  isActive,
  handleClick,
}) => (
  <li className="Pagination__item">
    <button
      type="button"
      className={
        classNames(
          { Pagination__button: true },
          { 'Pagination__button--active': isActive },
        )
      }
      onClick={() => handleClick(pageNumber)}
    >
      {pageNumber}
    </button>
  </li>
);
