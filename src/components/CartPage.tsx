
import React, { CSSProperties, FC, useContext } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import productList, {Product} from "../data/productList";
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



  


function ccyFormat(num: number) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty: number, unit: number) {
  return qty * unit;
}

        

      <div>
      <Button variant="contained" color="success"><Link to={"/CheckOutPage"}>Check Out</Link></Button>
      </div>

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
const imageCart = productList[5];

const rows = [
  createRow(imageCart.productTitle, 1, imageCart.productPrice),
];

const invoiceSubtotal = subtotal(rows) 
  



export const CartPage: FC<Props> = () => {

  if(imageCart.id === 1) {
  let pictureCart = (document.querySelector('cartPic') as HTMLImageElement);
  pictureCart.src = imageCart.productImg.img2;
  const [numberOfItems, setNumberOfItems] = React.useState('');
  
  const {cartItems} = useContext(CartContext)

  cartItems.map((item: Product) => {
    item.productTitle
  })


  const handleChange = (event: SelectChangeEvent) => {
    setNumberOfItems(event.target.value);
  };
  }
  return (
    <Box style={CartPageStyle}>
        <TableContainer component={Paper} style={ProductContainer}>
          <Table sx={{ minWidth: 200 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={3}>1. Your shopping bag</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>

              <TableRow>
                <TableCell style={{fontWeight: 'bold', paddingLeft: '30px'}}>Products</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center" style={{fontWeight: 'bold'}}>Quantity</TableCell>
                <TableCell align="center" style={{fontWeight: 'bold'}}>Unit Price</TableCell>
                <TableCell align="center" style={{fontWeight: 'bold'}}>Total</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>

        <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell style={productInfoDiv}>
                    <img src={imageCart.productImg.img1} style={{width: '150px'}}/>
                    <div style={infoContent}>{imageCart.productTitle}</div>
                  </TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">

                    <FormControl sx={{ m: 10, minWidth: 70 }} size="small">
                      <InputLabel id="demo-select-small"></InputLabel>
                        <Select
                        value={row.qty}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={3}>4</MenuItem>
                          <MenuItem value={3}>5</MenuItem>
                          <MenuItem value={3}>6</MenuItem>
                          <MenuItem value={3}>7</MenuItem>
                          <MenuItem value={3}>8</MenuItem>
                          <MenuItem value={3}>9</MenuItem>
                          <MenuItem value={3}>10</MenuItem>
                    </Select>
                  </FormControl>

                  </TableCell>
                  <TableCell align="center">{row.unit}</TableCell>
                  <TableCell align="center">{ccyFormat(row.price)}</TableCell>
                  {/* trashcan item */}
                  <TableCell align="right"><DeleteForeverIcon  /></TableCell>
                  {/* trashcan item */}
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell align="right" colSpan={3} style={{fontWeight: 'bold'}}>Total price:</TableCell>
                <TableCell style={{fontWeight: 'bold'}}>{ccyFormat(invoiceSubtotal)} </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={ProductContainer}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={3}>
                1. Check out
              </TableCell>  
            </TableRow>
          </TableHead>
          <TableBody style={{height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>
            <Typography style={{fontSize: '20px', fontWeight: 'bold', width: '40%', paddingBottom: '30px'}}>
              FILL IN YOUR INFORMATION, THEN YOU CAN PROCEED TO CHECKOUT
            </Typography>

            <Box>
              <div style={{width: '400px'}}>
              <TextField
                
                label="Email or Phone number"
                variant="filled"
                color="success" 
                focused
                style={{paddingBottom: '30px', width: '400px'}} />
              </div>
            </Box>

          <div style={CheckOutButtonContainer}>
          <Link style={buttonStyle} to={"/CheckOutPage"}><Button variant="contained" color="success" style={{width: '400px', height: '60px'}}>Check Out</Button></Link>
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

