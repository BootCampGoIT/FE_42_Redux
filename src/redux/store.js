// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { persistStore } from "redux-persist";
import { rootReducer } from "./rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({ reducer: rootReducer, middleware });
// const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

export default store;
