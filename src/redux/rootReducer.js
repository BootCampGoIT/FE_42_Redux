import { combineReducers } from "redux";
import authReducer from "./auth/authReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsReducer } from "./products/reducer";

const persistConfig = {
  key: "tokens",
  storage,
  whitelist: ["refreshToken", "idToken"],
  // blacklist: ["kind"],
};

const rootReducer = combineReducers({
  products: productsReducer,
  auth: persistReducer(persistConfig, authReducer),
});

export { rootReducer };
