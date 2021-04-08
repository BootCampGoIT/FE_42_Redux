import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCourse } from "../../../redux/products/reducer";
import { getProductItem } from "../../../redux/products/selectors";
import { ListItemContainer } from "./ListItemStyled";

const ListItem = ({ id }) => {
  const dispatch = useDispatch();
  const { productName, price } = useSelector((state) =>
    getProductItem(state, id)
  );
  return (
    <ListItemContainer>
      <h2>{productName}</h2>
      <p>Price: {price} $</p>
      <button
        data-id={id}
        onClick={() => dispatch(deleteCourse(id))}
        className='deleteButton'>
        Delete
      </button>
    </ListItemContainer>
  );
};

export default ListItem;
