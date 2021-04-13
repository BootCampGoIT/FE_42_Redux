import axios from "axios";
import { addCourse, setLoader, setError, getCourse } from "./reducer";
import { refreshOperation } from "../auth/authOperation";

const addCourseOperation = (course) => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await axios.post(
      `https://fe42-4b3ae-default-rtdb.firebaseio.com/products.json?auth=${
        getState().auth.idToken
      }`,
      course
    );
    dispatch(addCourse({ ...course, id: response.data.name }));
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(refreshOperation(addCourseOperation(course)));
      return;
    }
    dispatch(setError("Something went wrong"));
    // dispatch(setError(error.response.data.error));
  } finally {
    dispatch(setLoader());
  }
};

const getCoursesOperation = () => async (dispatch, getState) => {
  dispatch(setLoader());
  try {
    const response = await axios.get(
      `https://fe42-4b3ae-default-rtdb.firebaseio.com/products.json?auth=${
        getState().auth.idToken
      }`
    );

    if (response.data) {
      dispatch(
        getCourse(
          Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key],
          }))
        )
      );
    } else dispatch(getCourse([]));
  } catch (error) {
    // if (error.response.status === 401) {
    //   dispatch(refreshOperation(getCoursesOperation()));
    //   return;
    // }
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(setLoader());
  }
};

export { addCourseOperation, getCoursesOperation };
