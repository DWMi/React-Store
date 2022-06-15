import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Product } from "../data/productList";

interface Props {
  product: Product;
}

export const AdminProduct: FC<Props> = (props) => {
  return (
    <Card
      className="productCardAdmin"
      sx={{ width: 390, boxShadow: "none", borderRadius: "1px" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product.productTitle}
        </Typography>

        <img
          src={props.product.productImg.img1}
          style={{ width: "150px", height: "200px" }}
          alt=""
        />

        <Typography variant="h6" color="text.primary">
          {props.product.productPrice},00 kr
        </Typography>
      </CardContent>
      <div className="buttonsContainer">
      <div>
        <Button variant="outlined" >Edit</Button>
      </div>
      <div>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>
      </div>
    </Card>
  );
};

export default AdminProduct;
