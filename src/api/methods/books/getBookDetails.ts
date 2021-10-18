import Api from '../..';
import ApiConstants from '../../ApiConstants';

export default function getBookDetails(
    id: string,
    token: string,
) {
    return Api(
        ApiConstants.BOOK_DETAIL(id),
        {},
        'get',
        token,
    );
}
