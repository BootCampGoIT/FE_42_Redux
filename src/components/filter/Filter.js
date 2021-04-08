import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/products/reducer";
import { getFilterValue } from "../../redux/products/selectors";
import { LabelContainer } from "./FilterStyled";

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <LabelContainer>
      Filter
      <input
        type='text'
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        className='filterInput'
      />
    </LabelContainer>
  );
};

export default Filter;
