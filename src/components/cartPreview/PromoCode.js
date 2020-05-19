import React, { useState } from "react";
import CollapseSection from "../CollapseSection";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleChange } from "../../redux/actions/promoCodeActions";

const PromoCode = ({ handleChange, promoCode }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (promoCode === "DISCOUNT") {
      // DISPATCH
    }
    setIsDisabled(true);
  };

  return (
    <CollapseSection
      openText="Close "
      closedText="Apply "
      buttonText="promo code"
    >
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Promo Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="SAVEBIG2020"
              value={promoCode}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={handleSubmit}
            disabled={isDisabled}
          >
            Apply Promo!
          </Button>
        </Form>
      </Container>
    </CollapseSection>
  );
};

const mapStateToProps = (state) => ({
  promoCode: state.promoCode.value,
});

export default connect(mapStateToProps, { handleChange })(PromoCode);
