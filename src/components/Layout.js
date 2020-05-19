import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <div>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}
