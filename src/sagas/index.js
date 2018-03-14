import { takeLatest } from 'redux-saga/effects';
//import { all, fork } from 'redux-saga/effects'
// import * as userSaga from './userSaga.js'

import { loginUserSaga, logoutUserSaga } from './loginUserSaga';
import { signupUserSaga } from './signupUserSaga';
import { LOGIN_USER, LOG_OUT, SIGNUP_USER } from '../actions/types';

export default function* rootSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
  yield takeLatest(LOG_OUT, logoutUserSaga);
  yield takeLatest(SIGNUP_USER, signupUserSaga);
}

// export default function* rootSaga() {
//   yield all([
//     ...Object.values(),
//     ...Object.values()
//   ].map(fork))
// }
