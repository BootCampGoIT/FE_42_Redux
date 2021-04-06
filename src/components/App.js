import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./header/Header";
import { getCoursesOperation } from "../redux/courses/operation";
import Main from "./main/Main";

const App = ({ getCoursesOperation }) => {
  useEffect(() => {
    getCoursesOperation();
  }, [getCoursesOperation]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default connect(null, { getCoursesOperation })(App);

// const contacts = [
//   { name: "Alex", age: 23 },
//   { name: "Alex1", age: 25 },
//   { name: "Alex2", age: 27 },
//   { name: "Alex3", age: 332 },
//   ....
//   ....
//   { name: "Alex", age: 23 },
//   { name: "Alex1", age: 25 },
//   { name: "Alex2", age: 27 },
//   { name: "Alex33", age: 35 },
// ];

// const getResult = () => {
//   return contacts.find((item) => item.age === 35 && item.id === "sdfghjkhfdfdghmhgfd"); //{ name: "Alex33", age: 35 }
// };
// getResult()
