import React, { FC, useContext, useState } from 'react'
import productList, { Product } from '../../data/productList'
import AdminProduct from './AdminProduct'

import '../../style/adminBar.css'
import { CartContext } from '../cartContext'
import { Button } from '@mui/material'
import AdminEditModal from "./modal/AdminEditModal";

interface Props {
  product: Product

}

const AdminComponent: FC<Props> = (props) => {

  const [openModal, setOpenModal] = useState(false)
  const [showBtn, setShowBtn] = useState(false)

  const onClickFunc = () => {
    setOpenModal(true)
    setShowBtn(true)
  }
  

  const { productArr } = useContext(CartContext)

  return (
    <div className='adminBarContainer'>

      <div className="adminBar">
        <h1 className='product'>Products</h1>
        <Button
          style={{
            padding: "20px 30px",
            fontSize: "25px",
            borderRadius: "0",
            
          }}
          variant="contained"
          color="success"
          onClick={onClickFunc}
        
        >
          ADD NEW PRODUCT +
        </Button>

        <h1 className='product'>Edit/Delete</h1>

        {openModal && <AdminEditModal setOpenModal={setOpenModal} showBtn={showBtn} product={props.product} />}

        <div className='productContainer'>

          {
            productArr.map((product: Product) => (

              <AdminProduct key={product.id} product={product}  showBtn={showBtn}  />
            ))
          }


        </div>


      </div>

    </div>
  )

        }
      

export default AdminComponent
