import React, { CSSProperties, FC, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import { Product } from "../../data/productList";




interface Props {
  product: Product;

}


export const ProductCard: FC<Props> = (props) => {
  
  


  return (

<div>
    <Card  className="productCard" sx={{ maxWidth:'20em', boxShadow:'none', borderRadius:'1px' }}>
      <Link style={{textDecoration:'none'}} to={`/${props.product.slug}`}>
      <CardMedia 
        component="img"
        image={props.product.productImg.img1}
        alt={props.product.productTitle}
        style={imgStyle}
        
        />
      <CardContent style={{...marginText, color:'black'}} >
        <Typography style={{wordWrap:'break-word'}} gutterBottom variant="h5" component="div">
          {props.product.productTitle}
        </Typography>
    
        <Typography variant="h6" color="text.primary">
          {props.product.productPrice},00 kr
        </Typography>
      </CardContent>
      <CardActions className="seeMoreBtn">
      </CardActions>
      </Link>
    </Card>
    </div>

    
);
};



export default ProductCard;


const imgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
  
}

const imgDivStyle: CSSProperties = {
  width: '200px',
  height: '200px'
  
}

const marginText: CSSProperties = {
  marginTop: '10px', 
  wordBreak: 'break-word'
  
}


//normal style here