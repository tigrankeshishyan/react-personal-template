export const createBasicGetReducer = (actionType, initialState) =>
  (state = initialState, { type, ...action }) => {
    switch (type) {
      case actionType:
        return {
          ...state,
          ...action,
        };
      default:
        return state;
    }
  };
