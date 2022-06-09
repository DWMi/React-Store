import React, { useEffect, useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";
import { Product } from "../data/productList";
import {  toast } from 'react-toastify';




interface ValuesProvider {
  cartItems: []
  cartQty: number
  itemsNumber: number,
  addToCart: (foundProduct: Product) => void
  removeFromCart: (foundProduct: Product) => void
  setItemsNumber: React.Dispatch<React.SetStateAction<number>>
}

interface Props {}

export const CartContext = React.createContext<ValuesProvider>({} as ValuesProvider)


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const getProductsLocalStorage = JSON.parse(localStorage.getItem('cart') ||'[]')
    const getQtyLocalStorage = JSON.parse(localStorage.getItem('qty') || '0')
    
    const [itemsNumber, setItemsNumber] = useState(1)
    const [cartItems, setCartItems] = useState(getProductsLocalStorage)
    const [cartQty, setCartQty] = useState(getQtyLocalStorage)
    
   
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        
      }, [cartItems])

      
    useEffect(() => {
      localStorage.setItem('qty', JSON.stringify(cartQty))
      
    }, [cartQty])

    
    const addToCart = (foundProduct: Product) => { 
      const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
      if(exist) {
        setCartItems(
          cartItems.map((item: Product) => 
          item.id === foundProduct.id ? {...exist, qty: exist.qty + itemsNumber} : item )
          )
          addCartNumbers(foundProduct)
          
          
        
      } else {
        setCartItems([...cartItems, {...foundProduct, qty: itemsNumber}]);
        addCartNumbers(foundProduct)
        toast.success(`${foundProduct.productTitle} was added to cart`, {position: 'bottom-left', autoClose: 1200,hideProgressBar: true})
        
        
      }
      
    }


    const addCartNumbers = (foundProduct: Product) => {
      const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
      if(cartQty) {
        setCartQty(cartQty + itemsNumber) 
      } else {
        setCartQty(itemsNumber) 
      }
    }

    
    
    const removeFromCart = (foundProduct: Product) => {
      const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
      if(exist.qty === 1) {
        setCartItems(cartItems.filter((item) => item.id !== foundProduct.id))
        setCartQty(cartQty - 1)
      } else {
        setCartItems(
        cartItems.map((item: Product) => 
          item.id === foundProduct.id ? {...exist, qty: exist.qty - 1} : item )
          ) 
          setCartQty(cartQty -1)
      }
    }



    return (    
        <CartContext.Provider value={{itemsNumber,cartItems, cartQty, setItemsNumber, addToCart, removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider