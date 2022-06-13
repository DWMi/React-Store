
import React, {FC,useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material'
import Modal from './Modal'
import OrderConfirmationComponent from "./orderConfirmationComponent";


interface Item {
  id:string,
  productImg:{
    img1:string 
  },
  productTitle:string,
  qty:number,
  productPrice:number
}
interface Props  {
  NextStep?: boolean,
  setNextStep:React.Dispatch<React.SetStateAction<boolean>>,
  radioValue:string,
  setRadioValue?: React.Dispatch<React.SetStateAction<string>>,
  shipValue:string,
  email: string,
  firstName: string,
  lastName: string,
  city: string,
  zipCode: string,
  street: string,
  payment: string,
  country: string,
}


const SummaryCheckoutComponent:FC<Props> = ({radioValue,shipValue,setNextStep, firstName, lastName, email, country, zipCode, payment, city, street}) =>{
  const [cartItems, setCartItems ] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    
    const cart = JSON.parse(localStorage.getItem('cart')|| '') 
    if(cart){
      setCartItems(cart)
    }
  },[])


const totalSummary = cartItems.reduce((total:number, currentValue: Item)=>{
  return total + currentValue.productPrice * currentValue.qty
},0)

console.log(totalSummary)
    return(
      <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={1}>
                  Products
                </TableCell> 
                <TableCell style={{fontWeight: 'bold'}} align="left" colSpan={1}>
                </TableCell> 
                <TableCell style={{fontWeight: 'bold'}} align="center" colSpan={4}>
                  Quantity
                </TableCell>  
                <TableCell style={{fontWeight: 'bold'}} align="center" colSpan={3}>
                Product Price
                </TableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
                  {cartItems.map((item:Item) => (
                    <TableRow  key={item.id}>
                      <TableCell align="left" colSpan={1}><img style={{width: '100px'}} src={item.productImg.img1}/> </TableCell>
                      <TableCell align="left" colSpan={1}>{item.productTitle}</TableCell>
                      <TableCell align="center" colSpan={4}>{item.qty+ 'x'}</TableCell>
                      <TableCell align="center"colSpan={3}>{(item.productPrice + ' kr')}</TableCell>
                    </TableRow>
                  ))}
                    <TableRow>
                      <TableCell style={{fontWeight:'bold'}} align="center" colSpan={3}>
                        SubTotal (excl. tax)
                      </TableCell>
                      <TableCell align="center" colSpan={4}>
                        {totalSummary - (totalSummary * 0.25) + ' kr'} 
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{fontWeight:'bold'}} align="center" colSpan={3}>
                        Tax (25%)
                      </TableCell>
                      <TableCell align="center" colSpan={4}>
                        {totalSummary * 0.25 + ' kr'} 
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell style={{fontWeight:'bold'}}  align="center" colSpan={3}>
                        Shipping
                      </TableCell>  
                      <TableCell  align="center" colSpan={4}>
                        {radioValue === '0' ? 'Free' : radioValue + 'kr'}
                      </TableCell>  
                    </TableRow>  
                    
                    <TableRow>
                      <TableCell style={{fontWeight:'bold'}}  align="center" colSpan={3}>
                        Total
                      </TableCell>
                      <TableCell align="center" colSpan={4}>
                        {totalSummary + parseInt(radioValue)+' kr' }
                      </TableCell>
                    </TableRow>
                    
            </TableBody>
          </Table>
          <Box style={{margin:'40px', textAlign:'center'}}>
              <Button onClick={()=> setShowModal(true) } fullWidth type="submit" variant="contained">Place order</Button>
          </Box>
        </TableContainer>
        {
        showModal ?
          <Modal>
            <OrderConfirmationComponent
                    totalSummary={totalSummary} 
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    country={country}
                    city={city}
                    zipCode={zipCode}
                    street={street}
                    payment={payment}
                    shipValue={shipValue} /> 
          </Modal>
          : null
        }
          </>
    )
    
}

export default SummaryCheckoutComponent