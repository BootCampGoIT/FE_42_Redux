import { v4 as uuidv4 } from "uuid";

const addCourseActionCreator = (course) => {
  return {
    type: "courses/addCourse",
    payload: { ...course, id: uuidv4() },
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

export {
  addCourseActionCreator,
  deleteCourseActionCreator,
  setFilterActionCreator,
};
