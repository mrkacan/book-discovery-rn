import * as types from './types';
import {UserType} from './types';
import {LoginRequestModel} from "./models/LoginRequestModel";
import {CreateAccountRequestModel} from "./models/CreateAccountRequestModel";

const appAuthorize = (user: UserType): types.AuthorizeAction => {
    return {
        type: types.AUTHORIZE,
        payload: {
            id: user.id,
            username: user.username,
            token: user.token
        },
    };
}
const logout = (): types.LogoutAction => {
    return {
        type: types.LOG_OUT,
        payload: null
    };
}

const requestLogin = ({username, password}: LoginRequestModel): types.LoginRequestAction => {
    return {
        type: types.LOGIN_REQUEST,
        payload: {
            username,
            password,
        }
    };
}
const requestLoginSuccess = (): types.LoginRequestSuccessAction => {
    return {
        type: types.LOGIN_SUCCESS,
        payload: null
    };
}
const requestLoginError = (error: string): types.LoginRequestErrorAction => {
    return {
        type: types.LOGIN_FAILED,
        payload: {
            error
        }
    };
}

const createAccount = ({username, password}: CreateAccountRequestModel): types.CreateAccountAction => {
    return {
        type: types.REGISTER_REQUEST,
        payload: {
            username,
            password,
        }
    };
}
const createAccountSuccess = (): types.CreateAccountSuccessAction => {
    return {
        type: types.REGISTER_SUCCESS,
        payload: null,
    };
}
const createAccountError = (error: string): types.CreateAccountErrorAction => {
    return {
        type: types.REGISTER_FAILED,
        payload: {
            error
        },
    };
}

export {
    appAuthorize,
    logout,
    requestLogin,
    requestLoginSuccess,
    requestLoginError,
    createAccount,
    createAccountSuccess,
    createAccountError,
}
