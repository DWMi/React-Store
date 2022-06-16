import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './admin page components/AdminPage'
import CartPage from '../pages/CartPage'
import CheckOutPage from '../pages/CheckoutPage'
import LandingPage from '../pages/LandingPage'
import ProductPage from '../pages/ProductPage'
import SingleProduct from '../pages/SingleProduct'
import { ItemProps } from '../data/CartAmountProps'



const ViewContainer: FC<ItemProps> = ({itemsNumber, setItemsNumber}) => {
    return (
        <>

        <Routes>
            <Route path="/" element={ <LandingPage /> }/>
            <Route path="/AdminPage" element={ <AdminPage /> }/>
            <Route path="/ProductPage" element={ <ProductPage /> }/>
            <Route path="/CartPage" element={ <CartPage /> }/>
            <Route path="/CheckOutPage" element={ <CheckOutPage /> }/>
            <Route path="/:productSlug" element={ <SingleProduct itemsNumber={itemsNumber} setItemsNumber={setItemsNumber} /> }/>
        </Routes>

        
        </>
    )
}


export default ViewContainer