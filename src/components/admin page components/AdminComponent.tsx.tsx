import React from 'react'
import productList from '../../data/productList'
import AdminProduct from './AdminProduct'
import ProductCard from '../ProductCard'
import './AdminBar.css'
import AdminEditModal from './modal/AdminEditModal'

export default function AdminComponent() {


  return (
    <div className='adminBarContainer'>
      
      <div className="adminBar">
      <h1 className='product'>Products</h1>

      <div className='productContainer'>

      {
        productList.map((product) => (
          
          <AdminProduct key={product.id} product={product}/>
          ))
        }


</div>
     

      </div>
      
      </div>
  )
}
