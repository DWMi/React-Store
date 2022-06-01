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

<img src={productList[6].productImg.img1} alt="" />
        {/* <img src={props.products.productImg,img1} alt="" /> */}

    </div>

  );
}

export default SingleProduct;





//normal style here