import ApiConstants from './ApiConstants';
import axios, {AxiosRequestConfig, Method} from 'axios';

export interface APIParams {
    readonly [prop: string]: string | object | [] | boolean | number | FormData;
}

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.timeout = 30000;

const Api = <T>(
    url: string,
    params: APIParams | FormData,
    method: string,
    token?: string | undefined,
    headers?: object | undefined,
    config?: AxiosRequestConfig,
) => new Promise<T>((resolve, reject) =>
    axios({
        url,
        headers: {
            Accept: 'application/json',
            ...(token && {Authorization: `Bearer ${token}`}),
            ...(headers && headers),
        },
        ...(config ? config : undefined),
        method: method as Method,
        ...(method === 'get' ? {params} : {data: params}),
    })
        .then(response => resolve(response.data as T))
        .catch(error => reject(error)),
);

export default <T>(
    path: string,
    params: APIParams | FormData,
    method: string,
    token?: string | undefined,
    config?: AxiosRequestConfig,
) =>
    Api<T>(`${ApiConstants.API_URL}${path}`, params, method, token, {}, config);
