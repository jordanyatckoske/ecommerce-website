import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
export default function CollapseSection({
  children,
  buttonText,
  openText,
  closedText,
}) {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button variant="link" onClick={() => setOpen(!open)}>
        {open ? "- " : "+ "}
        {open ? openText : closedText}
        {buttonText}
      </Button>
      <Collapse in={open}>{children}</Collapse>
    </div>
  );
}
