import { CSSProperties, FC, useState } from "react";
import Footer from "./Footer";
import Header from './Header';
import ViewContainer from "./viewContainer";


const Layout: FC = () => {
    return (
        <div className="layout">
            <Header />
            <ViewContainer />
            <Footer />
        </div>    
    )
}


export default Layout