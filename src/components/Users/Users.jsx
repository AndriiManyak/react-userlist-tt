import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../api/api';
import { getUsers } from '../../store';
import { actions } from '../../store/users';

import { UserList } from '../UserList';

export const Users = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    getUsersFromServer();
    const interval = setInterval(() => {
      setRandomIndex(getRandomNumber(0, 19));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getUsersFromServer = async() => {
    const dataFromServer = await request();

    dispatch(actions.save(dataFromServer.users));
  };

  const getRandomNumber = (max, min) => (
    Math.floor(Math.random() * (max - min + 1)) + min
  );

  return (
    <div>
      {users && (
        <UserList
          users={users}
          randomIndex={randomIndex}
        />
      )}
    </div>
  );
};
