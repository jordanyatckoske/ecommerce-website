import React from "react";
import CartPreview from "../components/cartPreview/CartPreview";
import Layout from "../components/Layout";
import ItemList from "../components/cartPreview/ItemList";
import { getCartState } from "../redux/selectors";
import { connect } from "react-redux";

const Home = ({ items }) => {
  return (
    <Layout>
      {/* <CartPreview /> */}
      <h2>Home</h2>
      <ItemList items={items} variant="card" />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  items: getCartState(state).items,
});

export default connect(mapStateToProps)(Home);
