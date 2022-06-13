import React, {FC,useEffect,useState} from 'react'
import  { Card,FormControl, FormControlLabel, FormLabel,Radio, RadioGroup, Box, Button, CardContent, Grid, TextField} from "@mui/material";
import { flexDeadCenter,flexColumn, flexRow, } from "../style/common";
import { radioDivStyle } from './FormComponent';


interface Props {
    payment: string,
    setPayment: React.Dispatch<React.SetStateAction<string>>,
    placeOrder?: boolean,
    setPlaceOrder: React.Dispatch<React.SetStateAction<boolean>>
}
const PaymentComponent:FC<Props> =({placeOrder, setPlaceOrder, payment, setPayment})=>{
    
        function ValidateEmail(email: string) 
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                return true
            }else{
                return false
                }   
        }

    const swishValidation =()=>{
        if(swishPayment.length < 10 || swishPayment.length >= 11 || !swishPayment.startsWith('07') ) {
            return false
        } else {
            return true
        }
        
    }


    const [swishPayment, setSwishPayment ]= useState('')
    const [cardFName, setCardFName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [cardExpiryMonth, setCardExpiryMonth] = useState('')
    const [cardExpiryYear, setCardExpiryYear] = useState('')
    const [cardCvcCode, setCardCvcCode] = useState('')

    const [paypalPayment, setPaypalPayment ]= useState('')

    
    const paymentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPayment((event.target as HTMLInputElement).value);
    }
    const onPlaceOrder =(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(payment === 'Swish') {
            if(swishPayment.length === 10 && swishPayment.startsWith("07")) {
                setPlaceOrder(true) 
            }
        } else if(payment === 'Card') {
            if(cardFName.length > 3 && cardExpiryMonth.length === 2 && cardExpiryYear.length === 2 && cardNumber.length === 16 && cardCvcCode.length === 3) {
                setPlaceOrder(true) 
            }
        } else if (payment === 'Paypal') {
            if(ValidateEmail(paypalPayment)) {
                setPlaceOrder(true) 
            } 
        } else
        setPlaceOrder(false) 


    }    
    useEffect(()=>{
        if(payment === "Swish") {
            if(swishPayment.length < 10 || swishPayment.length >= 11 || !swishPayment.startsWith('07') ) {
                setPlaceOrder(false)
            }
        } else if ( payment === "Card") {
            if(cardCvcCode.length < 3 || cardExpiryYear.length < 2 || cardExpiryMonth.length < 2 || cardFName.length < 6 || cardNumber.length < 20){
                setPlaceOrder(false)
            
            }else{
                
            }
            
        } else if (payment === "Paypal") {
            if(ValidateEmail(paypalPayment) === false) {
                setPlaceOrder(false)
            
            } 
            
        } else {
            
        }
    },[swishPayment, cardNumber , cardFName, cardExpiryYear, cardExpiryMonth, cardCvcCode, paypalPayment])

    return(
        <div>
            <h3>Payment Method</h3>
            <Card style={{ ...flexDeadCenter, ...flexColumn, padding:'30px'}}>  
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                        style={{...flexRow,padding:'20px',...flexDeadCenter}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Swish"
                                onChange={paymentHandler}
                                value={payment}
                                name="radio-buttons-group"
                        >
                            <div style={radioDivStyle}>
                                <FormControlLabel  value='Swish' control={<Radio />} label="Swish" />
                            </div >
                            <div style={radioDivStyle}>
                                <FormControlLabel  value='Card' control={<Radio />} label="Card" />
                            </div>
                            <div style={radioDivStyle}>
                                <FormControlLabel  value='Paypal' control={<Radio />} label="Paypal" />

                            </div>
                        </RadioGroup>
                            {(() => {
                                switch(payment) {
                                    case 'Swish':
                                        return (
                                            <Card style={flexDeadCenter}>
                                                <CardContent>
                                                    <form>
                                                    <Grid container>
                                                        <Grid>
                                                            <TextField 
                                                            error={swishValidation() === false ? true : false}
                                                            onChange={(e)=>setSwishPayment(e.target.value)}
                                                            label='Phone Number for Swish'
                                                            placeholder='Phone Number for Swish'
                                                            variant="outlined"
                                                            type="number"
                                                            required
                                                            fullWidth />  
                                                        </Grid>    
                                                    </Grid>    
                                                    </form>
                                                </CardContent>     
                                            </Card>
                                        )
                                        
                                    case 'Card':
                                        return (
                                            <Card style={flexDeadCenter}>
                                                <CardContent>
                                                    <Grid container style={{gap:'20px', ...flexColumn}}>
                                                        <Grid>
                                                            <TextField
                                                            error={cardFName .length < 6 ? true: false }
                                                            onChange={(e)=>setCardFName(e.target.value)}
                                                            label='Full name of Card owner'
                                                            placeholder='Full name of Card Owner'
                                                            variant="outlined"
                                                            type="text"
                                                            required
                                                            fullWidth />                                    
                                                        </Grid>    
                                                        <Grid>
                                                            <TextField 
                                                            error={cardNumber.length < 16 || cardNumber.length > 16 ? true : false }
                                                            onChange={(e)=>setCardNumber(e.target.value)}
                                                            label='Card number'
                                                            placeholder='Card number'
                                                            variant="outlined"
                                                            type="number"
                                                            required
                                                            fullWidth />  
                                                        </Grid>   
                                                        <Grid style={{gap:'20px', ...flexRow}}>
                                                            <Grid>
                                                                <TextField 
                                                                error={cardExpiryMonth.length < 2 || cardExpiryMonth.length > 2 ? true: false }
                                                                onChange={(e)=>setCardExpiryMonth(e.target.value)}
                                                                label='Expiry date'
                                                                placeholder='MM'
                                                                variant="outlined"
                                                                type="number"
                                                                required
                                                                />  
                                                            </Grid>    
                                                            <Grid>
                                                                <TextField 
                                                                error={cardExpiryYear.length < 2 || cardExpiryYear.length > 2 ? true: false }
                                                                onChange={(e)=>setCardExpiryYear(e.target.value)}
                                                                label='Expiry date'
                                                                placeholder='YY'
                                                                variant="outlined"
                                                                type="number"
                                                                required
                                                                />  
                                                            </Grid>  
                                                        </Grid>
                                                            <Grid>
                                                                <TextField
                                                                error={cardCvcCode.length < 3 || cardCvcCode.length > 3 ? true: false }
                                                                onChange={(e)=>setCardCvcCode(e.target.value)}
                                                                label='CVC Code'
                                                                placeholder='***'
                                                                variant="outlined"
                                                                type="number"
                                                                required
                                                                />  
                                                            </Grid>  
                                                    </Grid>   
                                                </CardContent>     
                                            </Card>
                                        )  
                                    case 'Paypal':
                                        return (

                                            <Grid>
                                                <TextField 
                                                error={paypalPayment === '' || !ValidateEmail(paypalPayment) }
                                                onChange={(e)=>setPaypalPayment(e.target.value)}
                                                label='Paypal Email'
                                                placeholder='Paypal Account'
                                                variant="outlined"
                                                type="email"
                                                required
                                                fullWidth
                                                />  
                                            </Grid>  
                                        )
                                    default: 
                                        return
                                    
                                }
                            })()}
                            <Box style={{margin:'40px', textAlign:'center'}}>
                                <Button fullWidth type="submit" onClick={(e)=>onPlaceOrder(e)} variant="contained">Next</Button>
                            </Box>
                </FormControl>
            </Card>     
        </div>
    )
}

export default PaymentComponent
