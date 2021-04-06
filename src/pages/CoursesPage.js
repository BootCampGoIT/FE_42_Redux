import React from "react";
import Filter from "../components/filter/Filter";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { useDispatch } from "react-redux";
import { toggler } from "../redux/courses/reducer";

const CoursesPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h2>Courses</h2>
      <button onClick={() => dispatch(toggler())}>Click</button>
      <Form />
      <Filter />
      <List />
    </>
  );
};

export default CoursesPage;
