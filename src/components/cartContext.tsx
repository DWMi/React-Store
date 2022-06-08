import React, { useEffect, useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";
import { Product } from "../data/productList";

 

interface Props {}

export const CartContext = React.createContext({})


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const getProductsLocalStorage = JSON.parse(localStorage.getItem('cart') ||'[]')
    const getQtyLocalStorage = JSON.parse(localStorage.getItem('Qty') || '[]')
    
    
  
    const [cartItems, setCartItems] = useState(getProductsLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        
      }, [cartItems])

    
    const addToCart = (foundProduct: Product) => { 
      const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
      if(exist) {
        setCartItems(
          cartItems.map((item: Product) => 
          item.id === foundProduct.id ? {...exist, qty: exist.qty + 1} : item )
          )

          
           
        
      } else {
        setCartItems([...cartItems, {...foundProduct, qty: 1}]);
      }
      
    }
    
    
    const removeFromCart = (foundProduct: Product) => {
      const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
      if(exist.qty > 1) {
        
        setCartItems(
        cartItems.map((item: Product) => 
          item.id === foundProduct.id ? {...exist, qty: exist.qty - 1} : item )
          )
      } 
    }



    return (    
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider