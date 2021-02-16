import { SET_ERRORS, CLEAR_ERRORS } from "./../actions/types";

import isEmpty from "./../utils/isEmpty";

const initialState = {
  isError: false,
  error: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        isError: !isEmpty(action.payload),
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        isError: !isEmpty(action.payload),
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
