import {
  LOGIN_USER,
  LOG_OUT,
  SIGNUP_USER,
  CONFIRM_USER
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, user: action.user };

    case LOGIN_USER:
      return action.data;

    case CONFIRM_USER:
      return action.token;

    case LOG_OUT:
      return {};
    default:
      return state;
  }
};
