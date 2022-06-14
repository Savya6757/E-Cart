import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";

const ProductItems = ({ product }) => {
  return (
    <Fragment>
      <Card className="my-3 p3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img variant="top" src={product.image} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </a>
          <Card.Text className="text-muted">
            {product.rating} from {product.numReviews}
          </Card.Text>
          <Card.Text className="lead">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ProductItems;
