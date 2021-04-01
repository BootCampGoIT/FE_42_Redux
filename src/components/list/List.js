import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { deleteCourse, resetError } from "../../redux/courses/reducer";

const List = ({ courses, deleteCourse, error }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    deleteCourse(id);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }, [error, dispatch]);

  return (
    <>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {courses.map(({ courseName, number, id }) => (
            <li key={id}>
              <p>{courseName}</p>
              <p>{number}</p>
              <button data-id={id} onClick={handleDelete}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courseItems.filter((item) =>
      item.courseName.toLowerCase().includes(state.courses.filter.toLowerCase())
    ),
    error: state.courses.error,
  };
};

const mapDispatchToProps = {
  deleteCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
