import {
  // CLEAR_CURRENT_USER,
  SET_CURRENT_USER,
  SET_AUTH_LOADING,
  LOGIN_USER,
  SIGNUP_USER,
} from "./types";

export const setLoading = (status) => ({
  type: SET_AUTH_LOADING,
  payload: status,
});

export const loginUser = (userData, history) => ({
  type: LOGIN_USER,
  payload: { userData, history },
});

export const setCurrentUser = (userData) => ({
  type: SET_CURRENT_USER,
  payload: userData,
});

export const signUpUser = (userData, history) => ({
  type: SIGNUP_USER,
  payload: { userData, history },
});

// export const logoutUser = () => (dispatch) => {
//   dispatch({ type: SET_AUTH_LOADING, payload: true });
//   dispatch({
//     type: SET_TOAST,
//     payload: { status: "info", message: "Logged out successfully" },
//   });
//   auth.signOut();
//   dispatch({ type: SET_AUTH_LOADING, payload: false });
//   dispatch({ type: CLEAR_CURRENT_USER });
// };
