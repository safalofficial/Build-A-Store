import { CardContent, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const CartDisplay = () => {
  const [cart, setCart] = useContext(CartContext);
  const GST = 0.1;
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  function priceRow(qty, unit) {
    return qty * unit;
  }
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  const tempFunction = () => {
    var abc = [];
    cart.map((item) => {
      abc.push(
        createRow(
          item.item.Heading,
          item.qty,
          parseFloat(item.item["Product Price (ex GST)"])
        )
      );
    });
    return abc;
  };
  const rows = tempFunction();
  const increaseQuantity = (row) => {
    var leng = cart?.length;
    var index = -1;

    for (var i = 0; i < leng; i++) {
      if (cart[i].item.Heading == row.desc) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      var tempArray = cart.slice();
      // console.log("before", tempArray);
      tempArray[index].qty += 1;
      // console.log(tempArray[index]);
      console.log(tempArray);
      setCart(tempArray);
      // console.log("After", tempArray);
    }
  };
  const decreaseQuantity = (row) => {
    var leng = cart?.length;
    var index = -1;

    for (var i = 0; i < leng; i++) {
      if (cart[i].item.Heading == row.desc) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      var tempArray = cart.slice();
      // console.log("before", tempArray);
      tempArray[index].qty -= 1;
      // console.log(tempArray[index]);
      console.log(tempArray);
      setCart(tempArray);
      // console.log("After", tempArray);
    }
  };
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = GST * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <Grid minWidth={700} minHeight={500}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="center">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">
                  <Button
                    size="small"
                    disabled={row.qty == 0}
                    onClick={() => decreaseQuantity(row)}
                    style={{
                      fontSize: 15,
                      padding: 0,
                      backgroundColor: "red",
                      color: "white",
                      marginRight: 2,
                      minWidth: 20,
                    }}
                  >
                    -
                  </Button>
                  <span style={{ padding: 2 }}>{row.qty}</span>
                  <Button
                    size="small"
                    onClick={() => increaseQuantity(row)}
                    style={{
                      fontSize: 15,
                      padding: 0,
                      backgroundColor: "green",
                      color: "white",
                      marginLeft: 2,
                      minWidth: 20,
                    }}
                  >
                    +
                  </Button>
                </TableCell>
                <TableCell align="right">${row.unit}</TableCell>
                <TableCell align="right">${ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">${ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(GST * 100).toFixed(
                0
              )} %`}</TableCell>
              <TableCell align="right">${ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">${ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={2}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => setCart([])}
                >
                  clear
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default CartDisplay;
