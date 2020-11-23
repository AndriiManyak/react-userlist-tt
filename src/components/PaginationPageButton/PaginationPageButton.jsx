import React from 'react';
import PropTypes from 'prop-types';
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

PaginationPageButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
