import { LOGIN_USER, LOG_OUT, SIGNUP_USER } from './types';

export const signupUser = user => {
  return {
    type: SIGNUP_USER,
    user
  };
};

export const loginUser = data => {
  return {
    type: LOGIN_USER,
    data
  };
};

export const logUserOut = () => {
  return {
    type: LOG_OUT
  };
};
