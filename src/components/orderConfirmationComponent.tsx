import React, { CSSProperties, FC, useContext } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { flexDeadCenter, flexRow, flexColumn } from '../style/common';
import { CartContext } from "./cartContext";

interface Props {
    shipValue:string,
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    zipCode: string,
    street: string,
    payment: string,
    country: string
}


const OrderConfirmationComponent:FC<Props> = ({shipValue, firstName, lastName, email, country, zipCode, payment, city, street }) => {


    const card = (
        <React.Fragment>
                    <CardContent style={{...flexColumn, ...flexDeadCenter, height:'80vh', gap:'40px'}}>
                    <Typography style={{...flexDeadCenter , ...flexColumn}} sx={{ fontSize: 50 }} color="text.secondary" gutterBottom>
                        <img style={{width:'150px',margin:'20px'}} src="../src/assets/checkmark.png"/>
                        Thank you for the Order
                    </Typography>
                    <Typography variant="h6" component="div">

                            <h4 style={{textAlign:'center'}}>Shippinginfo</h4>

                        <ul style={{listStyle:'none', gap:'20px'}}>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Mail:</h6>
                                <li style={{marginLeft:'20px',textAlign:'start'}}>{email}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Name:</h6>
                                <li style={{marginLeft:'20px',textAlign:'start'}}>{firstName +' ' +lastName}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Country:</h6>
                                <li style={{marginLeft:'20px',textAlign:'start'}}>{country}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Zip Code:</h6>
                            <li style={{marginLeft:'20px',textAlign:'start'}}>{zipCode}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>City:</h6>
                            <li style={{marginLeft:'20px',textAlign:'start'}}>{city}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Street</h6>
                            <li style={{marginLeft:'20px',textAlign:'start'}}>{street}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Shipping Method</h6>
                            <li style={{marginLeft:'20px',textAlign:'start'}}>{shipValue}</li>
                            </div>
                            <div style={{...flexRow, justifyContent:'flex-start'}}>
                                <h6 style={{alignSelf:'center'}}>Payment Method</h6>
                            <li style={{marginLeft:'20px',textAlign:'start'}} >{payment}</li>
                            </div>
                        </ul>
                    </Typography>
                    </CardContent>
                    <CardActions style={flexDeadCenter}>
                    <Link style={{ textDecoration: "none" }} to={"/"}>
                        <Button variant="contained" size="medium">Continue Your Shopping</Button>
                    </Link>
                    </CardActions>
                </React.Fragment>
    )
    return (
            <Box style={OCStyle}>
                <Card variant="outlined">{card}</Card>
            </Box>
            
        
    )
} 
export default OrderConfirmationComponent;

const orderConfirmationStyle: CSSProperties = {
    backgroundColor: 'black',
    zIndex: 6

}


const OCStyle: CSSProperties = {

    position:'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '20px',
    zIndex: 10,
    width:'80%'

}