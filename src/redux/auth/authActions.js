import { createAction } from "@reduxjs/toolkit";

// import { LOGOUT, SIGNIN, SIGNUP } from "./authConstants";

// const SIGNUP = "@auth/signUp";
// const SIGNIN = "@auth/signIn";
// const LOGOUT = "@auth/logout";

const signUp = createAction("@auth/signUp");
const signIn = createAction("@auth/signIn");
const logout = createAction("@auth/logout");

// const signUp = (payload) => ({ type: SIGNUP, payload });
// const signIn = (payload) => ({ type: SIGNIN, payload });
// const logout = () => ({ type: LOGOUT });

export { signUp, signIn, logout };
