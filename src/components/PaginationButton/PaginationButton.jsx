import React from 'react';
import PropTypes from 'prop-types';

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

PaginationButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
