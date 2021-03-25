import { LOGOUT, SIGNIN, SIGNUP } from "./authConstants";

const initialState = {
  email: "",
  expiresIn: "",
  idToken: "",
  kind: "",
  localId: "",
  refreshToken: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
    case SIGNIN:
      return { ...state, ...payload };

    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
