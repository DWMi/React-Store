import { CSSProperties, FC, useState } from "react";
import Footer from "./Footer";
import Header from './Header';
import ViewContainer from "./viewContainer";
import { Props } from "../data/cartAmount"

const Layout: FC<Props> = () => {
    const [itemsNumber, setItemsNumber] = useState(0)
    return (
        <div className="layout">
            <Header setItemsNumber={setItemsNumber} itemsNumber={itemsNumber} />
            <ViewContainer itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} />
            <Footer />
        </div>    
    )
}


export default Layout