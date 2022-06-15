import { TableCell, TableHead, TableRow } from "@mui/material"
import { FC } from "react"



interface Props { }


export const CartTableRow: FC<Props> = () => {

    return (

        <TableHead>
            <TableRow>
                <TableCell style={{ fontWeight: 'bold' }} align="left" colSpan={4}>1. Your shopping bag</TableCell>
                {/* <TableCell align="right"></TableCell> */}
                {/* <TableCell align="right"></TableCell> */}
                {/* <TableCell align="right"></TableCell> */}
            </TableRow>

            <TableRow>
                <TableCell style={{ fontWeight: 'bold', paddingLeft: '13px' }}>Products</TableCell>
                {/* <TableCell align="right"></TableCell> */}
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Quantity</TableCell>
                {/* <TableCell align="center" style={{ fontWeight: 'bold' }}>Unit Price</TableCell> */}
                <TableCell align="center" style={{ fontWeight: 'bold' }}>Total</TableCell>
                <TableCell align="right"></TableCell>
            </TableRow>
        </TableHead>


    )


}    