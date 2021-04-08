import axios from "axios";
import { logout, refresh, setError, signIn, signUp } from "./authActions";

const signUpOperation = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
      { ...user, returnSecureToken: true }
    );
    dispatch(signUp(response.data));
  } catch (error) {
    
    dispatch(setError(error.response.data.error.message));
  }
};

const signInOperation = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
      { ...user, returnSecureToken: true }
    );
    dispatch(signIn(response.data));
  } catch (error) {

    dispatch(setError(error.response.data.error.message));
  }
};

const refreshOperation = (callBack) => async (dispatch, getState) => {
  const refreshToken = getState().auth.refreshToken;
  try {
    const response = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
      null,
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );
    dispatch(refresh(response.data));
    callBack();
  } catch (error) {
    dispatch(logout());
  }
};

export { signUpOperation, signInOperation, refreshOperation };
