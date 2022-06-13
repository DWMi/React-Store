import React, { CSSProperties, FC } from "react";
import FormComponent from './FormComponent'


const CheckOutPage: FC = () => {


  return (

      <div style={checkOutStyle}>
        <FormComponent /> 
      </div>
      

  );
}

export default CheckOutPage;

const checkOutStyle : CSSProperties ={

  paddingTop:'182px'




}