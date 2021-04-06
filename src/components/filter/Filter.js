import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/courses/reducer";
import { getFilterValue } from "../../redux/courses/selectors";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  return (
    <label>
      Filter
      <input
        type='text'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
