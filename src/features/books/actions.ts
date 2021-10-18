import * as types from './types';
import {BookType} from './types';
import {GetBooksRequestModel} from "./models/GetBooksRequestModel";
import {GetBookDetailsRequestModel} from "./models/GetBookDetailsRequestModel";
import {GetBookDetailsSuccessResponseModel} from "./models/GetBookDetailsResponseModel";

const getBooksRequest = ({query}: GetBooksRequestModel): types.GetBooksRequestAction => {
    return {
        type: types.GET_BOOKS_REQUEST,
        payload: {
            query
        }
    };
}
const getBooksSuccess = (data: BookType[]): types.GetBooksRequestSuccessAction => {
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload: {data}
    };
}
const getBooksQueriedSuccess = (data: BookType[]): types.GetBooksQueriedRequestSuccessAction => {
    return {
        type: types.GET_BOOKS_QUERIED_SUCCESS,
        payload: {data}
    };
}
const getBooksError = (error: string): types.GetBooksRequestErrorAction => {
    return {
        type: types.GET_BOOKS_FAILED,
        payload: {
            error
        }
    };
}
const getBookDetailsRequest = ({id}: GetBookDetailsRequestModel): types.GetBookDetailsRequestAction => {
    return {
        type: types.GET_BOOK_DETAIL_REQUEST,
        payload: {
            id
        }
    };
}
const getBookDetailsSuccess = ({book}: GetBookDetailsSuccessResponseModel): types.GetBookDetailsRequestSuccessAction => {
    return {
        type: types.GET_BOOK_DETAIL_SUCCESS,
        payload: {
            book
        }
    };
}
const getBookDetailsError = (error: string): types.GetBookDetailsRequestErrorAction => {
    return {
        type: types.GET_BOOK_DETAIL_FAILED,
        payload: {
            error
        }
    };
}

const toggleReadingBook = (id: string): types.ToggleBookReadingListAction => {
    return {
        type: types.TOGGLE_READING_BOOK,
        payload: {
            id
        }
    };
}

export {
    getBooksRequest,
    getBooksSuccess,
    getBooksError,
    getBookDetailsRequest,
    getBookDetailsSuccess,
    getBookDetailsError,
    toggleReadingBook,
    getBooksQueriedSuccess,
}
