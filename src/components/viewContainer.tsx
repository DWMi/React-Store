import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import LandingPage from './LandingPage'
import ProductPage from './ProductPage'





const ViewContainer: FC = () => {
    return (
        <>

        <Routes>
            <Route path="/" element={ <LandingPage /> }/>
            <Route path="/ProductPage" element={ <ProductPage /> }/>
            <Route path="/CartPage" element={ <CartPage /> }/>
        </Routes>

        
        </>
    )
}


export default ViewContainer