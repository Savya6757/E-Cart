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

export const orderCreateReset = () => {
  return (dispatch) => {
    dispatch(orderCreateAction.orderReset({}));
  };
};

export const orderDetailsReset = () => {
  return (dispatch) => {
    dispatch(orderDetailsAction.orderReset({}));
  };
};
export const orderPayReset = () => {
  return (dispatch) => {
    dispatch(orderPayAction.orderReset({}));
  };
};

export const payOrder = (orderId) => {
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
      const { data } = await axios.put(`/api/orders/${orderId}/pay`, {}, config);
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
