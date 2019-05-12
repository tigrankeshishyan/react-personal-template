import types from './types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_TOP_BAR_NAVIGATION:
      return [...action.payload];
    default:
      return state;
  }
}
