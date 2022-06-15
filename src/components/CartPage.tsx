import React, { CSSProperties, FC, useContext } from "react";
import { Box, Button } from "@mui/material";
import productList, { Product } from "../data/productList";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import { CartProductCard } from "./CartProductCard";
import { CartTableRow } from "./CartTableRow";
import { flexDeadCenter } from "../style/common";

export const CartPage: FC = () => {
  const { cartItems } = useContext(CartContext);

  let totalPrice = 0;

  cartItems.forEach((product: Product) => {
    totalPrice += product.productPrice * product.qty!;
  });

  return (
    <Box style={CartPageStyle}>
      {(() => {
        if (cartItems.length >= 1) {
          return (
            <Box style={CartPageStyle}>
              <TableContainer component={Paper} style={ProductContainer}>
                <Table sx={{ minWidth: 200 }} aria-label="spanning table">
                  <CartTableRow />

                  {cartItems.map((product: Product) => (
                    <CartProductCard key={product.id} product={product} />
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell
                      align="right"
                      colSpan={3}
                      style={{ fontWeight: "bold" }}
                    >
                      Total price:
                    </TableCell>
                    <TableCell style={{ fontWeight: "bold" }}>
                      {totalPrice},00 kr
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>

              <div style={{ ...flexDeadCenter, margin: "20px" }}>
                <Link style={{ textDecoration: "none" }} to={"/CheckoutPage"}>
                  <Button
                    style={{
                      padding: "20px 100px",
                      fontSize: "25px",
                      borderRadius: "0",
                    }}
                    variant="contained"
                    color="success"
                  >
                    GO TO CHECK OUT
                  </Button>
                </Link>
              </div>
            </Box>
          );
        } else {
          return (
            <TableContainer component={Paper} style={ProductContainer}>
              <Table sx={{ minWidth: 200 }} aria-label="spanning table">
                <CartTableRow />

                <TableRow>
                  <TableCell colSpan={6} align="center">
                    <h1 style={{ fontSize: "35px", marginTop: "10px" }}>
                      Your cart is empty
                    </h1>
                    <div
                      style={{
                        ...flexDeadCenter,
                        margin: "20px",
                        padding: "20px 200px",
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/ProductPage"}
                      >
                        <Button
                          style={{
                            fontWeight: "bold",
                            padding: "20px 70px",
                            fontSize: "20px",
                            borderRadius: "0",
                          }}
                          variant="contained"
                          color="success"
                        >
                          Shop Now!
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell rowSpan={3}></TableCell>
                  <TableCell
                    align="right"
                    colSpan={3}
                    style={{ fontWeight: "bold" }}
                  >
                    Total price:
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    {totalPrice},00 kr
                  </TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          );
        }
      })()}
    </Box>
  );
};

export default CartPage;

//normal style here

export const CartPageStyle: CSSProperties = {
  display: "flex",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  background: "rgb(211, 212, 212)",
  paddingTop: "138px",
  paddingBottom: "182px",

}

export const ProductContainer: CSSProperties = {
  display: "flex",
  width: "70vw",
  background: "white",
};



