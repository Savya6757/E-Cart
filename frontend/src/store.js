import { configureStore } from "@reduxjs/toolkit";
import {
  allProductListReducer,
  productListReducer,
  productReviewReducer,
} from "./slices/product-slice";
import cartItems from "./slices/cart-slice";
import userAuth from "./slices/user-slice";
import userDetails from "./slices/user-details";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "./slices/order-slice";

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : {};

const store = configureStore({
  reducer: {
    allProductList: allProductListReducer,
    productList: productListReducer,
    productReviewCreate: productReviewReducer,
    cartItems,
    userAuth,
    userDetails,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderList: orderListReducer,
  },

  preloadedState: {
    cartItems: {
      items: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
      paymentMethod: paymentMethodFromStorage,
    },
    userAuth: { userInfo: userInfoFromStorage },
  },
  devTools: process.env.NODE_ENV !== "production", //only show devTools when in production
});

export default store;
