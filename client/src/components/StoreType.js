import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
export const StoreType = () => {
  return (
    <div>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        Standard SMGB
      </Button>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        SMGB with 1 Standard POS
      </Button>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        OPTs
      </Button>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        Standard S24
      </Button>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        Standard OTR (No QSR)
      </Button>
      <Button style={{ backgroundColor: "#600", margin: 1, color: "white" }}>
        OTR With Drive Thru
      </Button>
    </div>
  );
};
