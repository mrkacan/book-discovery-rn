import {call, put, select} from 'redux-saga/effects';
import * as types from '../types';
import {Alert} from 'react-native';
import getBookDetails from "../../../api/methods/books/getBookDetails";
import {getToken} from '../../auth/selectors';
import {GetBookDetailsSuccessResponseModel} from "../models/GetBookDetailsResponseModel";
import * as getBooksAction from '../actions';

function* getBookDetailsSaga(actions: types.GetBookDetailsRequestAction) {
    const {id} = actions.payload;
    let token: string = yield select(getToken);
    try {
        const bookDetailsResponse: GetBookDetailsSuccessResponseModel = yield call(
            getBookDetails,
            id,
            token
        );

        yield put(getBooksAction.getBookDetailsSuccess({book: bookDetailsResponse.book}));
    } catch (e) {
        Alert.alert('Login Error', e.message)
        yield put(getBooksAction.getBookDetailsError(e.message));
    }
}

export {getBookDetailsSaga};
