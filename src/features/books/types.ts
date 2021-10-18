import {Action} from "redux";
import {GetBooksRequestModel} from "./models/GetBooksRequestModel";
import {GetBooksErrorResponseModel, GetBooksSuccessResponseModel} from "./models/GetBooksResponseModel";
import {GetBookDetailsRequestModel} from "./models/GetBookDetailsRequestModel";
import {
    GetBookDetailsErrorResponseModel,
    GetBookDetailsSuccessResponseModel
} from "./models/GetBookDetailsResponseModel";

// get books
export const GET_BOOKS_REQUEST = 'GET_BOOKS_REQUEST';
export const GET_BOOKS_SUCCESS = 'GET_BOOKS_SUCCESS';
export const GET_BOOKS_QUERIED_SUCCESS = 'GET_BOOKS_QUERIED_SUCCESS';
export const GET_BOOKS_FAILED = 'GET_BOOKS_FAILED';
export const TOGGLE_READING_BOOK = 'TOGGLE_READING_BOOK';

// get book details
export const GET_BOOK_DETAIL_REQUEST = 'GET_BOOK_DETAIL_REQUEST';
export const GET_BOOK_DETAIL_SUCCESS = 'GET_BOOK_DETAIL_SUCCESS';
export const GET_BOOK_DETAIL_FAILED = 'GET_BOOK_DETAIL_FAILED';


export type BookType = {
    title: number;
    author: string;
    coverImageUrl: string;
    id: string;
    pageCount: number;
    publisher: string;
    synopsis: string;
}

export interface GetBooksRequestAction extends Action {
    type: typeof GET_BOOKS_REQUEST;
    payload: GetBooksRequestModel;
}

export interface GetBooksRequestSuccessAction extends Action {
    type: typeof GET_BOOKS_SUCCESS;
    payload: GetBooksSuccessResponseModel
}

export interface GetBooksQueriedRequestSuccessAction extends Action {
    type: typeof GET_BOOKS_QUERIED_SUCCESS;
    payload: GetBooksSuccessResponseModel
}

export interface GetBooksRequestErrorAction extends Action {
    type: typeof GET_BOOKS_FAILED;
    payload: GetBooksErrorResponseModel
}

export interface GetBookDetailsRequestAction extends Action {
    type: typeof GET_BOOK_DETAIL_REQUEST;
    payload: GetBookDetailsRequestModel;
}

export interface GetBookDetailsRequestSuccessAction extends Action {
    type: typeof GET_BOOK_DETAIL_SUCCESS;
    payload: GetBookDetailsSuccessResponseModel
}

export interface GetBookDetailsRequestErrorAction extends Action {
    type: typeof GET_BOOK_DETAIL_FAILED;
    payload: GetBookDetailsErrorResponseModel
}

export interface ToggleBookReadingListAction extends Action {
    type: typeof TOGGLE_READING_BOOK;
    payload: { id: string };
}

//TODO: Toggle Finished Books
//TODO: Rate Books

export type IBooksState = {
    books: {
        data: BookType[];
        searchedData: BookType[];
        isLoading: boolean;
        isError: boolean;
        errorMessage?: string;
        readingList: string[] | [];
    }
    bookDetails: {
        details: BookType | {};
        isLoading: boolean;
        isError: boolean;
        errorMessage?: string;
    }
}

export type BookActionType =
    | GetBooksRequestAction
    | GetBooksRequestSuccessAction
    | GetBooksRequestErrorAction
    | GetBookDetailsRequestAction
    | GetBookDetailsRequestSuccessAction
    | GetBookDetailsRequestErrorAction
    | ToggleBookReadingListAction
    | GetBooksQueriedRequestSuccessAction


