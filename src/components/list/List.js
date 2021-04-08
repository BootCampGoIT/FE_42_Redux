import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../../redux/products/reducer";
import { getError, getProducts } from "../../redux/products/selectors";
import ListItem from "./listItem/ListItem";
import { ListContainer } from "./ListStyled";

const List = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => getProducts(state));
  const error = useSelector(getError);

  useEffect(() => {
    setTimeout(() => {
      dispatch(resetError());
    }, 3000);
  }, [error, dispatch]);

  return (
    <ListContainer>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {courses.map(({ id }) => (
            <ListItem id={id} key={id} />
          ))}
        </ul>
      )}
    </ListContainer>
  );
};

export default List;
