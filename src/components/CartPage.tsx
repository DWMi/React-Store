import React, { CSSProperties, FC } from "react";



const CartPage: FC = () => {


  return (

    <div style={CartPageStyle} id="cartPage">

      <h1> Cart Page </h1> {/* product cards here */}
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