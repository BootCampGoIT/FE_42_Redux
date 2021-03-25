import { LOGOUT, SIGNIN, SIGNUP } from "./authConstants";

const signUp = (payload) => ({ type: SIGNUP, payload });
const signIn = (payload) => ({ type: SIGNIN, payload });
const logout = () => ({ type: LOGOUT });

export { signUp, signIn, logout };
