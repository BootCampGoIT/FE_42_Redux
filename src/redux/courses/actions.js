import { v4 as uuidv4 } from "uuid";

const getCourseActionCreator = (courses) => {
  return {
    type: "courses/getCourses",
    payload: courses,
  };
};
const addCourseActionCreator = (course) => {
  return {
    type: "courses/addCourse",
    payload: { ...course },
  };
};

const deleteCourseActionCreator = (id) => {
  return {
    type: "courses/deleteCourse",
    payload: id,
  };
};

const setFilterActionCreator = (value) => {
  return {
    type: "courses/setFilter",
    payload: value,
  };
};
const toggleValue = () => {
  return {
    type: "toggleValue",
  };
};

const setFilterActionCreator = (value) => {
  return {
    type: "courses/setFilter",
    payload: value,
  };
};

export {
  addCourseActionCreator,
  deleteCourseActionCreator,
  setFilterActionCreator,
  getCourseActionCreator,
  toggleValue,
};
