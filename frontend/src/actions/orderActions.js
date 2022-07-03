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

export const getOrderDetails = (id) => {
  return async (dispatch, getState) => {
    try {
      const {
        userAuth: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`/api/orders/${id}`, config);
      dispatch(
        orderDetailsAction.orderDetailsSuccess({
          order: data,
        })
      );
    } catch (error) {
      dispatch(
        orderDetailsAction.orderDetailsFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};
