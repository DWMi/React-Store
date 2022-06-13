
import React, { CSSProperties, FC, useContext } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import productList, { Product } from "../data/productList";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import '../index.css'
import { Props } from "../data/cartAmount"
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import { CartProductCard } from "./CartProductCard"
import { CartTableRow } from "./CartTableRow";

// Denna knapp ska användas ?
<div>
  <Button variant="contained" color="success"><Link to={"/CheckOutPage"}>Check Out</Link></Button>
</div>


export const CartPage: FC<Props> = () => {


  const { cartItems } = useContext(CartContext)

  let totalPrice = 0;

  cartItems.forEach(product => {
    totalPrice += product.productPrice * product.qty
  })

  return (

    <Box style={CartPageStyle}>
      {
        (() => {
          if (cartItems.length >= 1) {
            return (
              <Box style={CartPageStyle}>
                <TableContainer component={Paper} style={ProductContainer}>
                  <Table sx={{ minWidth: 200 }} aria-label="spanning table">
                    <CartTableRow />

                    {
                      cartItems.map((product: Product) => (
                        <CartProductCard key={product.id} product={product} />
                      ))
                    }
                    <TableRow>
                      <TableCell rowSpan={3} />
                      <TableCell align="right" colSpan={3} style={{ fontWeight: 'bold' }}>Total price:</TableCell>
                      <TableCell style={{ fontWeight: 'bold' }}>{totalPrice},00 kr</TableCell>
                    </TableRow>
                  </Table>
                </TableContainer>
              </Box>
            )
          } else {
            return (
              <Box style={CartPageStyle}>
                <h1>Cart is empty motherfucker sucker bitch</h1>
              </Box>
            )
          }

        })()
      }
    </Box>


  )
}

export default CartPage;


//normal style here

export const CartPageStyle: CSSProperties = {
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'rgb(211, 212, 212)',
}

export const mainContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',

}

export const CheckOutButtonContainer: CSSProperties = {
  paddingBottom: '30px',
  display: 'flex',
  justifyContent: 'center',
}

export const buttonStyle: CSSProperties = {
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold',
}

export const ProductContainer: CSSProperties = {
  marginTop: '20px',
  display: 'flex',
  width: '70vw',
  background: 'white',

}

export const productInfoDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'row'
}

export const infoContent: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '30px'
}

