import React, { CSSProperties, FC } from "react";
import { display } from "./Header";


export const Footer: FC = () => {


  return (

    <div style={display} id="footerContainer">

      <div className="logo">
        <h1> Contacts </h1>
      </div>
      <div className="menu">
        <h1>Copyright</h1>
      </div>
      <div className="cartIcon">
        <h1>Social</h1>
      </div>

    </div>

  );
}

export default Footer;





//normal style here
