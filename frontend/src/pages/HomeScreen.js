import React, { Fragment, useEffect } from "react";
import ProductItems from "../components/ProductItems";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../actions/productAction";

const HomeScreen = () => {
  const { products, loading, error } = useSelector((state) => state.productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  return (
    <Fragment>
      <h1>Latest Products</h1>
      {loading ? (
        <h3>loading...</h3>
      ) : error ? (
        <h3>Error...</h3>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductItems product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </Fragment>
  );
};

export default HomeScreen;
