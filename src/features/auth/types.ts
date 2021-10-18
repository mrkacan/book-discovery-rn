import {Action} from "redux";
import {LoginRequestModel} from "./models/LoginRequestModel";
import {CreateAccountRequestModel} from "./models/CreateAccountRequestModel";
import {CreateAccountErrorResponseModel} from "./models/CreateAccountResponseModel";
import {LoginErrorResponseModel} from "./models/LoginResponseModel";

// login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// register
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

// authorize
export const AUTHORIZE = 'AUTHORIZE';
export const LOG_OUT = 'LOG_OUT';


export type UserType = {
    id: string;
    username: string;
    token: string;
}

export interface LoginRequestAction extends Action {
    type: typeof LOGIN_REQUEST;
    payload: LoginRequestModel;
}

export interface LoginRequestSuccessAction extends Action {
    type: typeof LOGIN_SUCCESS;
    payload: null;
}

export interface LoginRequestErrorAction extends Action {
    type: typeof LOGIN_FAILED;
    payload: LoginErrorResponseModel
}

export interface CreateAccountAction extends Action {
    type: typeof REGISTER_REQUEST;
    payload: CreateAccountRequestModel;
}

export interface CreateAccountSuccessAction extends Action {
    type: typeof REGISTER_SUCCESS;
    payload: null;
}

export interface CreateAccountErrorAction extends Action {
    type: typeof REGISTER_FAILED;
    payload: CreateAccountErrorResponseModel
}

export interface AuthorizeAction extends Action {
    type: typeof AUTHORIZE;
    payload: UserType;
}

export interface LogoutAction extends Action {
    type: typeof LOG_OUT;
    payload: null;
}

export type IAuthState = {
    login: {
        isLoading: boolean;
        isError: boolean;
        errorMessage: string;
        isSuccess: boolean;
    };
    register: {
        isLoading: boolean;
        isError: boolean;
        errorMessage: string;
        isSuccess: boolean;
    };
    auth: {
        id: string;
        username: string;
        token: string;
    }
}

export type AuthActionType =
    | LoginRequestAction
    | LoginRequestSuccessAction
    | LoginRequestErrorAction
    | CreateAccountAction
    | CreateAccountSuccessAction
    | CreateAccountErrorAction
    | AuthorizeAction

