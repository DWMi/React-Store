import React, { CSSProperties, FC } from "react";
// import Carousel from "react-elastic-carousel";
import productList, { Product } from "../data/productList";
import BannerLanding from "./landing components/bannerLanding";
import ProductCard from "./ProductCard";



export const LandingPage: FC = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div style={landingStyle} id="landingPage">
      <BannerLanding />
       <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: '20px 20px'

        
        }}
      > 
        {/* <Carousel enableTilt={true} className={'slider'} enableMouseSwipe={true} enableSwipe={true} breakPoints={breakPoints}>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel> */}
      </div>
    </div>
  );
};

export default LandingPage;

//normal style here

export const landingStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  
};
