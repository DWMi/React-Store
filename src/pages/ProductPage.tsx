import React, { CSSProperties, FC, useContext } from "react";
import productList, { Product } from "../data/productList";
import { CartContext } from "../components/cartContext";
import ProductCard from "../components/cards/ProductCard";



export const ProductPage: FC = () => {

const {productArr} = useContext(CartContext)


  return (

    <div style={pageStyle} id="productPage">
      <div style={containerStyle}>


          {
            productArr.map((product: Product) => (
              
              <ProductCard key={product.id}  product = {product} />
            ))
          }
        

      </div>
    </div>

  );
}

export default ProductPage;
const pageStyle: CSSProperties = {
  width: '100%',
  height:'100%',
  display: 'flex',
  justifyContent: "center",
  padding: '40px',
  paddingTop:'130px'
 
}

export const containerStyle: CSSProperties = {
  display: 'flex',
  width: '80%',
  height:'100%',
  flexBasis: '33,333%',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '30px',
}



//normal style here
