import React, { CSSProperties, FC } from "react";
import {Product} from '../data/productList'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import SingleProduct from "./SingleProduct";


interface Props {
  product: Product
}



export const ProductCard: FC<Props> = (props) => {


  return (

  /*   <div style={cardStyle} id="productCard">

        <div style={imgDivStyle}>
          <img style={imgStyle} src={props.product.productImg.img1} alt="" />
        </div>
        <h3>{props.product.productTitle}</h3>
        <h5>{props.product.productPrice},00 kr</h5>

    </div> */

    <Card className="productCard" sx={{ maxWidth: 320 }}>
      <CardMedia
        component="img"
        height="300"
        image={props.product.productImg.img1}
        alt={props.product.productTitle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.productTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {props.product.productDescription.toneGrade}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {props.product.productPrice},00 kr
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${props.product.id}`}><Button  variant="outlined" size="small">Läs mer</Button></Link>
      </CardActions>
    </Card>

  );
}

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

const cardStyle: CSSProperties = {
  width: '300px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
  
}


//normal style here