import axios from "axios";
import { addCourse, setLoader, setError, getCourse } from "./reducer";

const addCourseOperation = (course) => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      "https://fe42-4b3ae-default-rtdb.firebaseio.com/courses.json",
      course
    );
    dispatch(addCourse({ ...course, id: response.data.name }));
  } catch (error) {
    console.log(error.message);
    console.log(error.response.data.error);
    dispatch(setError("Something went wrong"));
    // dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoader());
  }
};

const getCoursesOperation = () => async (dispatch) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      "https://fe42-4b3ae-default-rtdb.firebaseio.com/courses.json"
    );
    dispatch(
      getCourse(
        Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      )
    );
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(setLoader());
  }
};

export { addCourseOperation, getCoursesOperation };



