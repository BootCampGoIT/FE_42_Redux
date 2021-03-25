import React from "react";
import Filter from "../components/filter/Filter";
import Form from "../components/form/Form";
import List from "../components/list/List";

const CoursesPage = () => {
  return (
    <>
      <h2>Courses</h2>
      <Form />
      <Filter />
      <List />
    </>
  );
};

export default CoursesPage;
