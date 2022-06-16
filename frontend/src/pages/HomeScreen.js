import React, { Fragment, useEffect } from "react";
import ProductItems from "../components/ProductItems";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../actions/productAction";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";

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
        <Loader />
      ) : error ? (
        <Message variant="danger">Error...</Message>
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
