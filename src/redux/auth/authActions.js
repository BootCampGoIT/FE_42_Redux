import { createAction } from "@reduxjs/toolkit";

const signUp = createAction("@auth/signUp");
const signIn = createAction("@auth/signIn");
const logout = createAction("@auth/logout");
const refresh = createAction("@auth/refresh");
const setError = createAction("@auth/error");

export { signUp, signIn, logout, refresh, setError };
