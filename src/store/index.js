import { createStore, combineReducers } from 'redux';

import usersReducer from './users';

export function getUsers(state) {
  return state.usersState.users;
}

const reducer = combineReducers({
  usersState: usersReducer,
});

const store = createStore(reducer);

export default store;
