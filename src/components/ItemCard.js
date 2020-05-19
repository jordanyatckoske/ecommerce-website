import React from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const ItemCard = ({ item = {}, addToCart }) => {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card>
        <Card.Img variant="top" alt={item.name} src={item.thumbnailImage} />
        <Card.Body>
          <Container>
            <Row>
              <Col md={12}>
                <Card.Title>{item.name}</Card.Title>
              </Col>
              <Col md={12}>MSRP: {item.msrp}</Col>
              <Col md={12}>Sale Price: {item.salePrice}</Col>
              <Col md={12}>
                <Card.Text>{item.shortDescription}</Card.Text>
              </Col>
              <Col md={12}>
                <Button
                  onClick={() => addToCart(item.itemId)}
                  variant="primary"
                >
                  <FontAwesomeIcon icon={faCartPlus} /> Add to Cart
                </Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (itemId) => {
    dispatch(addToCart(itemId));
  },
});

export default connect(null, mapDispatchToProps)(ItemCard);
