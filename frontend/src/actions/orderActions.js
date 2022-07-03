import { orderCreateAction, orderDetailsAction, orderPayAction } from "../slices/order-slice";
import axios from "axios";

export const createdOrder = (order) => {
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
      const { data } = await axios.post(`api/orders`, order, config);
      dispatch(
        orderCreateAction.orderCreateSuccess({
          order: data,
        })
      );
    } catch (error) {
      dispatch(
        orderCreateAction.orderCreateFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const payOrder = (orderId, paymentResult) => {
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
      const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);
      dispatch(
        orderPayAction.orderPaySuccess({
          order: data,
        })
      );
    } catch (error) {
      dispatch(
        orderPayAction.orderPayFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};
