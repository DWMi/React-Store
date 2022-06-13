import React, { CSSProperties, FC } from 'React'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    shipValue:string,
    email: string,
    firstName: string,
    lastName: string,
    city: string,
    zipCode: string,
    street: string,
    payment: string,
    country: string,
    totalSummary: number
  }


const OrderConfirmationComponent:FC<Props> = ({ totalSummary, shipValue, firstName, lastName, email, country, zipCode, payment, city, street }) => {

    const card = (
        <React.Fragment>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        <li>{firstName}</li>
                        <li>{lastName}</li>
                        <li>{email}</li>
                        <li>{country}</li>
                        <li>{zipCode}</li>
                        <li>{city}</li>
                        <li>{street}</li>
                        <li>{totalSummary}</li>
                        <li>{shipValue}</li>
                        <li>{payment}</li>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        adjective
                    </Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        {'"a benevolent smile"'}
                    </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small">Learn More</Button>
                    </CardActions>
                </React.Fragment>
    )
    return (
            <Box sx={{ maxWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            
        
    )
} 
export default OrderConfirmationComponent;

const orderConfirmationStyle: CSSProperties = {
    backgroundColor: 'black',
    zIndex: 6

}