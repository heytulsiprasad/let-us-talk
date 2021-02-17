import { CLEAR_TOAST } from "./types";

export const clearToasts = () => (dispatch) => {
  dispatch({ type: CLEAR_TOAST });
};
