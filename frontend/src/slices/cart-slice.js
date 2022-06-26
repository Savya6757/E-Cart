import { createSlice } from "@reduxjs/toolkit";

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartItems = createSlice({
  name: "cartItems",
  initialState: { items: [], shippingAddress: {}, paymentMethod: {} },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload.item;
      const product = newItem.product;
      const exist = state.items.find((item) => item.product === product);
      if (exist) {
        state.items = state.items.map((item) => (item.product === product ? newItem : item));
      } else {
        state.items.push(newItem);
      }
    },
    removeItem(state, action) {
      const product = action.payload.product;
      state.items = state.items.filter((item) => item.product !== product);
    },
    saveShippingAddress(state, action) {
      state.shippingAddress = action.payload.data;
    },
    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload.data;
    },
    calculateTotal(state, action) {
      state.itemsPrice = addDecimals(
        state.items.reduce((acc, item) => acc + item.price * item.qty, 0)
      );
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 100);
      state.taxPrice = addDecimals(Number((0.1 * state.itemsPrice).toFixed(2)));
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2);
    },
  },
});

export const cartItemsAction = cartItems.actions;

export default cartItems.reducer;
