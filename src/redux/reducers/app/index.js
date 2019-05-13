import { combineReducers } from 'redux';
import topBarNavigation from './topBarNavigation';
import user from './user';

const appReducer = combineReducers({
  [topBarNavigation.name]: topBarNavigation.reducer,
  [user.name]: user.reducer,
});

export default appReducer;
