import {call, put, select} from 'redux-saga/effects';
import * as types from '../types';
import * as getBooksAction from '../actions';
import {GetBooksSuccessResponseModel} from "../models/GetBooksResponseModel";
import {Alert} from 'react-native';
import getBooks from "../../../api/methods/books/getBooks";
import {getToken} from '../../auth/selectors';

function* getBooksRequest(actions: types.GetBooksRequestAction) {
    const {query} = actions.payload;
    let token: string = yield select(getToken);
    try {
        const booksResponse: GetBooksSuccessResponseModel = yield call(
            getBooks,
            query,
            token
        );

        if(!!query){
            yield put(getBooksAction.getBooksQueriedSuccess(booksResponse?.books));
        } else {
            yield put(getBooksAction.getBooksSuccess(booksResponse?.books));
        }

    } catch (e) {
        Alert.alert('Error', e.message)
        yield put(getBooksAction.getBooksError(e.message));
    }
}

export {getBooksRequest};
