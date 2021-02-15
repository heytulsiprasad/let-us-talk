import { SET_CURRENT_USER } from "./../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
