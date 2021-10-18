import {takeEvery} from 'redux-saga/effects';
import * as types from '../types';
import {loginAsync} from './loginSaga';
import {createAccountAsync} from './createAccountSaga';

export const loginSagas = [
  takeEvery(types.LOGIN_REQUEST, loginAsync),
  takeEvery(types.REGISTER_REQUEST, createAccountAsync),
];
