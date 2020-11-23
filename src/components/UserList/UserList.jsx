import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { User } from '../User/User';
import { getPaginatedUsers } from '../../store';

export const UserList = React.memo(
  ({
    currentPage,
    usersPerPage,
  }) => {
    const currentUsers = useSelector(
      getPaginatedUsers(currentPage, usersPerPage),
    );

    return (
      <>
        <ul>
          {currentUsers.map(user => (
            <li
              key={user.id}
            >
              <User
                {...user}
              />
            </li>
          ))}
        </ul>
      </>
    );
  },
);

UserList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
};
