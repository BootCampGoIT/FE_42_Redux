import React, { useEffect } from "react";
import Filter from "../components/filter/Filter";
import Form from "../components/form/Form";
import List from "../components/list/List";
import { getCoursesOperation } from "../redux/products/operation";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesOperation());
  }, [dispatch]);
  return (
    <>
      <h2>Products</h2>
      {role === "admin" && <Form />}
      <Filter />
      <List />
    </>
  );
};

export default ProductsPage;
