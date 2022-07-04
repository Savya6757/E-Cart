import { createSlice } from "@reduxjs/toolkit";

const allProductList = createSlice({
  name: "allProductList",
  initialState: { products: [], loading: true, error: false },
  reducers: {
    listSuccess(state, action) {
      state.products = action.payload.products;
      state.loading = false;
    },
    listFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const productList = createSlice({
  name: "productList",
  initialState: { product: null, loading: true, error: false },
  reducers: {
    productSuccess(state, action) {
      state.product = action.payload.product;
      state.loading = false;
    },
    productFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const allProductListAction = allProductList.actions;
export const productListAction = productList.actions;

export const allProductListReducer = allProductList.reducer;
export const productListReducer = productList.reducer;
