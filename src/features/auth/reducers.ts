import createReducer from '../../lib/createReducer';
import * as types from './types';
import {AuthActionType, IAuthState} from './types';


export const initialState: IAuthState = {
    login: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        isSuccess: false,
    },
    register: {
        isLoading: false,
        isError: false,
        errorMessage: '',
        isSuccess: false,
    },
    auth: {
        id: '',
        username: '',
        token: '',
    }
}

const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state: IAuthState, _action: AuthActionType) {
        return {
            ...state,
            login: {
                ...state.login,
                isLoading: true,
            }
        };
    },
    [types.LOGIN_FAILED](state: IAuthState, action: AuthActionType) {
        return {
            ...state,
            login: {
                ...state.login,
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action?.payload?.error ?? ''
            }
        };
    },
    [types.LOGIN_SUCCESS](state: IAuthState, _action: AuthActionType) {
        return {
            ...state,
            login: {
                ...state.login,
                isLoading: false,
                isError: false,
                isSuccess: true,
                errorMessage: ''
            }
        };
    },
    [types.REGISTER_REQUEST](state: IAuthState, _action: AuthActionType) {
        return {
            ...state,
            register: {
                ...state.register,
                isLoading: true,
            }
        };
    },
    [types.REGISTER_FAILED](state: IAuthState, action: AuthActionType) {
        return {
            ...state,
            register: {
                ...state.register,
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action?.payload?.error ?? ''
            }
        };
    },
    [types.REGISTER_SUCCESS](state: IAuthState, _action: AuthActionType) {
        return {
            ...state,
            register: {
                ...state.register,
                isLoading: false,
                isError: false,
                isSuccess: true,
                errorMessage: ''
            }
        };
    },
    [types.AUTHORIZE](state: IAuthState, action: AuthActionType) {
        return {
            ...state,
            auth: {
                ...state.auth,
                username: action.payload?.username,
                id: action.payload?.id,
                token: action.payload?.token,
            }
        };
    },
    [types.LOG_OUT]() {
        return initialState;
    },
});

const reducer = {
    login: loginReducer,
};

export default reducer;
