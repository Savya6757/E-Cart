import React, { useEffect, useState } from "react";
import { Row, Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleProduct, createProductReview, createReviewReset } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/ui/Loader";
import Message from "../components/ui/Message";
import { addToCart } from "../actions/cartActions";

const ProductsDetails = () => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { product, loading, error } = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const params = useParams();

  const { userInfo } = useSelector((state) => state.userAuth);
  const { success: successProductReview, error: errorProductReview } = useSelector(
    (state) => state.productReviewCreate
  );

  useEffect(() => {
    dispatch(createReviewReset());
    if (successProductReview) {
      alert("Review Submitted!");
      setRating(0);
      setComment("");
    }
    dispatch(getSingleProduct(params.id));
  }, [params, dispatch, successProductReview]);

  const navigate = useNavigate();

  const addToCartHandler = (e) => {
    dispatch(addToCart(params.id, qty));
    navigate("/cart");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(params.id, { rating, comment }));
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
        <>
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
                      <Col>Status</Col>
                      <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                    </Row>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}>
                            {[...Array(product.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </Form.Control>
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
          <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant="flush">
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating rating={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                  {/* <Button
                    onClick={addToCartHandler}
                    type="button"
                    disabled={product.countInStock === 0}>
                    Add To Cart
                  </Button> */}
                  <h2>Write a Customer Review</h2>
                  {errorProductReview && <Message variant="danger">{errorProductReview}</Message>}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as="select"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}>
                          <option value="">Select...</option>
                          <option value="1">1 - Poor</option>
                          <option value="2">2 - Fair</option>
                          <option value="3">3 - Good</option>
                          <option value="4">4 - Very Good</option>
                          <option value="5">5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="comment">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as="textarea"
                          row="3"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}></Form.Control>
                      </Form.Group>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to="/login">sign in</Link> to write a review{" "}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default ProductsDetails;
