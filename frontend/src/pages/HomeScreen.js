import React, { Fragment } from "react";
import ProductItems from "../components/ProductItems";
import { Col, Row } from "react-bootstrap";
import products from "../products";

const HomeScreen = () => {
  return (
    <Fragment>
      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <ProductItems product={product} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
