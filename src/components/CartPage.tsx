import React, { CSSProperties, FC } from "react";
import { Box, Button, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import productList, {Product} from "../data/productList";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Navigate, useParams } from "react-router-dom";
import '../index.css'
import { height } from "@mui/system";

interface Props {
  product: Product
}

const TAX_RATE = 0.07;

function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

function createRow(desc: string, qty: number, unit: number) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

interface Row {
  desc: string;
  qty: number;
  unit: number;
  price: number;
}

function subtotal(items: readonly Row[]) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const imageCart = productList[2];


const CartPage: FC = () => {

  if(imageCart.id === 1) {
  let pictureCart = (document.querySelector('cartPic') as HTMLImageElement);
  pictureCart.src = imageCart.productImg.img1;
  }
  return (
    <Box style={CartPageStyle}>
        <TableContainer component={Paper} style={ProductContainer}>
          <Table sx={{ minWidth: 200 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={3}>
                  1. Your shopping bag
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{fontWeight: 'bold', paddingLeft: '20px'}}>Products</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center" style={{fontWeight: 'bold'}}>Quantity</TableCell>
                <TableCell align="center" style={{fontWeight: 'bold'}}>Unit Price</TableCell>
                <TableCell align="right" style={{fontWeight: 'bold'}}>Total</TableCell>
              </TableRow>
            </TableHead>

        <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell style={productInfoDiv}>
                    <img src={imageCart.productImg.img1} style={{width: '150px'}}/>
                    <div style={infoCont}><div>{imageCart.productTitle}</div></div>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                  <TableCell align="right"><DeleteForeverIcon /></TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={3} style={{fontWeight: 'bold'}}>Total price inc. tax</TableCell>
                <TableCell style={{fontWeight: 'bold'}} align="right">{ccyFormat(invoiceSubtotal)} </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={ProductContainer}>
        <Table sx={{ minWidth: 200 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={3}>
                1. Check out
              </TableCell>  
            </TableRow>
          </TableHead>
          <TableBody style={{height: '100%'}}>
            <Typography>
              ojadfsjfdsjdfssl
            </Typography>
            
          <div style={CheckOutButtonContainer}>
            <Button variant="contained" color="success"><Link style={buttonStyle} to={"/CheckOutPage"}>Check Out</Link></Button>
            </div>
        </TableBody>
          </Table>
        </TableContainer>
    </Box> 
    )
  }
  
  export default CartPage;

  
//normal style here

export const CartPageStyle: CSSProperties = {
    display: 'flex',
    height: '100%',
    maxWidth: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgb(211, 212, 212)',
}

export const mainContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',

}

export const CheckOutButtonContainer: CSSProperties = {
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

export const infoCont: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '30px'
}