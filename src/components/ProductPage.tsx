import React, { CSSProperties, FC } from "react";
import productList from "../data/productList";
import ProductCard from "./ProductCard";



export const ProductPage: FC = () => {


  return (

    <div style={containerStyle} id="productPage">

      

           {
                productList.map((product) => (
                  
                        <ProductCard product = {product} />
                ))
            }

      <h1> Products </h1> {/* product cards here */}

    </div>

  );
}

export default ProductPage;

const containerStyle: CSSProperties = {
  display: 'flex',
  flexBasis: '33,333%',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '30px',
}



//normal style here

