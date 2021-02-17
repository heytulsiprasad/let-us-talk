import { combineReducers } from "redux";

import authReducer from "./authReducer";
import toastReducer from "./toastReducer";
import roomReducer from "./roomReducer";

export default combineReducers({
  auth: authReducer,
  toasts: toastReducer,
  rooms: roomReducer,
});
