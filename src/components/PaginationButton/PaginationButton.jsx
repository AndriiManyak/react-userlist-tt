/* eslint-disable react/prop-types */
import React from 'react';

export const PaginationButton = ({
  text,
  handleClick,
  isDisabled,
}) => (
  <li
    className="Pagination__item"
  >
    <button
      type="button"
      className="Pagination__button"
      onClick={handleClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  </li>
);
