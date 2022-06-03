import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage'
import CartPage from './CartPage'
import CheckOutPage from './CheckoutPage'
import LandingPage from './LandingPage'
import ProductPage from './ProductPage'
import SingleProduct from './SingleProduct'





const ViewContainer: FC = () => {
    return (
        <>

        <Routes>
            <Route path="/" element={ <LandingPage /> }/>
            <Route path="/AdminPage" element={ <AdminPage /> }/>
            <Route path="/ProductPage" element={ <ProductPage /> }/>
            <Route path="/CartPage" element={ <CartPage /> }/>
            <Route path="/CheckOutPage" element={ <CheckOutPage /> }/>
            <Route path="/:productSlug" element={ <SingleProduct /> }/>
        </Routes>

        
        </>
    )
}


export default ViewContainer