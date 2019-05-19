import { createAPIError, logError } from './utils';

export default class BaseApi {
  /**
   * @param {string} url
   * @param {string} method - HTTP method for request
   * @param {Object} options - request options
   * @param {string} parseMethod - method to parse response. 'json|text|blob|...'
   * @returns {Promise}
   */
  static async request(url, method = 'GET', options, parseMethod = 'json') {

    options.method = method;

    const request = fetch(url, options);

    try {
      const response = await request;
      const { status } = response;

      if (status >= 200 && status < 300) {
        const result = await response[parseMethod]();

        return {
          success: true,
          payload: result.payload || result,
        };
      } else {
        logError('Error while processing request', url);
        return createAPIError(status);
      }
    } catch (err) {
      logError(err, url);
      return {
        success: false,
        errorMessage: String(err) || '',
      };
    }
  }

  /**
   * @param {string} url
   * @returns {Promise}
   */
  get(url) {
    return this.request(url, 'GET');
  }

  /**
   * @param {string} url
   * @returns {Promise}
   */
  getBlob(url) {
    return this.request(url, 'GET', {}, 'blob');
  }

  /**
   * @param {string} url
   * @param {Object|undefined} data
   * @returns {Promise}
   */
  post(url, data = {}) {
    return this.request(url, 'POST', {
      body: JSON.stringify(data),
    });
  }

  /**
   * @param {string} url
   * @param {Object|undefined} data
   * @returns {Promise}
   */
  put(url, data = {}) {
    return this.request(url, 'PUT', {
      body: JSON.stringify(data),
    });
  }
}
