import { createSelector } from "@reduxjs/toolkit";

const getFilterValue = (state) => state.products.filter;
const getAllProducts = (state) => state.products.productItems;

const getProducts = createSelector(
  [getAllProducts, getFilterValue],
  (products, filter) =>
    products.filter((item) =>
      item.courseName.toLowerCase().includes(filter.toLowerCase())
    )
);

// const getProducts = (state) =>
//   state.products.productItems.filter((item) =>
//     item.courseName.toLowerCase().includes(state.products.filter.toLowerCase())
//   );

const getProductItem = (state, id) =>
  state.products.productItems.find((item) => item.id === id);

const getError = (state) => state.products.error;

const isProductsLoading = (state) => state.products.loader;

export {
  getFilterValue,
  getProducts,
  getError,
  getProductItem,
  isProductsLoading,
};
