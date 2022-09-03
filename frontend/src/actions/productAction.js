import {
  allProductListAction,
  productListAction,
  productReviewAction,
  topProductsAction,
} from "../slices/product-slice";
import axios from "axios";

export const getProductList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/products");
      const data = res.data;
      dispatch(
        allProductListAction.listSuccess({
          products: data,
        })
      );
    } catch (error) {
      dispatch(
        allProductListAction.listFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const getSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      const data = res.data;
      dispatch(
        productListAction.productSuccess({
          product: data,
        })
      );
    } catch (error) {
      dispatch(
        productListAction.productFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const createProductReview = (prodId, review) => {
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
      await axios.post(`/api/products/${prodId}/reviews`, review, config);
      dispatch(productReviewAction.productCreateReviewSuccess({}));
    } catch (error) {
      dispatch(
        productReviewAction.productCreateReviewFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};

export const productReset = () => {
  return (dispatch) => {
    dispatch(productListAction.productReset());
  };
};

export const createReviewReset = () => {
  return (dispatch) => {
    dispatch(productReviewAction.productCreateReviewReset({}));
  };
};

export const listTopProducts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/products/top");
      const data = res.data;
      dispatch(
        topProductsAction.topProductsSuccess({
          products: data,
        })
      );
    } catch (error) {
      dispatch(
        topProductsAction.topProductsFail({
          error:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        })
      );
    }
  };
};
