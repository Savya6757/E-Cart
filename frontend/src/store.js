import { configureStore } from "@reduxjs/toolkit";
import productList from "./slices/product-slice";

const store = configureStore({
  reducer: {
    productList,
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
