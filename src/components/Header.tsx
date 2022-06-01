import React, { CSSProperties, FC } from "react";


export const Header: FC = () => {


  return (

    <div style={display} id="headerContainer">

      <div className="logo">
        <h1> Logo </h1>
      </div>
      <div className="menu">
        <h1>Products</h1> {/* goes to product page */}
      </div>
      <div className="cartIcon">
        <h1>Cart</h1>
      </div>

    </div>

  );
}

export default Header;





//normal style here

export const display: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around'
  }