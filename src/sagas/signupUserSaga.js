import { call, put } from 'redux-saga/effects';

import api from '../api';
import { signupUser } from '../actions';

export function* signupUserSaga(action) {
  try {
    const user = yield call(api.user.signup, action.user);
    yield put(signupUser(user));
  } catch (e) {
    console.log(e);
  }
}
