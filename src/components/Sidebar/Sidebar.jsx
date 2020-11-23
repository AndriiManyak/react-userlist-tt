/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getUser } from '../../store';

export const Sidebar = ({ randomIndex }) => {
  const randomUser = useSelector(getUser(randomIndex));

  console.log(randomUser);
  console.log(randomIndex);

  return (
    <h2>
      {`${randomUser.name} ${randomUser.surname}`}
    </h2>
  );
};

Sidebar.propTypes = {
  randomIndex: PropTypes.number.isRequired,
};
