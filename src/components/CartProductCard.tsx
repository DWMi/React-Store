import { FormControl, InputLabel, MenuItem, Select, TableBody, TableCell, TableRow } from "@mui/material";
import React, { CSSProperties, FC, useContext } from "react";
import { Product } from "../data/productList";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { CartContext } from "./cartContext";
import { flexColumn, flexDeadCenter } from "../style/common";



interface Props {
    product: Product
}


export const CartProductCard: FC<Props> = (props) => {

    const { removeFromCart } = useContext(CartContext)
    const { decreaseFromCart } = useContext(CartContext)
    const { increaseToCart } = useContext(CartContext)


    return (

        <TableBody>
            <TableRow key={props.product.id}>
                <TableCell style={productInfoDiv}>
                    <img src={props.product.productImg.img1} style={{ width: '150px' }} />
                    <div style={{...infoContent, ...flexDeadCenter, ...flexColumn}}>{props.product.productTitle}</div>
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="center">
                    <div style={{ margin: '0px 5% 0px 5%', minWidth: '89px' }}>
                        <button style={amountStyle} onClick={() => decreaseFromCart(props.product)}>-</button>
                        <span style={{ border: '1px solid black', padding: '5px 10px 5px 10px', color: 'black', fontWeight: 'bolder' }}>{props.product.qty}</span>
                        <button style={amountStyle} onClick={() => increaseToCart(props.product)}>+</button>
                    </div>
                </TableCell>
                <TableCell align="center">{props.product.productPrice}:-</TableCell>
                <TableCell align="center">{props.product.productPrice * props.product.qty!}:-</TableCell>
                {/* trashcan item */}
                <TableCell align="right"><DeleteForeverIcon onClick={() => removeFromCart(props.product)} /></TableCell>
                {/* trashcan item */}
            </TableRow>
        </TableBody>
    );
}


export const productInfoDiv: CSSProperties = {
    display: 'flex',
    flexDirection: 'row'
}

export const infoContent: CSSProperties = {
    paddingLeft: '30px',
    color: 'black',
    fontWeight: 'bold'
}


const amountStyle: CSSProperties = {

    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '20px',
    margin: '10px',
    alignItems: 'center',
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold'

}