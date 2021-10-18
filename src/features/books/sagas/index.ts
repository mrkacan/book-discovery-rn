import {takeEvery} from 'redux-saga/effects';
import * as types from '../types';
import {getBooksRequest} from './getBooksRequestSaga';
import {getBookDetailsSaga} from "./getBookDetailsSaga";

export const getBookSagas = [
  takeEvery(types.GET_BOOKS_REQUEST, getBooksRequest),
  takeEvery(types.GET_BOOK_DETAIL_REQUEST, getBookDetailsSaga),
];
