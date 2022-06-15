
import React, {CSSProperties} from 'react'
import { flexRow } from '../../style/common'

import opticalBanner from '../../assets/Optical.jpg'
import './banner.css'

 const BannerLanding = () => {
  return (


    <div className='imageContainer' style={{width:'100%', paddingTop:'138px'}}>

            <img style={bannerStyleImg} src={opticalBanner}alt="" />

      
    </div>
   
  )
}

const bannerStyleImg: CSSProperties = {
  display: 'flex',
 width:'100%',
  objectFit:'fill',
}




export default BannerLanding