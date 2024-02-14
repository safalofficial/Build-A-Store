import React, { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CartContext } from "../context/cart";
import ButtonBase from "@mui/material/ButtonBase";

function ProductCard({ item }) {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    let leng = cart?.length;
    var exists = false;
    var index;
    var i = 0;

    for (var i = 0; i < leng; i++) {
      if (cart[i].item.Desc == item.Desc) {
        exists = true;
        index = i;
        break;
      }
    }
    console.log(exists);
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

  {
    console.log(`url(${item["Product Image"]})`);
  }
  return (
    <>
      <ButtonBase
        onClick={addToCart}
        style={{
          backgroundImage: `url(${item["Product Image"]})`,
          // backgroundImage: `url(
          //   "https://i.postimg.cc/R0bM5ZX4/OPT_HW_-_Payement_Terminal_(DMG).png")`,

          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <Card
          sx={{ width: 300, height: 160, margin: "2px", padding: 1 }}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            fontWeight: "bold",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              component="div"
              style={{
                fontSize: 13,
                textWrap: "wrap",
                textShadow: " 1px 1px 2px gray",
              }}
            >
              {item.Heading?.toUpperCase()}
            </Typography>
            <Typography
              gutterBottom
              component="div"
              style={{
                fontSize: 13,
                textWrap: "wrap",
                textShadow: " 1px 1px 2px gray",
              }}
            >
              {item.Desc}
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                textShadow: " 1px 1px 2px gray",
              }}
            >
              {item["Product Price (ex GST)"]
                ? `$${item["Product Price (ex GST)"]}`
                : "$0"}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </ButtonBase>
    </>
  );
}

export default ProductCard;
