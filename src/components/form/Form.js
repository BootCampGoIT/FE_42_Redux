import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourseOperation } from "../../redux/courses/operation";
import { isProductsLoading } from "../../redux/courses/selectors";

const initialState = { courseName: "", number: "" };

const Form = () => {
  const [state, setState] = useState(initialState);
  const loading = useSelector(isProductsLoading);
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addCourseOperation(state));
    setState({ ...initialState });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        Course
        <input
          name='courseName'
          type='text'
          value={state.courseName}
          onChange={onHandleChange}
        />
      </label>
      <label>
        Number
        <input
          name='number'
          type='text'
          value={state.number}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Save</button>
    </form>
  );
};

export default Form;

// Example2
// const initialState = { courseName: "", number: "" };

// const Form = ({ addCourseOperation }) => {
//   // const [state, setState] = useState(initialState);
//   const [courseName, setCourseName] = useState("");
//   const [number, setNumber] = useState("");

//   // const onHandleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setState((prev) => ({ ...prev, [name]: value }));
//   // };
//   const onHandleSubmit = async (e) => {
//     e.preventDefault();
//     addCourseOperation({ courseName, number });
//     setCourseName("");
//     setNumber("");
//     // setState({ ...initialState });
//   };

//   return (
//     <form onSubmit={onHandleSubmit}>
//       <label>
//         Course
//         <input
//           name='courseName'
//           type='text'
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//       </label>
//       <label>
//         Number
//         <input
//           name='number'
//           type='text'
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//         />
//       </label>
//       <button type='submit'>Save</button>
//     </form>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     products: state.products.productList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCourseOperation: (course) => {
//       dispatch(addCourseOperation(course));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form);
