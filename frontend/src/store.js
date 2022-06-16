import { configureStore } from "@reduxjs/toolkit";
import productList from "./slices/product-slice";
import cartItems from "./slices/cart-slice";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const store = configureStore({
  reducer: {
    productList,
    cartItems,
  },

  preloadedState: {
    cartItems: { items: cartItemsFromStorage },
  },
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
