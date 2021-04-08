// import { LOGOUT, SIGNIN, SIGNUP } from "./authConstants";
import { createReducer } from "@reduxjs/toolkit";
import { logout, refresh, setError, signIn, signUp } from "./authActions";

const initialState = {
  email: "",
  expiresIn: "",
  idToken: "",
  kind: "",
  localId: "",
  refreshToken: "",
  error: "",
};

const authReducer = createReducer(initialState, {
  [setError]: (state, { payload }) => ({ ...state, error: payload }),
  [signUp]: (state, { payload }) => ({ ...state, ...payload }),
  [signIn]: (state, { payload }) => ({ ...state, ...payload }),
  [refresh]: (state, { payload }) => ({ ...state, ...payload }),
  [logout]: (_) => ({ ...initialState }),
});

// const authReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case SIGNUP:
//     case SIGNIN:
//       return { ...state, ...payload };

//     case LOGOUT:
//       return { ...initialState };

//     default:
//       return state;
//   }
// };

export default authReducer;
