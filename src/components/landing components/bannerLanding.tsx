
import React, {CSSProperties} from 'react'
import { flexRow } from '../../style/common'
import modelTwo from '/src/assets/model2.webp'
import modelThree from '/src/assets/model3.webp'
import modelFour from '/src/assets/model4.webp'

 const BannerLanding = () => {
  return (
    <div style={{ zIndex:'-1', width:'100%',}}>

    <div style={{...flexRow,  height:'60vh'}}>

            <img style={bannerStyleImg} src={modelTwo}alt="" />
            <img style={bannerStyleImg} src={modelThree} alt="" />
            <img style={bannerStyleImg} src={modelFour} alt="" />

      <div style={textStyleBanner}>
      <h1 style={{textShadow: '10px 10px 20px black'}}>Optical</h1>
          </div>
      
    </div>
    </div>
  )
}

const bannerStyleImg: CSSProperties = {
  display: 'flex',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'relative',
  top: 0
}

const textStyleBanner: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  zIndex: '10',
  alignItems: 'flex-end',
  position: 'absolute',
  fontSize: '100px',
  textAlign: 'center',
  width: '100%',
  height:'60vh',
  color: 'white',

}



export default BannerLanding