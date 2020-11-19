import React, { useEffect, useState } from 'react';
import request from '../../api/api';

export const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFromServer();
  }, []);

  const getUsersFromServer = async() => {
    const usersFromServer = await request();

    setUsers(usersFromServer.users);
  };

  return (
    <ul>
      {users.map(user => (
        <li
          key={user.id}
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
};
