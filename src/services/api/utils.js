import { API_ERROR, HTTP_MESSAGES } from './messages';

/**
 * Function for catching errors during an API request
 * @param {Object} error - the error object of catch method
 * @param {string} identifier - path for which the call was made
 * @returns {void}
 */
export const logError = (error, identifier) => {
  console.error(API_ERROR, error);

  if (identifier) {
    console.error('Error in --> ', identifier);
  }
};

/**
 * @param {Object} status - an API request response's status
 * @returns {Object}
 */
export const createAPIError = status => ({
  success: false,
  errorMessage: HTTP_MESSAGES[String(status)],
});

/**
 * Testing if the url is in the same origin
 * 
 * @param {string} url - URL to test if is the same origin
 * @return {boolean}
 */
export function testSameOrigin(url) {
  const { location } = window;
  const testAnchor = document.createElement('a');

  testAnchor.href = url;

  const testFields = ['hostname', 'port', 'protocol'];

  return testFields.every(field => testAnchor[field] === location[field]);
}

export const trimSymbolFromEndings = (str, symbol) => {
  const regex = new RegExp(`^(${symbol})+|(${symbol})+$`, 'g');

  return (str || '').replace(regex, '');
};

export const normalizeUrl = (...args) => {  
  const initialPath = path => path === '' ? '' : path.startsWith('http') ? path : `/${path}`;
  const secondaryPath = (acc, path) => path === '' ? `${acc}` :`${acc}/${path}`;
  return args.map(path => trimSymbolFromEndings(path, '/'))
    .reduce((acc, path) => acc === null ? initialPath(path) : secondaryPath(acc, path), null);
};
