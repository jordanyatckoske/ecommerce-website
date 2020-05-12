import React, { useState } from "react";
import "./App.scss";
import CartPreview from "./components/cartPreview/CartPreview";

function App() {
  const [total, setTotal] = useState(100);
  const [savings, setSavings] = useState(-5.25);
  const [taxes, setTaxes] = useState(0);
  const [estimatedTotal, setEstimatedTotal] = useState(0);

  return <CartPreview />;
}

export default App;
