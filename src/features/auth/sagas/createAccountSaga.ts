import {call, put} from 'redux-saga/effects';
import createAccount from '../../../api/methods/auth/createAccount';
import * as types from '../types';
import * as loginActions from '../actions';
import {CreateAccountSuccessResponseModel} from "../models/CreateAccountResponseModel";
import {Alert} from "react-native";

function* createAccountAsync(actions: types.LoginRequestAction) {
    const {username: usernameFromUser, password} = actions.payload;
    try {
        const createAccountResponse: CreateAccountSuccessResponseModel = yield call(
            createAccount,
            usernameFromUser,
            password,
        );
        yield put(loginActions.createAccountSuccess());
        yield put(loginActions.appAuthorize(createAccountResponse.user));

    } catch (e) {
        Alert.alert('Register Error', e.message)
        yield put(loginActions.createAccountError(e.message));
    }
}

export {createAccountAsync};
