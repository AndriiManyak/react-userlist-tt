import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../User/User';

export const UserList = React.memo(
  ({
    users,
    currentPage,
    usersPerPage,
  }) => {
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
};
