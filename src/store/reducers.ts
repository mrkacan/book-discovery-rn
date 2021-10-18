import {loginReducer} from '../features/auth';
import {booksReducer} from '../features/books';

export default Object.assign(
    {},
    loginReducer,
    booksReducer
);
