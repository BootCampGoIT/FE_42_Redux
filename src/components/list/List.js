import React from "react";
import { connect } from "react-redux";
import { deleteCourse } from "../../redux/courses/reducer";

const List = ({ courses, deleteCourse }) => {
  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    deleteCourse(id);
  };

  return (
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
  );
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses.courseItems.filter((item) =>
      item.courseName.toLowerCase().includes(state.courses.filter.toLowerCase())
    ),
  };
};

const mapDispatchToProps = {
  deleteCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
