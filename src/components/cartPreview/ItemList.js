import React from "react";
import ItemDetails from "./ItemDetails";
import { Container, Row } from "react-bootstrap";
import CollapseSection from "../CollapseSection";
import ItemCard from "../ItemCard";

export default function ItemList({ items = [], variant = "card" }) {
  const list =
    // (typeof items === Array ? items : [])
    items.map((item) => {
      return variant === "collapse" ? (
        <ItemDetails key={item.itemId} item={item} />
      ) : (
        <ItemCard key={item.itemId} item={item} />
      );
    });

  return (
    <>
      {variant === "collapse" ? (
        <CollapseSection
          openText="Hide "
          closedText="See "
          buttonText="item details"
        >
          <Container>{list}</Container>
        </CollapseSection>
      ) : (
        <Row>{list}</Row>
      )}
    </>
  );
}
