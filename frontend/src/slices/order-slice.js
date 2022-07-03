import { createSlice } from "@reduxjs/toolkit";

const orderCreate = createSlice({
  name: "orderCreate",
  initialState: { order: null, success: null, loading: true, error: false },
  reducers: {
    orderCreateSuccess(state, action) {
      state.order = action.payload.order;
      state.success = true;
      state.loading = false;
    },
    orderCreateFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const orderDetails = createSlice({
  name: "orderDetails",
  initialState: { orderItems: [], shippingAddress: {}, loading: true, error: false },
  reducers: {
    orderDetailsSuccess(state, action) {
      state.order = action.payload.order;
      state.loading = false;
    },
    orderDetailsFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

const orderPay = createSlice({
  name: "orderPay",
  initialState: {loading: true, error: false },
  reducers: {
    orderPaySuccess(state, action) {
      state.success = true;
      state.loading = false;
    },
    orderPayFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const orderDetailsAction = orderDetails.actions;
export const orderCreateAction = orderCreate.actions;
export const orderPayAction = orderPay.actions;

export const orderDetailsReducer = orderDetails.reducer;
export const orderCreateReducer = orderCreate.reducer;
export const orderPayReducer = orderPay.reducer;
