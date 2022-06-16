import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
  name: "cartItems",
  initialState: { items: [] },
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
  },
});

export const cartItemsAction = cartItems.actions;

export default cartItems.reducer;
