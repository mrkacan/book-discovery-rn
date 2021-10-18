import {BookType} from "../types";

export interface GetBooksSuccessResponseModel {
    data: BookType[]
}

export type GetBooksErrorResponseModel = {
    error: string;
}
