import { auth } from "./../firebaseInit";
import {
  CLEAR_CURRENT_USER,
  SET_CURRENT_USER,
  SET_ERRORS,
  SET_AUTH_LOADING,
} from "./types";

export const signUpUser = ({ email, password }, history) => (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING, payload: true });

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({ type: SET_AUTH_LOADING, payload: false });
      dispatch({ type: SET_CURRENT_USER, payload: response.user });
      history.push("/");
    })
    .catch((error) => {
      dispatch({ type: SET_ERRORS, payload: error });
    });
};

export const loginUser = ({ email, password }, history) => (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING, payload: true });

  auth
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      dispatch({ type: SET_AUTH_LOADING, payload: false });
      dispatch({ type: SET_CURRENT_USER, payload: response.user });
      history.push("/");
    })
    .catch((error) => {
      dispatch({ type: SET_ERRORS, payload: error });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({ type: SET_AUTH_LOADING, payload: true });
  auth.signOut();
  dispatch({ type: SET_AUTH_LOADING, payload: false });
  dispatch({ type: CLEAR_CURRENT_USER, payload: {} });
};
