import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from './AdminPage'
import CartPage from './CartPage'
import CheckOutPage from './CheckoutPage'
import LandingPage from './LandingPage'
import ProductPage from './ProductPage'
import SingleProduct from './SingleProduct'
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