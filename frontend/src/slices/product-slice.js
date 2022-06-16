import { createSlice } from "@reduxjs/toolkit";

const productList = createSlice({
  name: "productList",
  initialState: { products: [], product: null, loading: true, error: false },
  reducers: {
    listSuccess(state, action) {
      state.products = action.payload.products;
      state.loading = false;
    },
    listFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
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

export const productListAction = productList.actions;

export default productList.reducer;
