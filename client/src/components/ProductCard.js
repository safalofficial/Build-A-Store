import React, { useContext, useState } from "react";

import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import { CartContext } from "../context/cart";

function ProductCard({ item }) {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    console.log(item);
    let leng = cart?.length;
    var exists = false;
    var index;
    var i = 0;

    for (var i = 0; i < leng; i++) {
      if (cart[i].item == item) {
        exists = true;
        index = i;
        break;
      }
    }
    if (exists) {
      var tempArray = cart.slice();
      // console.log("before", tempArray);
      tempArray[index].qty += 1;
      // console.log(tempArray[index]);
      setCart(tempArray);
      // console.log("After", tempArray);
    } else {
      setCart([...cart, { item: item, qty: 1 }]);
    }
  };

  return (
    <Button
      sx={{
        width: 300,
        height: 150,
        margin: "2px",
        paddingTop: 4,
        background: "pink",
      }}
      onClick={addToCart}
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <CardContent style={{ padding: 15, fontSize: 14 }}>
        <p style={{ textWrap: "wrap" }}>{item.Heading?.toLowerCase()}</p>
        <CardContent
          style={{ fontSize: 12, textWrap: "wrap", padding: 0, color: "black" }}
        >
          {item.Desc}
        </CardContent>
        <CardContent
          style={{
            fontSize: 12,
            textWrap: "wrap",
            color: "purple",
            fontWeight: "bold",
          }}
        >
          {item["Product Price (ex GST)"]
            ? `$${item["Product Price (ex GST)"]}`
            : "$0"}
        </CardContent>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </CardContent>
    </Button>
  );
}

export default ProductCard;
