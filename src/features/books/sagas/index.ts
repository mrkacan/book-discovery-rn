import {takeEvery} from 'redux-saga/effects';
import * as types from '../types';
import {getBooksRequest} from './getBooksRequestSaga';

export const getBookSagas = [
  takeEvery(types.GET_BOOKS_REQUEST, getBooksRequest),
];
