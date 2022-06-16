import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { addToCart } from "../actions/cartActions";

const ProductsDetails = () => {
  const [qty, setQty] = useState(1);
  const { product, loading, error } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
  }, [params, dispatch]);

  const navigate = useNavigate();

  const addToCartHandler = (e) => {
    dispatch(addToCart(params.id, qty));
    navigate("/cart");
  };

  return (
    <>
      <Link to="/" className="btn btn-dark my-2">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error...{error}</Message>
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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Select
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(+e.target.value)}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Select>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item className="d-grid">
                  <Button
                    onClick={addToCartHandler}
                    type="button"
                    disabled={product.countInStock === 0}>
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
