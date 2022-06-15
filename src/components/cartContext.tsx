import React, { useEffect, useRef, useState } from "react";
import { FC, PropsWithChildren } from "react";
import productList, { Product } from "../data/productList";
import { toast } from 'react-toastify';




interface ValuesProvider {
  cartItems: []
  productArr: []
  cartQty: number
  itemsNumber: number,
  addToCart: (foundProduct: Product) => void
  removeFromCart: (foundProduct: Product) => void
  setItemsNumber: React.Dispatch<React.SetStateAction<number>>
  decreaseFromCart: (foundProduct: Product) => void
  increaseToCart: (foundProduct: Product) => void
  setProductArr: (foundProduct: Product) => void
}

interface Props { }

export const CartContext = React.createContext<ValuesProvider>({} as ValuesProvider)


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {
  const productArrLocalStorage = JSON.parse(localStorage.getItem('PRODUCTS') || '[]')
  const getProductsLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]')
  const getQtyLocalStorage = JSON.parse(localStorage.getItem('qty') || '0')

  const [productArr, setProductArr] = useState(productArrLocalStorage)
  const [itemsNumber, setItemsNumber] = useState(1)
  const [cartItems, setCartItems] = useState(getProductsLocalStorage)
  const [cartQty, setCartQty] = useState(getQtyLocalStorage)



  useEffect(() => {

    if (productArr.length === 0) {
      localStorage.setItem('PRODUCTS', JSON.stringify(productList))
    } else {
      localStorage.setItem('PRODUCTS', JSON.stringify(productArr))
    }


  }, [productArr])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))

  }, [cartItems])


  useEffect(() => {
    localStorage.setItem('qty', JSON.stringify(cartQty))

  }, [cartQty])


  const addToCart = (foundProduct: Product) => {
    const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
    if (exist) {
      setCartItems(
        cartItems.map((item: Product) =>
          item.id === foundProduct.id ? { ...exist, qty: exist.qty + itemsNumber } : item)
      )
      addCartNumbers(foundProduct)

    } else {
      setCartItems([...cartItems, { ...foundProduct, qty: itemsNumber }]);
      addCartNumbers(foundProduct)
      toast.success(`${foundProduct.productTitle} was added to cart`, { position: 'bottom-left', autoClose: 1200, hideProgressBar: true })

    }

  }

  const removeFromCart = (foundProduct: Product) => {
    const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
    setCartItems(cartItems.filter((item: Product) => item.id !== foundProduct.id))
    setCartQty(cartQty - exist.qty)
    toast.error(`${foundProduct.productTitle} was removed from cart`, { position: 'bottom-left', autoClose: 1200, hideProgressBar: true })

  }

  const addCartNumbers = (foundProduct: Product) => {
    const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
    if (cartQty) {
      setCartQty(cartQty + itemsNumber)
    } else {
      setCartQty(itemsNumber)
    }
  }

  // Inside cart functionality
  const decreaseFromCart = (foundProduct: Product) => {
    const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
    if (exist.qty > 1) {
      setCartItems(
        cartItems.map((item: Product) =>
          item.id === foundProduct.id ? { ...exist, qty: exist.qty - 1 } : item)
      )
      setCartQty(cartQty - 1)
    }
  }

  const increaseToCart = (foundProduct: Product) => {
    const exist = cartItems.find((item: Product) => item.id === foundProduct.id);
    if (exist) {
      setCartItems(
        cartItems.map((item: Product) =>
          item.id === foundProduct.id ? { ...exist, qty: exist.qty + 1 } : item)
      )
      setCartQty(cartQty + 1)
    }

  }



  return (
    <CartContext.Provider value={{ productArr, itemsNumber, cartItems, cartQty, setItemsNumber, addToCart, removeFromCart, decreaseFromCart, increaseToCart, setProductArr }}>
      {props.children}
    </CartContext.Provider>
  )

}

export default CartProvider