import Api from '../..';
import ApiConstants from '../../ApiConstants';

export default function getBookDetails(
    token: string,
    id: string,
) {
    return Api(
        ApiConstants.BOOK_DETAIL(id),
        {},
        'post',
        token,
    );
}
