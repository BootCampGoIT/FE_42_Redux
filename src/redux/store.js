import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import axios from "axios";

const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.info(action);
  console.groupEnd();
  return next(action);
};

const myMiddleware = (store) => (next) => (action) => {
  if (action.type === "courseItems/addCourse") {
    axios.post(
      "https://myproject-d33c4-default-rtdb.firebaseio.com/statistic.json",
      { name: "dfghj" }
    );
  }
  return next(action);
};

const middleware = [
  loggerMiddleware,
  myMiddleware,
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({ reducer: rootReducer, middleware });
export const persistor = persistStore(store);

export default store;

console.dir(window);
