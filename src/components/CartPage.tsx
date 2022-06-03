import React, { CSSProperties, FC } from "react";
import { Button } from '@mui/material'
import { Link } from "react-router-dom";

const CartPage: FC = () => {


  return (

    <div style={CartPageStyle} id="cartPage">

      <h1> Cart Page </h1> {/* product cards here */}

      <div style={CheckOutButton}>
      <Button variant="contained" color="success"><Link to={"/CheckOutPage"}>Check Out</Link></Button>
      </div>

    </div>

  );
}

export default CartPage;





//normal style here

export const CartPageStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
    }


export const CheckOutButton: CSSProperties = {

}