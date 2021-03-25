import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";
import { coursesReducer } from "./courses/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "tokens",
  storage,
  whitelist: ["refreshToken", "idToken"],
  // blacklist: ["kind"],
};

const rootReducer = combineReducers({
  courses: coursesReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export { rootReducer };
