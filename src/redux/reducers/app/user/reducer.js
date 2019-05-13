import types from './types';
import { userKey } from '_constants';

const initialState = JSON.parse(sessionStorage.getItem(userKey));

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_ACTIVE_USER:
      return action.payload;
    default:
      return state;
  }
}
