import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const courseItemsSlice = createSlice({
  name: "courseItems",
  initialState: [],
  reducers: {
    getCourse: (_, { payload }) => payload,
    addCourse: (state, { payload }) => [...state, payload],
    deleteCourse: (state, { payload }) => [
      ...state.filter((item) => item.id !== payload),
    ],
  },
});

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (_, { payload }) => payload,
  },
});

export const { getCourse, addCourse, deleteCourse } = courseItemsSlice.actions;
export const { setFilter } = filterSlice.actions;

const coursesReducer = combineReducers({
  courseItems: courseItemsSlice.reducer,
  filter: filterSlice.reducer,
});


export { coursesReducer };

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "courses/setFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

// const courseItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "courses/getCourses":
//       return action.payload;
//     case "courses/addCourse":
//       return [...state, action.payload];

//     case "courses/deleteCourse":
//       return [...state.filter((item) => item.id !== action.payload)];

//     default:
//       return state;
//   }
// };
