import { call, put } from 'redux-saga/effects';

import api from '../api';
import { confirmUser } from '../actions';

export function* confirmUserSaga(action) {
  try {
    const token = yield call(api.user.confirm, action.token);
    yield put(confirmUser(token, localStorage.setItem('loginAuth', token)));
  } catch (e) {
    console.log(e);
  }
}
