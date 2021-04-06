import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../../../redux/courses/reducer";
import { getProductItem } from "../../../redux/courses/selectors";

const ListItem = ({ id }) => {
  const dispatch = useDispatch();
  const { courseName, number } = useSelector((state) =>
    getProductItem(state, id)
  );
  return (
    <li>
      <p>{courseName}</p>
      <p>{number}</p>
      <button data-id={id} onClick={() => dispatch(deleteCourse(id))}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
