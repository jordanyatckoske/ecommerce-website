import React from "react";
import { Row, Col, Tooltip, OverlayTrigger } from "react-bootstrap";

export default function Savings({ savings }) {
  const tooltip = (
    <Tooltip id="tootip">
      <p>Picking up your order saves us money so we help save you money!</p>
    </Tooltip>
  );
  return (
    <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={tooltip}>
          <div className="savings">
            <em>Savings</em>
          </div>
        </OverlayTrigger>
      </Col>
      <Col md={6} className="total-savings">{`$${savings}`}</Col>
    </Row>
  );
}
