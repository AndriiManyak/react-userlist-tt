/* eslint-disable no-console */
import { createStore, combineReducers } from 'redux';

import usersReducer from './users';

export function getUsers(state) {
  console.log(state.usersState.users);

  return state.usersState.users;
}

const reducer = combineReducers({
  usersState: usersReducer,
});

const store = createStore(reducer);

export default store;
