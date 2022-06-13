import React, { useState, CSSProperties, FC } from 'react'
import './AdminEditModal.css' 


export function AdminEditModal ({closeModal})  {



   

  return (

    <div  className='background'>
        <div className='container'>
            <div className='closeButton'>
            <button className='xButton' onClick={() => closeModal(false)}>&times;</button>
            </div>
            <div className='title'>
                <h1>Edit Product</h1>
            </div>
            <div className='body'>
                <p>Name of Product</p>
                <input type="text" />
                <p>Price</p>
                <input type="text" />
                <div className='input'>
                <input type="file"/>
                </div>
            </div>
            <div className='buttons'>
                <button>Save</button>
                <button id='cancelBtn' onClick={() => closeModal(false)}>Cancel</button>
            </div>
        </div>
    </div>

  )
}

export default AdminEditModal


