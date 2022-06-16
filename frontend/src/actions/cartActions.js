import { cartItemsAction } from "../slices/cart-slice";
import axios from "axios";

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const res = await axios.get(`/api/products/${id}`);
    const data = res.data;
    dispatch(
      cartItemsAction.addItem({
        item: {
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        },
      })
    );
    localStorage.setItem("cartItems", JSON.stringify(getState().cartItems.items));
  };
};

export const removeFromCart = (id) => {
  return async (dispatch, getState) => {
    dispatch(
      cartItemsAction.removeItem({
        product: id,
      })
    );
    localStorage.setItem("cartItems", JSON.stringify(getState().cartItems.items));
  };
};
