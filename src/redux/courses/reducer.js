import { combineReducers } from "redux";

const courseItemsReducer = (state = [], action) => {
  switch (action.type) {
    case "courses/addCourse":
      return [...state, action.payload];

    case "courses/deleteCourse":
      return [...state.filter((item) => item.id !== action.payload)];

    default:
      return state;
  }
};

const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "courses/setFilter":
      return action.payload;

    default:
      return state;
  }
};

const coursesReducer = combineReducers({
  courseItems: courseItemsReducer,
  filter: filterReducer,
});

export { coursesReducer };
