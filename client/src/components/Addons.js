import React, { useEffect, useState, useContext } from "react";
import MenuCards from "./MenuCards";
import ProductCard from "./ProductCard";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import "../app.css";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { CartContext } from "../context/cart";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const AddOns = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("POS");
  const [cart, setCart] = useContext(CartContext);

  axios.defaults.baseURL = "http://192.168.56.1:7000";
  useEffect(() => {
    const getData = async () => {
      const temp = await axios.get("/products");
      setProducts(temp.data);
    };
    const getCategories = async () => {
      const temp = await axios.get("/categories");
      setCategories(temp.data);
    };
    getData();
    getCategories();
  }, []);

  const checkSelected = (item) => {
    if (item.name === chosenCategory) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Grid item xs={6} md={10}>
      <Button>Add Hardware to the list</Button>
      <Grid item xs={20} md={15}>
        {categories.map((item) => {
          return (
            <MenuCards
              key={item.id}
              item={item}
              selected={checkSelected(item)}
              onClick={() => {
                setChosenCategory(item.name);
              }}
            />
          );
        })}
      </Grid>
      <Grid item xs={20} md={15}>
        {products.map((item) => {
          if (item.Category == chosenCategory) {
            return (
              <div key={item["Part Name"]} style={{ float: "left" }}>
                <ProductCard item={item} />
              </div>
            );
          }
        })}
      </Grid>
    </Grid>
  );
};
export default AddOns;
