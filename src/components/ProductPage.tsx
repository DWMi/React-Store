import React, { CSSProperties, FC } from "react";
import productList from "../data/productList";
import ProductCard from "./ProductCard";



export const ProductPage: FC = () => {


  return (

    <div style={pageStyle} id="productPage">
      
      <div style={containerStyle}>

           {
                productList.map((product) => (
                  
                        <ProductCard product = {product} />
                ))
            }

      </div>
    </div>

  );
}

export default ProductPage;
const pageStyle: CSSProperties = {
  width: '100%',
  display: 'flex',
  justifyContent: "center",
  padding: '40px'
 
}

const containerStyle: CSSProperties = {
  display: 'flex',
  width: '90%',
  flexBasis: '33,333%',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '30px',
}



//normal style here
