import Api from '../..';
import ApiConstants from '../../ApiConstants';

export default function getBooks(query: string, token: string) {
    return Api(
        ApiConstants.BOOKS,
        {'q': query},
        'get',
        token,
    );
}
