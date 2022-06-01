import React, { CSSProperties, FC } from "react";
import modelGucci from '../Assets/gucci3model.webp'
import modelMontBlanc from '../Assets/MontBlanc3model.webp'


export const LandingPage: FC = () => {


  return (

    <div style={landingStyle} id="landingPage">


        <h1> Content </h1>

    </div>

  );
}

export default LandingPage;





//normal style here

export const landingStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100vh'
  }