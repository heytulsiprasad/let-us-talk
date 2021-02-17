import { SET_ROOMS, SET_MESSAGES } from "./../actions/types";

const initialState = {
  allRooms: [],
  allMessages: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOMS:
      return {
        ...state,
        allRooms: action.payload,
      };
    case SET_MESSAGES:
      return {
        ...state,
        allMessages: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
