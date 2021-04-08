import React from "react";
import Filter from "../components/filter/Filter";
import Form from "../components/form/Form";
import List from "../components/list/List";

const ProductsPage = () => {
  return (
    <>
      <h2>Products</h2>

      <Form />
      <Filter />
      <List />
    </>
  );
};

export default ProductsPage;
