import { SET_TOAST, CLEAR_TOAST } from "../actions/types";

const initialState = {
  message: "",
  status: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOAST:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    case CLEAR_TOAST:
      return {
        ...state,
        message: "",
        status: "",
      };
    default:
      return state;
  }
};

export default reducer;
