import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const productsItemsSlice = createSlice({
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

const loaderSlice = createSlice({
  name: "loader",
  initialState: false,
  reducers: {
    setLoader: (state) => !state,
  },
});

const errorSlice = createSlice({
  name: "error",
  initialState: "",
  reducers: {
    setError: (_, { payload }) => payload,
    resetError: () => "",
  },
});

const togglerSlice = createSlice({
  name: "toggler",
  initialState: false,
  reducers: {
    toggler: (state) => !state,
  },
});

export const {
  getCourse,
  addCourse,
  deleteCourse,
} = productsItemsSlice.actions;
export const { setFilter } = filterSlice.actions;
export const { setLoader } = loaderSlice.actions;
export const { setError, resetError } = errorSlice.actions;
export const { toggler } = togglerSlice.actions;

const productsReducer = combineReducers({
  productItems: productsItemsSlice.reducer,
  filter: filterSlice.reducer,
  loader: loaderSlice.reducer,
  error: errorSlice.reducer,
  toggler: togglerSlice.reducer,
});

export { productsReducer };
