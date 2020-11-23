/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import request from '../../api/api';
import { getUsers } from '../../store';
import { actions } from '../../store/users';
import { Pagination } from '../Pagination';
import { Sidebar } from '../Sidebar';
import { UserList } from '../UserList';

import './Users.scss';

export const Users = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  const [randomIndex, setRandomIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getUsersFromServer();
    const interval = setInterval(() => {
      setRandomIndex(getRandomNumber(0, 19));
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getUsersFromServer = async() => {
    setIsLoading(true);
    try {
      const dataFromServer = await request();

      dispatch(actions.save(dataFromServer.users));
    } catch (error) {
      setLoadingError(true);
    }

    setIsLoading(false);
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
      {isLoading && (<h2>...Loading</h2>)}

      {(loadingError && !users)
        && (
          <h3 className="Users__error">An error occured when loading users</h3>
        )
      }

      {(users && !isLoading) && (
        <>
          <div className="Users__list">
            {loadingError
              && (<h3 className="Users__error">Can not load new users</h3>)
            }

            <UserList
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
          </div>

          <div>
            <Sidebar
              randomIndex={randomIndex}
            />
          </div>
        </>
      )}
    </div>
  );
};
