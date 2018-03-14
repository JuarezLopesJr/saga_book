import { call, put } from 'redux-saga/effects';

import api from '../api';
import { loginUser, logUserOut } from '../actions';

export function* loginUserSaga(action) {
  try {
    const user = yield call(api.user.login, action.data);
    yield put(loginUser(user, localStorage.setItem('loginAuth', user.token)));
  } catch (e) {
    console.log(e);
  }
}

export function* logoutUserSaga() {
  yield put(logUserOut);
  yield localStorage.removeItem('loginAuth');
}
