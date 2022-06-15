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
import { flexDeadCenter, flexRow } from "../style/common";

export const CartPage: FC = () => {
  const { cartItems } = useContext(CartContext);

  let totalPrice = 0;

  cartItems.forEach((product: Product) => {
    totalPrice += product.productPrice * product.qty!;
  });

  return (
    <Box style={{...CartPageStyle}}>
      {(() => {
        if (cartItems.length >= 1) {
          return (
            <Box style={{...CartPageStyle, paddingBottom: '0'}}>
              <TableContainer component={Paper} style={ProductContainer}>
                <Table style={{ minWidth: '150px' }} aria-label="spanning table">
                  <CartTableRow />

                  {cartItems.map((product: Product) => (
                    <CartProductCard key={product.id} product={product} />
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell align='right' colSpan={4}
                      style={{ fontWeight: "bold", minWidth: '190px' }}
                    >
                      Total price: {totalPrice},00 kr
                    </TableCell>
                  </TableRow>
                </Table>
              </TableContainer>

              <div style={{ ...flexDeadCenter, margin: "20px" }}>
                <Link style={{ textDecoration: "none" }} to={"/CheckoutPage"}>
                  <Button
                    style={{
                      
                      fontSize: "100%",
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
                    <TableCell rowSpan={3} />
                    <TableCell align='right' colSpan={4}
                      style={{ fontWeight: "bold", minWidth: '190px' }}
                    >
                      Total price: {totalPrice},00 kr
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
  paddingTop: "138px",
  paddingBottom: "182px",
};

export const ProductContainer: CSSProperties = {
  width: '95%',
  display: "flex",
  background: "white",
};



