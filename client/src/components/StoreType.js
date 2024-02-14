import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import { CartContext } from "../context/cart";
import ButtonGroup from "@mui/material/ButtonGroup";
export const StoreType = () => {
  const [cart, setCart] = useContext(CartContext);
  const [store, setStore] = useState([]);
  const [chosenStore, setChosenStore] = useState();
  const [storeSelected, setStoreSelected] = useState(false);
  const addToCart = async (storeId) => {
    setChosenStore(storeId);
    try {
      const data = await axios.get(`/storeCart?id=${storeId}`);
      const hardware = data?.data[0]?.hardware;
      var tempArray = [];
      hardware.map((HW) =>
        tempArray.push({ item: HW, qty: parseInt(HW.Quantity) })
      );
      setCart(...cart, tempArray);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
        onClick={() => addToCart(1)}
      >
        Standard SMGB
      </Button>
      <Button
        onClick={() => addToCart(2)}
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
      >
        SMGB with 1 Standard POS
      </Button>
      <Button
        onClick={() => addToCart(3)}
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
      >
        OPTs
      </Button>
      <Button
        onClick={() => addToCart(4)}
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
      >
        Standard S24
      </Button>
      <Button
        onClick={() => addToCart(5)}
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
      >
        Standard OTR (No QSR)
      </Button>
      <Button
        onClick={() => addToCart(6)}
        style={{ backgroundColor: "#000", margin: 1, color: "yellow" }}
      >
        OTR With Drive Thru
      </Button>
    </div>
  );
};
