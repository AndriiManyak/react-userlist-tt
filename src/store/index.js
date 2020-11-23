import { createStore, combineReducers } from 'redux';

import usersReducer from './users';

export function getUsers(state) {
  return state.usersState.users;
}

export function getPaginatedUsers(currentPage, usersPerPage) {
  return (state) => {
    const inxedOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = inxedOfLastUser - usersPerPage;
    const users = getUsers(state);

    return users.slice(indexOfFirstUser, inxedOfLastUser);
  };
}

export function getUser(index) {
  return (state) => {
    const users = getUsers(state);

    return users[index];
  };
}

const reducer = combineReducers({
  usersState: usersReducer,
});

const store = createStore(reducer);

export default store;
