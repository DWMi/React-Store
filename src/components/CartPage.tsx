import React, { CSSProperties, FC, useContext } from "react";
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import { CartContext } from "./cartContext";
import { Product } from "../data/productList";


const CartPage: FC = () => {

  const {cartItems} = useContext(CartContext)

  return (

    <div style={CartPageStyle} id="cartPage">

      <h1> Cart Page </h1> {/* product cards here */}

          {
            cartItems.map((item) => (
              
              <h1>{item.productTitle}</h1>
              
            ))
          }

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