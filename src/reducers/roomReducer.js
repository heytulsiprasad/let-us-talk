import {
  SET_ROOMS,
  SET_MESSAGES,
  SET_ROOMS_LOADING,
  SET_MESSAGES_LOADING,
  DELETE_ROOM,
} from "./../actions/types";

const initialState = {
  loadRooms: false,
  loadMessages: false,
  allRooms: [],
  allMessages: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOMS_LOADING:
      return {
        ...state,
        loadRooms: action.payload,
      };
    case SET_MESSAGES_LOADING:
      return {
        ...state,
        loadMessages: action.payload,
      };
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
    case DELETE_ROOM:
      return {
        ...state,
        allRooms: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
