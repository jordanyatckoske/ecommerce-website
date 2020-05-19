import React from "react";
import {
  addQuantity,
  subtractQuantity,
  removeItem,
} from "../../redux/actions/cartActions";
import {
  Media,
  Row,
  Col,
  Container,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getItemCartQuantity } from "../../redux/selectors";

const ItemDetails = ({
  item = {},
  addQuantity,
  subtractQuantity,
  removeItem,
  quantity,
}) => {
  return (
    <Row>
      <Col md={8}>
        <Media>
          <img
            width={100}
            height={100}
            alt={item.name}
            src={item.thumbnailImage}
          />
          <Media.Body>
            <Container>
              <Row>
                <Col md={12}>
                  <h3>{item.name}</h3>
                </Col>
                <Col md={4}>MSRP: {item.msrp}</Col>
                <Col md={8}>Sale Price: {item.salePrice}</Col>
                <Col md={12}>{item.shortDescription}</Col>
              </Row>
            </Container>
          </Media.Body>
        </Media>
      </Col>
      <Col md={4}>
        <Row className="align-items-center">
          <Col md={8}>
            {/* <Form.Group> */}
            <Button
              inline="true"
              variant="warning"
              onClick={() => subtractQuantity(item.itemId)}
            >
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </Button>
            {/* <FormControl
              style={{ width: "50px" }}
              inline
              type="text"
              value={quantity(item.itemId)}
              disabled
            /> */}
            <p className="d-inline p-3">{quantity(item.itemId)}</p>
            <Button
              inline="true"
              variant="success"
              onClick={() => addQuantity(item.itemId)}
            >
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </Button>
            {/* </Form.Group> */}
          </Col>
          <Col md={4}>
            <Button variant="danger" onClick={() => removeItem(item.itemId)}>
              <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  quantity: (itemId) => getItemCartQuantity(state, itemId),
});

const mapDispatchToProps = (dispatch) => ({
  addQuantity: (itemId) => dispatch(addQuantity(itemId)),
  subtractQuantity: (itemId) => dispatch(subtractQuantity(itemId)),
  removeItem: (itemId) => dispatch(removeItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails);
