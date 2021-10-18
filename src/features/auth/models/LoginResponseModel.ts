import {UserType} from "../types";

export interface  LoginSuccessResponseModel {
    user: UserType
}
export type LoginErrorResponseModel = {
    error: string;
}
