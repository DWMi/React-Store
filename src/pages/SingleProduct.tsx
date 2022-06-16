
import React, { CSSProperties, FC, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import productList, {Product} from "../data/productList";
import { flexDeadCenter, flexColumn, flexRow, marginLR, button, HW100 } from "../style/common";
import { ItemProps } from '../data/CartAmountProps'
import { useContext } from "react";
import { CartContext } from "../components/cartContext";
import { ExitToAppSharp } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Device, DeviceContext } from "../provider/deviceProvider";
import { textAlign } from "@mui/system";




export const SingleProduct: FC<ItemProps> = () => {

  const { productSlug } = useParams()

  const {productArr} = useContext(CartContext)

  const { devices } = useContext(DeviceContext)

  let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
  if(devices.isDesktop) {
      currentDevice = "Desktop"
  } else if(devices.isTablet) {
      currentDevice = "Tablet"
  } else {
      currentDevice = "Mobile"
  }


  


  const foundProduct = productArr.find((product) => (productSlug) == product.slug)
  
  if(!foundProduct) {
    return <Navigate to="/" />
  }
  
  
  const {addToCart} = useContext(CartContext)
  const {itemsNumber} = useContext(CartContext)
  const {setItemsNumber} = useContext(CartContext)

  useEffect(() => {
    setItemsNumber(1)
  }, [])
  
  
  const clickOne = (value: string) => {
    const mainPic = document.querySelector('.mainPic') as HTMLImageElement
    const miniPic1 = document.querySelector('.miniPic1') as HTMLImageElement
    const miniPic2 = document.querySelector('.miniPic2') as HTMLImageElement
    if(value === "img1") {
      mainPic.src = foundProduct.productImg.img1
      miniPic1.style.boxShadow = '0px 0px 10px rgb(147, 147, 249)'
      miniPic2.style.boxShadow = 'none'
      
    } else if (value === "img2") {
      mainPic.src = foundProduct.productImg.img2  
      miniPic2.style.boxShadow = '0px 0px 10px rgb(147, 147, 249)'
      miniPic1.style.boxShadow = 'none'
    }
    
  }

  return (

    
    <div style={{minHeight:'100vh', ...flexDeadCenter}}>
      <div style={{height:'100%', ...flexRow, display:'flex', alignItems:'center', ...columnMobile(devices) }} id="singleProductContainer">
        <div className="imgCon" style={{alignItems:'flex-start', marginRight:'80px', justifyContent:'center' ,...flexColumn, ...imgConStyle, ...imageMedia(devices)}}>
          <img className="mainPic" style={{...flexDeadCenter,  width: devices.isMobile? '70%' : '50%', }} src={foundProduct.productImg.img1} alt="" />
          <div className="miniImgCon" style={{...miniImgConStyles ,...flexRow, justifyContent:'center'}}>
            <img className="miniPic1" style={{...miniImgStyles}} src={foundProduct.productImg.img1}alt="" onClick={() => clickOne('img1')} />
            <img className="miniPic2" style={{...miniImgStyles}} src={foundProduct.productImg.img2} alt="" onClick={() => clickOne('img2')} />
          </div>
        </div>
        <div className="sideInfo" style={sideInfoMedia(devices)}>
          <div className="sideInfoCon" style={{...HW100, ...flexColumn, marginRight: devices.isDesktop ? '150px' : devices.isTablet ? '50px' : '20px',}}>
            <div style={{height:'100%', ...flexColumn, gap:'30px',display:'flex', justifyContent:'center', alignItems:'center'}} className="infoCon">
                <div style={{margin:'20px 0px 20px 0px', padding:'10px', ...flexDeadCenter, ...flexColumn}}>
                  <h1 style={{display:'flex', textAlign:'start'}} className="prodTitle">{foundProduct.productTitle}</h1>
                  <h2 style={{display:'flex', textAlign:'start', margin:'5px'}} className="prodPrice">{foundProduct.productPrice + ':-' }</h2>
                </div>
                <div style={{...flexDeadCenter,width:'100%', ...flexColumnRowMedia(devices)}}>
                  <div >
                  <button style={amountStyle} onClick={() => setItemsNumber(prevState => prevState <= 1 ? prevState : prevState - 1)}>-</button>
                    <span style={{border:'1px solid black', padding:'5px 10px 5px 10px'}}>{itemsNumber}</span>
                    <button style={amountStyle} onClick={() => setItemsNumber(prevState => prevState + 1)}>+</button>
                  </div>
                
                  <Button onClick={() => addToCart(foundProduct)} style={{display:'flex',justifySelf:'flex-start', ...buttonMedia(devices) }} className="addToCart">Add to Cart</Button>
                </div>

                

                <div style={{margin:'20px 0px 20px 0px' , ...flexDeadCenter , padding:'10px', ...flexColumn, width:'50%'}}>
                  <h3 >Produktinformation</h3>
                  <p style={{fontWeight:'bold'}}className="productInfo">Glasögonform: {foundProduct.productDescription.form}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">Material: {foundProduct.productDescription.material}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">Toningsgrad: {foundProduct.productDescription.toneGrade}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">UV-skydd: {foundProduct.productDescription.uvPro}</p>
                </div>

            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default SingleProduct;


/* styles with media queries */


const imageMedia: (devices: Device) => CSSProperties = (devices) => {
  return {
    width: devices.isMobile? '70%' : '50%',  
    marginLeft: devices.isDesktop ? '150px' : devices.isTablet ? '50px' : '20px',
    alignItems: devices.isMobile ? 'center' : 'flex-start',
  }
};

const flexColumnRowMedia: (devices: Device) => CSSProperties = (devices) => {
  return {
    flexDirection: devices.isMobile ? 'row' : 'column'  
  }
};

const sideInfoMedia: (devices: Device) => CSSProperties = (devices) => {
  return {
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   width:'50%'

    }
};

const columnMobile: (devices: Device) => CSSProperties = (devices) => {
  return {
   flexDirection: devices.isMobile ? 'column' : 'row',
   paddingTop: devices.isMobile ? '120px' : '138px'
   
  }
    }

const buttonMedia: (devices: Device) => CSSProperties = (devices) => {
  return {
    backgroundColor:'#9393f9',
    border:'none',
    color:'white',
    fontWeight:'bold',
    cursor:'pointer',
    padding:'7px 5px',
    alignItems:'center',
    justifyContent:'center',
    fontSize: devices.isMobile ? '12px' : '15px'

    }
};
//normal style here

const imgConStyle: CSSProperties ={

  width:'30%',
  height:'50%',
  margin:'20px'

}
const imgStyle: CSSProperties ={
  width:'80%',

}

const miniImgConStyles: CSSProperties ={

  height:'20%',
  width:'35%',
  gap:'20px',
  margin:'20px'

}
const miniImgStyles: CSSProperties = {
  cursor:'pointer',
  height:'50%',
  width:'50%'
}

const amountStyle: CSSProperties = {

  border:'none',
  backgroundColor:'transparent',
  fontSize:'20px',
  margin:'10px',
  alignItems:'center',
  cursor:'pointer'

}