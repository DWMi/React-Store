import { CSSProperties, FC, useState } from "react";
import Footer from "./Footer";
import Header from './Header';
import ViewContainer from "./viewContainer";
import { Props } from "../data/cartAmount"
import CartProvider  from "./cartContext";

const Layout: FC<Props> = () => {
    const [itemsNumber, setItemsNumber] = useState(0)
    return (
        <div className="layout">
                <CartProvider>
                    <Header setItemsNumber={setItemsNumber} itemsNumber={itemsNumber} />
                    <ViewContainer itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} />
                    <Footer />
                </CartProvider>
                
        </div>    
    )
}


export default Layout