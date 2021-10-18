import {all} from 'redux-saga/effects';
import {loginSagas} from '../features/auth/sagas';
import {getBookSagas} from "../features/books/sagas";

export default function* rootSaga() {
    yield all([
        ...loginSagas,
        ...getBookSagas
    ]);
}
