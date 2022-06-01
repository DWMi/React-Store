import React, { CSSProperties, FC } from "react";
import { FiShoppingBag } from 'react-icons/Fi'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




const Header: FC = () => {

  return (

    <div style={display} id="headerContainer">

          <div className="logo">
            <h1>
              <Link to={"/"} style={HeadNav}>Optical</Link>
            </h1>
          </div>

            <div className="menu">
              <h1>
                <Link to={"/ProductPage"} style={HeadNav}>Products</Link>
              </h1>
            </div>

          <div className="cartIcon">
            <h1>
              <Link to={"/CartPage"} style={HeadNav}><FiShoppingBag /></Link>
            </h1>
          </div>

    </div>

  );
}

export default Header;





//normal style here

export const display: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  background: 'black',
  }


  export const HeadNav: CSSProperties = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Fira Sans'
  }