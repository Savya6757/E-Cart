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
  initialState: { product: {}, loading: true, error: false },
  reducers: {
    productSuccess(state, action) {
      state.product = action.payload.product;
      state.loading = false;
    },
    productFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    productReset(state, action) {
      return { product: {}, loading: true, error: false };
    },
  },
});

const productReview = createSlice({
  name: "productReview",
  initialState: { success: false, loading: true, error: false },
  reducers: {
    productCreateReviewSuccess(state, action) {
      state.success = true;
      state.loading = false;
    },
    productCreateReviewFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    productCreateReviewReset() {
      return { success: false, loading: true, error: false };
    },
  },
});

const topProducts = createSlice({
  name: "topProducts",
  initialState: { loading: true, products: [], error: false },
  reducers: {
    topProductsSuccess(state, action) {
      state.loading = false;
      state.products = action.payload.products;
    },
    topProductsFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    topProductsReset() {
      return { loading: true, products: [], error: false };
    },
  },
});

export const allProductListAction = allProductList.actions;
export const productListAction = productList.actions;
export const productReviewAction = productReview.actions;
export const topProductsAction = topProducts.actions;

export const allProductListReducer = allProductList.reducer;
export const productListReducer = productList.reducer;
export const productReviewReducer = productReview.reducer;
export const topProductsReducer = topProducts.reducer;
