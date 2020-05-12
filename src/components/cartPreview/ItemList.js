import React from "react";
import ItemDetails from "./ItemDetails";
import { Container } from "react-bootstrap";
import CollapseSection from "../CollapseSection";

export default function ItemList({ products = [] }) {
  const productList = products.map((product) => {
    return <ItemDetails product={product} />;
  });
  return (
    <CollapseSection
      openText="Hide "
      closedText="See "
      buttonText="item details"
    >
      <Container>{productList}</Container>
    </CollapseSection>
  );
}
