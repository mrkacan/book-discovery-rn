import {UserType} from "../types";

export type CreateAccountSuccessResponseModel = {
    user: UserType
}

export type CreateAccountErrorResponseModel = {
    error: string;
}
