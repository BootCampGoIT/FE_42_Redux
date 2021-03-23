import { combineReducers } from "redux";
import { coursesReducer } from "./courses/reducer";

const rootReducer = combineReducers({
  courses: coursesReducer,
  auth: () => ({ isAuth: false }),
  products: () => [],
  fgh: () => ({ items: [] }),
  cart: () => ({ dfyg: "srdtfyguh" }),
});

export { rootReducer };
