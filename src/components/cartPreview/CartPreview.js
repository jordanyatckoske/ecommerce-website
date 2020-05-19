import React from "react";
import Savings from "./Savings";
import ItemList from "./ItemList";
import PromoCode from "./PromoCode";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";

const CartPreview = ({
  price,
  savings,
  taxes = 0.0,
  total = 0.0,
  products = [],
}) => {
  return (
    <Container>
      <Row className="align-items-center">
        <div className="purchase-card">
          <Row>
            <Col md={6}>Subtotal</Col>
            <Col md={6}>{`$ ${price}`}</Col>
          </Row>
          <Savings savings={savings} />
          <Row>
            <Col md={6}>Est. Taxes and Fees for 56562</Col>
            {/* <Col md={6}>{taxes ? taxes.toFixed(2) : ""}</Col> */}
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <h2>Estimated Total</h2>
            </Col>
            <Col md={6}>{`$${total.toFixed(2)}`}</Col>
          </Row>
          <ItemList productList={products} variant="collapse" />
          <hr />
          <PromoCode />
        </div>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    taxes: state.promoCode,
  };
};

export default connect(mapStateToProps, null)(CartPreview);
