import createReducer from '../../lib/createReducer';
import * as types from './types';
import {BookActionType, IBooksState} from './types';
import {toggleData} from "../../utils/helpers";

export const initialState: IBooksState = {
    books: {
        data: [],
        searchedData: [],
        isLoading: false,
        isError: false,
        errorMessage: '',
        readingList: [],
    },
    bookDetails: {
        details: {},
        isLoading: false,
        isError: false,
        errorMessage: '',
    }
}

const booksReducer = createReducer(initialState, {
    [types.GET_BOOKS_REQUEST](state: IBooksState, _action: BookActionType) {
        return {
            ...state,
            books: {
                ...state.books,
                isLoading: true,
                isError: false,
                errorMessage: '',
            }
        };
    },
    [types.GET_BOOKS_SUCCESS](state: IBooksState, action: BookActionType) {
        return {
            ...state,
            books: {
                ...state.books,
                data: [...action.payload?.data],
                isLoading: false,
                isSuccess: true,
                isError: false,
                errorMessage: ''
            }
        };
    },
    [types.GET_BOOKS_QUERIED_SUCCESS](state: IBooksState, action: BookActionType) {
        return {
            ...state,
            books: {
                ...state.books,
                searchedData: [...action.payload?.data],
                isLoading: false,
                isSuccess: true,
                isError: false,
                errorMessage: ''
            }
        };
    },
    [types.GET_BOOKS_FAILED](state: IBooksState, action: BookActionType) {
        return {
            ...state,
            books: {
                ...state.books,
                data: [],
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.payload?.error
            }
        };
    },
    [types.TOGGLE_READING_BOOK](state: IBooksState, action: BookActionType) {
        const readingListData = [...state.books.readingList];
        const newItem = action.payload?.id;
        const readingList = toggleData(readingListData, newItem)

        return {
            ...state,
            books: {
                ...state.books,
                readingList,
            }
        }
    },


    [types.GET_BOOK_DETAIL_REQUEST](state: IBooksState, _action: BookActionType) {
        return {
            ...state,
            bookDetails: {
                ...state.bookDetails,
                isLoading: true,
                isError: false,
                errorMessage: '',
            }
        };
    },
    [types.GET_BOOK_DETAIL_SUCCESS](state: IBooksState, action: BookActionType) {
        return {
            ...state,
            bookDetails: {
                ...state.bookDetails,
                details: action.payload.book,
                isLoading: false,
                isSuccess: true,
                isError: false,
                errorMessage: ''
            }
        };
    },
    [types.GET_BOOK_DETAIL_FAILED](state: IBooksState, action: BookActionType) {
        return {
            ...state,
            bookDetails: {
                ...state.bookDetails,
                details: {},
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.payload?.error
            }
        };
    }
});

const reducer = {
    books: booksReducer,
};

export default reducer;
