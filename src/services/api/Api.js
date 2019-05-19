import BaseApi from './BaseApi';
import { normalizeUrl } from './utils';

const {
  REACT_APP_API_SERVER,
} = process.env;
const apiUrl = normalizeUrl(REACT_APP_API_SERVER);

class API extends BaseApi {
  // this class should contain methods, checks,
  // validations, external packages (if it is necessary), etc.
  request(url, method = 'GET', options = {}, parseMethod) {
    const isRelativeUrl = url.startsWith('/');

    const finalUrl = isRelativeUrl
      ? `${apiUrl}${url}`
      : url;

    const requestOptions = {
      method,
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options && options.headers),
      },
    };

    return BaseApi.request(finalUrl, method, requestOptions, parseMethod);
  }
}

export default API;
