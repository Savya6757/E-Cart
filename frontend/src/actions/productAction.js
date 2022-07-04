import { allProductListAction, productListAction } from "../slices/product-slice";
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
