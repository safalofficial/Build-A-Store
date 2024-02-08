import React from "react";
import AddOns from "./components/Addons";
import CartDisplay from "./components/CartDisplay";
import "./app.css";
import { CartProvider } from "./context/cart";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { StoreType } from "./components/StoreType";

const App = () => {
  return (
    <CartProvider>
      <Grid container spacing={1} direction="row" columns={16} padding={5}>
        <StoreType />
        <AddOns />
        {/* cut from below to component  */}
        <Grid item>
          <Grid item xs={3} md={5}>
            <CartDisplay />
          </Grid>
        </Grid>
      </Grid>
    </CartProvider>
  );
};
export default App;
