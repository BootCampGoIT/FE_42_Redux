import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetError } from "../../redux/courses/reducer";
import { getError, getProducts } from "../../redux/courses/selectors";
import ListItem from "./listItem/ListItem";

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
    <>
      {error ? (
        <h2>{error}</h2>
      ) : (
        <ul>
          {courses.map(({ id }) => (
            <ListItem id={id} key={id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default List;
