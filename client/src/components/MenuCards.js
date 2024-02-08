import React from "react";
import Button from "@mui/material/Button";

function MenuCards({ item, selected, onClick }) {
  return (
    <Button
      onClick={onClick}
      style={{ margin: 2, background: selected ? "lightblue" : "lightgray" }}
    >
      {item.name}
    </Button>
  );
}

export default MenuCards;
