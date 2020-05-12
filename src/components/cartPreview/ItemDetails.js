import React from "react";
import { Media, Row, Col, Container } from "react-bootstrap";

export default function ItemDetails({ product = {} }) {
  return (
    <Row>
      <Media>
        <img width={100} height={100} src={product.thumbnailImage} />
        <Media.Body>
          <Container>
            <Row>
              <Col md={12}>
                <h3>{product.name}</h3>
              </Col>
              <Col md={4}>{product.msrp}</Col>
              <Col md={8}>{product.salePrice}</Col>
              <Col md={12}>{product.shortDescription}</Col>
            </Row>
          </Container>
        </Media.Body>
      </Media>
    </Row>
  );
}
