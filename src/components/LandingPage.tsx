import React, { CSSProperties, FC } from "react";
import modelGucci from '../Assets/gucci3model.webp'
import modelMontBlanc from '../Assets/MontBlanc3model.webp'
import BannerLanding from "./landing components/bannerLanding";


export const LandingPage: FC = () => {


  return (

    <div style={landingStyle} id="landingPage">

        <BannerLanding/>
  

    </div>

  );
}

export default LandingPage;





//normal style here

export const landingStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
  }