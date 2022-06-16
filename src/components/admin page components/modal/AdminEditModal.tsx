import React, { useState, useContext, useEffect, CSSProperties, FC } from 'react'
import { toast } from 'react-toastify'
import { Product } from '../../../data/productList'
import { CartContext } from '../../cartContext'
import '../../../style/AdminEditModal.css'

interface Props {
    product: Product
    setOpenModal: (value: boolean) => void
    showBtn: boolean

}

const AdminEditModal: FC<Props> = (props) => {


    const [productName, setProductName] = useState('')
    const [priceProduct, setPriceProduct] = useState<any>()
    const [slug, setSlug] = useState('')
    const [material, setMaterial] = useState('')
    const [form, setForm] = useState('')
    const [toneGrade, setToneGrade] = useState('')
    const [uvPro, setUvPro] = useState('')
    const [productCase, setProductCase] = useState('')
    const [productImg1, setProductImg1] = useState('')
    const [productImg2, setProductImg2] = useState('')


    const { productArr } = useContext(CartContext)
    const { setProductArr } = useContext(CartContext)



    const addProduct = () => {

        let lastProductInArr = productArr.slice(-1)
                
        const productToAdd: Product = {
            id: lastProductInArr[0].id + 1,
            slug: slug,
            productTitle: productName,
            productDescription: {
                form: form,
                material: material,
                toneGrade: toneGrade,
                uvPro: uvPro,
                case: productCase
            },
            productImg: {
                img1: productImg1,
                img2: productImg2,
            },
            productPrice: priceProduct
        }

        setProductArr((productArr: any) => [...productArr, productToAdd]);
        toast.success(`${productToAdd.productTitle} has been added to products`, { position: 'bottom-left', autoClose: 1500, hideProgressBar: true })
        props.setOpenModal(false)
       
    }

    const editProduct = () => {

        props.product.slug = slug || props.product.slug
        props.product.productTitle = productName || props.product.productTitle
        props.product.productPrice = priceProduct || props.product.productPrice
        props.product.productDescription.form = form || props.product.productDescription.form
        props.product.productDescription.material = material || props.product.productDescription.material
        props.product.productDescription.toneGrade = toneGrade || props.product.productDescription.toneGrade
        props.product.productDescription.uvPro = uvPro || props.product.productDescription.uvPro
        props.product.productDescription.case = productCase || props.product.productDescription.case
        props.product.productImg.img1 = productImg1 || props.product.productImg.img1
        props.product.productImg.img2 = productImg2 || props.product.productImg.img2


        localStorage.setItem('PRODUCTS', JSON.stringify(productArr))

        toast.success(`${props.product.productTitle} has been successfully edited`, { position: 'bottom-left', autoClose: 1500, hideProgressBar: true })

        props.setOpenModal(false)

    }


    return (

        <div className='background'>
            <div className='container'>
                <div className='closeButton'>
                    <button className='xButton' onClick={() => props.setOpenModal(false)}>&times;</button>
                </div>
                {props.showBtn ?
                    <div className='title'>
                        <h1>Add new product</h1>
                    </div> :

                    <div className='title'>
                        <h1>Edit product</h1>
                    </div>
                }

                <div className='body'>
                    <p>Name of Product</p>
                    <input type="text"   onChange={(e) => setProductName(e.target.value)} />
                    <p>Price</p>
                    <input type="number" onChange={(e) => setPriceProduct(e.target.value)} />
                    <p>Slug</p>
                    <input type="text" onChange={(e) => setSlug(e.target.value)} />
                    <p>Material</p>
                    <input type="text" onChange={(e) => setMaterial(e.target.value)} />
                    <p>Form</p>
                    <input type="text" onChange={(e) => setForm(e.target.value)} />
                    <p>Tone grade</p>
                    <input type="text" onChange={(e) => setToneGrade(e.target.value)} />
                    <p>UV pro</p>
                    <input type="text" onChange={(e) => setUvPro(e.target.value)} />
                    <p>Case</p>
                    <input type="text" onChange={(e) => setProductCase(e.target.value)} />
                    <p>Product Img 1</p>
                    <input type="text" onChange={(e) => setProductImg1(e.target.value)} />
                    <p>Product Img 2</p>
                    <input type="text" onChange={(e) => setProductImg2(e.target.value)} />

                    {props.showBtn ?                    

                        <div className='buttons'>
                            <button onClick={() => addProduct()}>Add product</button>
                            <button id='cancelBtn' onClick={() => props.setOpenModal(false)}>Cancel</button>
                        </div> :
                        <div className='buttons'>
                            <button onClick={() => editProduct()}>Save</button>
                            <button id='cancelBtn' onClick={() => props.setOpenModal(false)}>Cancel</button>
                        </div>
                    
                    }

                    
                    
                </div>
            </div>
        </div>
    
    )
}

export default AdminEditModal


