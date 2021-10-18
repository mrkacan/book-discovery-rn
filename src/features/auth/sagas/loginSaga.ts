import {call, put} from 'redux-saga/effects';
import authorizeUser from '../../../api/methods/auth/authorizeUser';
import * as types from '../types';
import * as loginActions from '../actions';
import * as getBooksAction from '../../books/actions';
import {LoginSuccessResponseModel} from "../models/LoginResponseModel";
import {Alert} from 'react-native';

function* loginAsync(actions: types.LoginRequestAction) {
    const {username: usernameFromUser, password} = actions.payload;
    try {
        const loginResponse: LoginSuccessResponseModel = yield call(
            authorizeUser,
            usernameFromUser,
            password,
        );

        yield put(loginActions.requestLoginSuccess());
        yield put(loginActions.appAuthorize(loginResponse?.user));
        yield put(getBooksAction.getBooksRequest({query: ''}));


    } catch (e) {
        Alert.alert('Login Error', e.message)
        yield put(loginActions.requestLoginError(e.message));
    }
}

export {loginAsync};
