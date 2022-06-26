import { createSlice } from "@reduxjs/toolkit";

const userAuth = createSlice({
  name: "userAuth",
  initialState: { loading: true, userInfo: null, error: null, success: false },
  reducers: {
    userLoginSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload.userInfo;
    },
    userLoginFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    userRegisterSuccess(state, action) {
      state.loading = false;
      state.userInfo = action.payload.userInfo;
    },
    userRegisterFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
    userLogoutSuccess(state, action) {
      state.loading = false;
      state.userInfo = null;
      state.error = null;
    },
    userUpdateSuccess(state, action) {
      state.loading = false;
      state.success = true;
      state.userInfo = action.payload.userInfo;
    },
    userUpdateFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const userAuthAction = userAuth.actions;

export default userAuth.reducer;
