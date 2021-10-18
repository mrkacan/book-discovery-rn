import Api from '../..';
import ApiConstants from '../../ApiConstants';

export default function authorizeUser(
  username: string,
  password: string,
) {
  return Api(ApiConstants.REGISTER, {username, password}, 'post');
}
