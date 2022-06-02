
import React, { CSSProperties, FC, useState } from "react";
import { useParams } from "react-router-dom";
import productList, {Product} from "../data/productList";
import { flexDeadCenter, flexColumn, flexRow, marginLR, button, HW100 } from "../style/common";



export interface Props {}

export const SingleProduct: FC<Props> = (props) => {
    const [itemsNumber, setItemsNumber] = useState(1)

  const addToCart = () => setItemsNumber(1)

  const { productId } = useParams()

    const foundProduct = productList.find((product) => Number(productId) == product.id)

    console.log(foundProduct)

  const clickOne = (value: string) => {
    const mainPic = document.querySelector('.mainPic') as HTMLImageElement
    const miniPic1 = document.querySelector('.miniPic1') as HTMLImageElement
    const miniPic2 = document.querySelector('.miniPic2') as HTMLImageElement
    if(value === "img1") {
      mainPic.src = productList[0].productImg.img1
      miniPic1.style.boxShadow = '0px 0px 10px rgb(147, 147, 249)'
      miniPic2.style.boxShadow = 'none'
      
    } else if (value === "img2") {
      mainPic.src = productList[0].productImg.img2  
      miniPic2.style.boxShadow = '0px 0px 10px rgb(147, 147, 249)'
      miniPic1.style.boxShadow = 'none'
    }
    
  }

  return (


    <div style={{height:'100vh'}}>
      <div style={{height:'100%', ...marginLR, ...flexRow,justifyContent:'space-between',display:'flex', alignItems:'center'}} id="singleProductContainer">
        <div className="imgCon" style={{alignItems:'flex-start', marginRight:'80px' , justifyContent:'center' ,...flexColumn, ...imgConStyle}}>
          <img className="mainPic" style={{...flexDeadCenter, ...imgStyle}} src={foundProduct.productImg.img1} alt="" />
          <div className="miniImgCon" style={{...miniImgConStyles ,...flexRow, justifySelf:'flex-start'}}>
            <img className="miniPic1" style={{...miniImgStyles}} src={foundProduct?.productImg.img1}alt="" onClick={() => clickOne('img1')} />
            <img className="miniPic2" style={{...miniImgStyles}} src={foundProduct.productImg.img2} alt="" onClick={() => clickOne('img2')} />
          </div>
        </div>
        <div className="sideInfo" style={{height:'100%',width:'50%', ...flexColumn}}>
          <div className="sideInfoCon" style={{...HW100, ...flexColumn}}>
            <div style={{height:'100%', ...flexColumn, gap:'30px',justifyContent:'center'}} className="infoCon">
                <div style={{margin:'20px 0px 20px 0px', padding:'10px'}}>
                  <h1 style={{display:'flex', textAlign:'start'}} className="prodTitle">{productList[0].productTitle}</h1>
                  <h2 style={{display:'flex', textAlign:'start'}} className="prodPrice">{productList[0].productPrice + ';-' }</h2>
                </div>
                <div style={{...flexRow, alignItems:'center', padding:'10px'}}>

                  <div style={{margin:'0px 5% 0px 5%'}}>
                    <button style={amountStyle} onClick={() => setItemsNumber(prevState => prevState <= 1 ? prevState : prevState - 1)}>-</button>
                    <span style={{border:'1px solid black', padding:'5px 10px 5px 10px'}}>{itemsNumber}</span>
                    <button style={amountStyle} onClick={() => setItemsNumber(prevState => prevState + 1)}>+</button>
                  </div>

                  <button onClick={addToCart} style={{display:'flex',justifySelf:'flex-start', ...button}} className="addToCart">Add to Cart</button>
                </div>

                

                <div style={{margin:'20px 0px 20px 0px' , ...flexDeadCenter , padding:'10px', textAlign:'start', ...flexColumn,alignItems:'flex-start' }}>
                  <h2 >Produktinformation</h2>
                  <p style={{fontWeight:'bold'}}className="productInfo">{productList[0].productDescription.form}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">{productList[0].productDescription.material}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">{productList[0].productDescription.toneGrade}</p>
                  <p style={{fontWeight:'bold'}}className="productInfo">{productList[0].productDescription.uvPro}</p>
                </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default SingleProduct;





//normal style here

const imgConStyle: CSSProperties ={

  width:'30%',
  height:'50%',
  margin:'20px'

}
const imgStyle: CSSProperties ={
  width:'100%',

}

const miniImgConStyles: CSSProperties ={

  height:'100px',
  gap:'20px',
  margin:'20px 0px 20px 0px'

}
const miniImgStyles: CSSProperties = {
  cursor:'pointer',
  height:'100%',
  width:'100%'
}

const amountStyle: CSSProperties = {

  border:'none',
  backgroundColor:'transparent',
  fontSize:'20px',
  margin:'10px',
  alignItems:'center',
  cursor:'pointer'

}