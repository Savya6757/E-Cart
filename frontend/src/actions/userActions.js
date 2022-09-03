import { userAuthAction } from "../slices/user-slice";
import { userDetailsAction } from "../slices/user-details";
import axios from "axios";
import {
  orderCreateAction,
  orderDetailsAction,
  orderListAction,
  orderPayAction,
} from "../slices/order-slice";
import { cartItemsAction } from "../slices/cart-slice";

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/users/login", { email, password }, config);
      dispatch(
        userAuthAction.userLoginSuccess({
          userInfo: data,
        })
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        userAuthAction.userLoginFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const userLogout = () => {
  return (dispatch) => {
    dispatch(userAuthAction.userLogoutSuccess());
    // dispatch(userAuthAction.userReset());
    dispatch(userDetailsAction.userReset());
    dispatch(orderCreateAction.orderReset());
    dispatch(orderDetailsAction.orderReset());
    dispatch(orderPayAction.orderReset());
    dispatch(orderListAction.orderReset());
    dispatch(cartItemsAction.cartReset());
    localStorage.clear();
  };
};

export const registerUser = (name, email, password) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post("/api/users", { name, email, password }, config);
      dispatch(
        userAuthAction.userRegisterSuccess({
          userInfo: data,
        })
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        userAuthAction.userRegisterFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const getUserDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const {
        userAuth: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`api/users/${id}`, config);
      dispatch(
        userDetailsAction.userDetailSuccess({
          user: data,
        })
      );
    } catch (error) {
      dispatch(
        userDetailsAction.userDetailFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const updateUserProfile = (user) => {
  return async (dispatch, getState) => {
    try {
      const {
        userAuth: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(`api/users/profile`, user, config);
      dispatch(
        userAuthAction.userUpdateSuccess({
          userInfo: data,
        })
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch(
        userAuthAction.userUpdateFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};
