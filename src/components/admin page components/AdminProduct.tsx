import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { style } from "@mui/system";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "../../data/productList";
import AdminEditModal from "./modal/AdminEditModal";

interface Props {
  product: Product;
}

export const AdminProduct: FC<Props> = (props) => {

  const[openModal, setOpenModal] = useState(false)

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        className="productCardAdmin"
        sx={{ width: 390, boxShadow: "none", borderRadius: "1px", zIndex:1}}
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
            <Button
              variant="outlined"
              onClick={()=>setOpenModal(true)}
              >
              Edit
            </Button>
          </div>
          <div>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </div>
        </div>
      </Card>

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:2
        }}
        >

{openModal && <AdminEditModal closeModal={setOpenModal}/>}
      </div>

      
      </>
  );
};

export default AdminProduct;
