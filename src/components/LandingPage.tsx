import React, { CSSProperties, FC, useContext } from "react";
import productList, { Product } from "../data/productList";
import Carousel from "react-elastic-carousel";
import BannerLanding from "./landing components/bannerLanding";
import ProductCard from "./ProductCard";
import '../App.css'
import { Device, DeviceContext, DeviceContextData } from "../style/deviceProvider";



export const LandingPage: FC = () => {

  const { devices } = useContext(DeviceContext)

  let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
  if(devices.isDesktop) {
      currentDevice = "Desktop"
  } else if(devices.isTablet) {
      currentDevice = "Tablet"
  } else {
      currentDevice = "Mobile"
  }

  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div  id="landingPage">
      <BannerLanding />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: '20px 20px',
          
          
        }}> 
        
        <div className="textContainer" style={{margin:'20px 20px'}}>
        <h2>Our best selling products</h2>
      </div>
        <Carousel  enableTilt={true} className={'slider'} enableMouseSwipe={true} enableSwipe={true} breakPoints={breakPoints}>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};


const landing: (devices: Device) => CSSProperties = (devices) => {
  return {
    height:''
    
  }
};

export default LandingPage;

//normal style here

export const landingStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  paddingTop:'130px',
  width:'100vw'
};

