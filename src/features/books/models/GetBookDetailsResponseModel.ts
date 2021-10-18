import {BookType} from "../types";

export type GetBookDetailsSuccessResponseModel = {
    book: BookType;
};

export type GetBookDetailsErrorResponseModel = {
    error?: string;
};
