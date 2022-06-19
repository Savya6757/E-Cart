import { userAuthAction } from "../slices/user-slice";
import axios from "axios";

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
    localStorage.clear("userInfo");
    dispatch(userAuthAction.userLogoutSuccess());
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
      // dispatch(
      //   userAuthAction.userLoginSuccess({
      //     userInfo: data,
      //   })
      // );
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
