import { auth } from "./../firebaseInit";
import { CLEAR_CURRENT_USER, SET_CURRENT_USER, SET_ERRORS } from "./types";

export const signUpUser = ({ email, password }, history) => async (
  dispatch
) => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    dispatch({ type: SET_CURRENT_USER, payload: response.user });
    history.push("/");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error });
  }
};

export const loginUser = ({ email, password }, history) => async (dispatch) => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    dispatch({ type: SET_CURRENT_USER, payload: response.user });
    history.push("/");
  } catch (error) {
    dispatch({ type: SET_ERRORS, payload: error });
  }
};

export const logoutUser = () => (dispatch) => {
  auth.signOut();
  dispatch({ type: CLEAR_CURRENT_USER, payload: {} });
};
