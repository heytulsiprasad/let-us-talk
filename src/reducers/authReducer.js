import {
  CLEAR_CURRENT_USER,
  SET_CURRENT_USER,
  SET_AUTH_LOADING,
} from "./../actions/types";
import isEmpty from "./../utils/isEmpty";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !action.payload,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
