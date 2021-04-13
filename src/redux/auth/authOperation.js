import axios from "axios";
import { logout, refresh, setError, signIn, signUp } from "./authActions";

const signUpOperation = (user) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBQubl0eTiAiPvS2UWFPYwi9wH9VFJrYrM`,
      { ...user, returnSecureToken: true }
    );
    await axios.post(
      `https://fe42-4b3ae-default-rtdb.firebaseio.com/users/${response.data.localId}.json?auth=${response.data.idToken}`,
      { ...user, role: "user" }
    );
    dispatch(
      signUp({
        role: "user",
        email: response.data.email,
        idToken: response.data.idToken,
        refreshToken: response.data.refreshToken,
      })
    );
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
    const getRole = await axios.get(
      `https://fe42-4b3ae-default-rtdb.firebaseio.com/users/${response.data.localId}.json?auth=${response.data.idToken}`
    );
    console.log(
      "response",
      Object.keys(getRole.data).map((key) => getRole.data[key])[0].role
    );
    dispatch(
      signIn({
        email: response.data.email,
        idToken: response.data.idToken,
        refreshToken: response.data.refreshToken,
        role: Object.keys(getRole.data).map((key) => getRole.data[key])[0].role,
      })
    );
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
