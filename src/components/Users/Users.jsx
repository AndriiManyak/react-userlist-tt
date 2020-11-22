/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../api/api';
import { getUsers } from '../../store';
import { actions } from '../../store/users';
import { Pagination } from '../Pagination/Pagination';

import { UserList } from '../UserList';
import './Users.scss';

export const Users = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const [randomIndex, setRandomIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

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

  const changePage = useCallback((pageNumber) => {
    setCurrentPage(pageNumber);
  }, []);

  const selectNextPage = useCallback(() => {
    setCurrentPage(prevState => prevState + 1);
  }, []);

  const selectPreviousPage = useCallback(() => {
    setCurrentPage(prevState => prevState - 1);
  }, []);

  return (
    <div className="Users">
      {users && (
        <>
          <UserList
            users={users}
            randomIndex={randomIndex}
            currentPage={currentPage}
            usersPerPage={usersPerPage}
          />

          <Pagination
            totalElements={users.length}
            elementsPerPage={usersPerPage}
            currentPage={currentPage}
            changePage={changePage}
            selectNextPage={selectNextPage}
            selectPreviousPage={selectPreviousPage}
          />
        </>
      )}
    </div>
  );
};