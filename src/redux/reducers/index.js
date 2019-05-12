import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import API from 'services/api';
import appReducer from './app';
// import dataReducer from './data';

export const rootReducer = combineReducers({
  app: appReducer,
  // data: dataReducer,
});

const middleware = [thunk.withExtraArgument({ API })];

/**
 * Configures redux store
 * @returns {Object} store
 */
export const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
};
