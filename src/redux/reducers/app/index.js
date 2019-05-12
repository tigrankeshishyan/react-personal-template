import { combineReducers } from 'redux';
import topBarNavigation from './topBarNavigation';

const appReducer = combineReducers({
  [topBarNavigation.name]: topBarNavigation.reducer,
});

export default appReducer;
