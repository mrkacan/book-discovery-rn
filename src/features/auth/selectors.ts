import {IAuthState} from "./types";

export const getIsAuth = (state: {
    login: IAuthState,
}) => !!state.login?.auth?.token;

export const getToken = (state: {
    login: IAuthState,
}) => state.login?.auth?.token;

export const isLoginLoading = (state: {
    login: IAuthState,
}) => state.login?.login?.isLoading

export const isRegisterLoading = (state: {
    login: IAuthState,
}) => state.login?.register?.isLoading
