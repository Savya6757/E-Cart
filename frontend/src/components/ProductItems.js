import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductItems = ({ product }) => {
  return (
    <Fragment>
      <Card className="my-3 p3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div" className="my-2">
              {product.name}
            </Card.Title>
          </Link>
          <Rating rating={product.rating} reviews={`${product.numReviews} reviews`} />
          <Card.Text className="lead my-2">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ProductItems;
