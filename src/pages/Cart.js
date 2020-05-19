import React from "react";
import { connect } from "react-redux";
import { getCartItems } from "../redux/selectors";
import ItemList from "../components/cartPreview/ItemList";
import Layout from "../components/Layout";

const Cart = ({ cartItems = [] }) => {
  return (
    <Layout>
      <h2>Cart</h2>
      <ItemList items={cartItems} variant="collapse" />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: getCartItems(state),
  };
};

export default connect(mapStateToProps)(Cart);
