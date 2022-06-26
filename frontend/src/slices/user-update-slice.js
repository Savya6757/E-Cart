// export const userUpdateProfileReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_UPDATE_PROFILE_REQUEST:
//       return { loading: true }
//     case USER_UPDATE_PROFILE_SUCCESS:
//       return { loading: false, success: true, userInfo: action.payload }
//     case USER_UPDATE_PROFILE_FAIL:
//       return { loading: false, error: action.payload }
//     default:
//       return state
//   }

// import { createSlice } from "@reduxjs/toolkit";

// const userUpdate = createSlice({
//   name: "userUpdate",
//   initialState: { loading: true, userInfo: null, success: false, error: null },
//   reducers: {
//     userUpdateSuccess(state, action) {
//       state.loading = false;
//       state.success = true;
//       state.userInfo = action.payload.userInfo;
//     },
//     userUpdateFail(state, action) {
//       state.loading = false;
//       state.error = action.payload.error;
//     },
//   },
// });

// export const userUpdateAction = userUpdate.actions;

// export default userUpdate.reducer;
