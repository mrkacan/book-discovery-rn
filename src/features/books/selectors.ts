import {IBooksState} from "./types";

export default {
    getBooks: ({
                   books: {
                       books: {
                           isLoading,
                           isError,
                           data,
                           errorMessage,
                           readingList,
                           searchedData,
                       }
                   },
               }: {
        books: IBooksState;
    }) => {
        return {
            isLoading,
            isError,
            data,
            errorMessage,
            readingList,
            searchedData,
        };
    },
};


export const getReadingListData = (state: {
    books: IBooksState,
}) => {
    const booksData = [...state.books.books.data];
    const readingListData = state.books.books.readingList;

    return booksData.filter((item) => readingListData.includes(item.id));
}
