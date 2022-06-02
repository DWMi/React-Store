
import React, {CSSProperties} from 'react'
import { flexRow } from '../../style/common'
import modelTwo from '/src/assets/model2.webp'
import modelThree from '/src/assets/model3.webp'
import modelFour from '/src/assets/model4.webp'

 const BannerLanding = () => {
  return (
    <div style={{ zIndex:'-1', width:'100%',}}>

    <div style={{...flexRow,  height:'60vh', width: '100vw'}}>

            <img style={bannerStyleImg} src={modelTwo}alt="" />
            <img style={bannerStyleImg} src={modelThree} alt="" />
            <img style={bannerStyleImg} src={modelFour} alt="" />

      
    </div>
    <div style={textStyleBanner}>
          <h1 style={{textShadow: '10px 10px 20px black'}}>Optical</h1>
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
  alignContent: 'center',
  position: 'relative',
  fontSize: '100px',
  top: -200,
  color: 'white',

}



export default BannerLanding