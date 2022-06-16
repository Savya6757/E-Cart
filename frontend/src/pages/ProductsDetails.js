import React, { useEffect } from "react";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductsDetails = () => {
  const { product, loading, error } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [params, dispatch]);

  return (
    <>
      <Link to="/" className="btn btn-dark my-2">
        Go back
      </Link>
      {loading ? (
        <h3>loading...</h3>
      ) : error ? (
        <h3>error...{error}</h3>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating rating={product.rating} reviews={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="d-grid">
                  <Button type="button" disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductsDetails;
