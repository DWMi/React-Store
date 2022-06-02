import React, { CSSProperties, FC } from "react";
import { landingStyle } from "./LandingPage";
import productList,{Product} from "../data/productList";


export interface Props {

  products:Product

}

export const SingleProduct: FC<Props> = (props) => {
  let productArr = productList
  console.log(productArr)

  return (
    <div style={landingStyle} id="singleProduct">
      
      <h1>HEEEJ</h1>
    
    </div>

  );
}

export default SingleProduct;





//normal style here