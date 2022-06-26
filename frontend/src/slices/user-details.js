import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userDetails",
  initialState: { loading: true, user: {}, error: null },
  reducers: {
    userDetailSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
    },
    userDetailFail(state, action) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const userDetailsAction = userDetails.actions;

export default userDetails.reducer;
