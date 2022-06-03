import React, { CSSProperties, FC } from "react";
import { Button } from '@mui/material'
import { Link } from "react-router-dom";

const CheckOutPage: FC = () => {


  return (

    <div style={CheckOutPageStyle} id="cartPage">

      <h1> Checkout Page </h1> {/* product cards here */}

      <div style={BackButton}>
      <Button variant="contained" color="success"><Link to={"/CartPage"}>Back to cartpage</Link></Button>
      </div>

    </div>

  );
}

export default CheckOutPage;





//normal style here

export const CheckOutPageStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh'
    }

    export const BackButton: CSSProperties = {

    }