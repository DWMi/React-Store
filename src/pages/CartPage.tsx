import React, { CSSProperties, FC, useContext } from "react";
import { Box, Button } from "@mui/material";
import productList, { Product } from "../data/productList";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { CartContext } from "../components/cartContext";
import { CartProductCard } from "../components/cards/CartProductCard";
import { CartTableRow } from "../components/CartTableRow";
import { flexDeadCenter, flexRow } from "../style/common";
import { Device, DeviceContext } from "../provider/deviceProvider";

export const CartPage: FC = () => {
  const { cartItems } = useContext(CartContext);
  
  
  const { devices } = useContext(DeviceContext)

  let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
  if(devices.isDesktop) {
      currentDevice = "Desktop"
  } else if(devices.isTablet) {
      currentDevice = "Tablet"
  } else {
      currentDevice = "Mobile"
  }

  let totalPrice = 0;

  cartItems.forEach((product: Product) => {
    totalPrice += product.productPrice * product.qty!;
  });

  return (
    <Box style={{...CartPageStyle, ...cartPage(devices)}}>
      {(() => {
        if (cartItems.length >= 1) {
          return (
            <Box style={{...CartPageStyle, ...cartPage(devices)}}>
              <TableContainer component={Paper} style={{...ProductContainer, ...productContainer(devices), ...flexDeadCenter}}>
                <Table style={container(devices)} aria-label="spanning table">
                  <CartTableRow />

                  {cartItems.map((product: Product) => (
                    <CartProductCard key={product.id} product={product} />
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell align='right' colSpan={4}
                      style={{ fontWeight: "bold", minWidth: '290px' }}
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
            <TableContainer component={Paper} style={{...ProductContainer, ...flexDeadCenter}}>
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
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        to={"/ProductPage"}
                      >
                        <Button
                          style={{
                            width: '100%',
                            fontSize: "100%",
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


const container: (devices: Device) => CSSProperties = (devices) => {
  return {
  width: devices.isMobile? '150px' : devices.isTablet? '600px' : ' 1200px'
  
  }
};
const productContainer: (devices: Device) => CSSProperties = (devices) => {
  return {
    width: devices.isMobile? '100%': '100%' 
  }
};
const cartPage: (devices: Device) => CSSProperties = (devices) => {
  return {
    paddingTop: devices.isMobile? '0px': '138px' ,
    paddingBottom: devices.isMobile? '0': '182px'
  }
};


//normal style here

export const CartPageStyle: CSSProperties = {
  display: "flex",
  height: "100%",
  minHeight: '100vh',
  justifyContent: 'center',
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "138px",
  // paddingBottom: "182px",

}

export const ProductContainer: CSSProperties = {
  width: '95%',
  display: "flex",
  background: "white",
};



