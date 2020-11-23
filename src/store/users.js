import initialState from './initialState';

const SAVE = 'users/SAVE';

export const actions = {
  save: users => ({
    type: SAVE,
    users,
  }),
};

const usersReducer = (state = initialState, action) => {
  if (action.type === SAVE) {
    return {
      ...state,
      users: [...action.users],
    };
  }

  return state;
};

export default usersReducer;
