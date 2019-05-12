// TODO: Fix base api

import BaseApi from './BaseApi';
import { normalizeUrl } from './utils';

const {
  PUBLIC_URL,
  REACT_APP_API_SERVER,
  REACT_APP_API_LOCATION,
  // REACT_APP_API_VERSION,
} = process.env;

const nestedUrl = PUBLIC_URL
  ? `${PUBLIC_URL}/`
  : '/';

// TODO: Add API version when server versioning is done
const apiUrl = normalizeUrl(REACT_APP_API_SERVER, nestedUrl, REACT_APP_API_LOCATION);

class API extends BaseApi {
  // this class should contain methods, checks,
  // validations, external packages (if it is necessary), etc.
  request(url, method = 'GET', { cookies, ...options } = {}, parseMethod) {
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
        ...(cookies ? { Cookie: cookies } : null),
        ...(options && options.headers),
      },
    };

    return BaseApi.request(finalUrl, method, requestOptions, parseMethod);
  }
}

export default API;
