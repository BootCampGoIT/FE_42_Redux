import { LOGOUT, SIGNIN, SIGNUP } from "./authConstants";
import { createReducer } from "@reduxjs/toolkit";
import { logout, signIn, signUp } from "./authActions";

const initialState = {
  email: "",
  expiresIn: "",
  idToken: "",
  kind: "",
  localId: "",
  refreshToken: "",
};

const authReducer = createReducer(initialState, {
  [signUp]: (state, { payload }) => ({ ...state, ...payload }),
  [signIn]: (state, { payload }) => ({ ...state, ...payload }),
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
