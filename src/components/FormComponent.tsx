import React, { CSSProperties, FC , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Button, Card, CardContent, Grid} from "@mui/material";
import { flexDeadCenter,flexColumn, flexRow } from "../style/common";
import SummaryCheckoutComponent from "./SummaryCheckoutComponent";
import PaymentComponent from "./PaymentComponent";

const FormComponent: FC = () => {

    const [nextStep , setNextStep] = useState(false) 
    const [firstName , setFirstName] = useState('') 
    const [lastName , setLastName] = useState('') 
    const [email , setEmail] = useState('') 
    const [phone, setPhone] = useState('') 
    const [country , setCountry] = useState('') 
    const [city , setCity] = useState('') 
    const [zipCode , setZipCode] = useState('') 
    const [street , setStreet] = useState('') 
    const [payStep, setPayStep] = useState(false)
    const [radioValue, setRadioValue] = useState('200')
    const [shipValue, setShipValue] = useState('PostMord')
    const [placeOrder, setPlaceOrder] = useState(false)
    const [payment, setPayment] = useState('')

    function ValidateEmail(value:string) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
        
            return true
        }else{

            return false
            }   
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
        setShipValue((event.target as HTMLInputElement).name)
    }


    const onNextStep =(e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setPayStep(true)
    }
    useEffect(() => {

        if(firstName.length > 3 && lastName.length > 3 && ValidateEmail(email) === true && phone.startsWith('07') && phone.length === 10  && country.length > 4 && city.length > 1 && zipCode.length === 5 && street.length > 4 ){
            setNextStep(true)
        }else( setNextStep(false))
    },[firstName, lastName, email, phone , country, city, zipCode, street, radioValue ])
    return (
        <>
        <div style={{margin:'20px', gap:'50px', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}} >
        <h1> Checkout </h1>
        
        <Card style={{...cardStyle , ...flexDeadCenter , ...flexColumn }} >
                <CardContent  style={customerFormStyles} >
                    <form onSubmit={(e)=>onNextStep(e)} style={formStyle}>
                        <Grid style={flexDeadCenter} container spacing={4}>

                            <Grid xs={12} sm={6} item>  
                                <TextField onChange={(e)=> setFirstName(e.target.value)} 
                                error={firstName.length < 3 ? true : false }
                                label="First Name"
                                placeholder="Your First Name" variant="outlined"
                                required fullWidth/>
                            </Grid>

                            <Grid xs={12} sm={6} item>  
                                <TextField onChange={(e)=>setLastName(e.target.value)} 
                                error={lastName.length < 3 ? true : false }
                                label="Last Name"
                                placeholder="Your Last Name" variant="outlined"
                                required fullWidth/>
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setEmail(e.target.value)} 
                                error={ValidateEmail(email) === false ? true : false }
                                label="Email"
                                placeholder="Your Email" variant="outlined"
                                required fullWidth
                                type="email"/>
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setPhone(e.target.value)} 
                                error={phone.startsWith('07') && phone.length === 10 ? false : true }
                                label="Phone Number"
                                placeholder="Your Phone Number" variant="outlined"
                                required fullWidth
                                type="number"/>
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setCountry(e.target.value)} 
                                error={country.length < 4 ? true : false}
                                label="Country"
                                placeholder="Your country" variant="outlined"
                                required fullWidth/>
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setCity(e.target.value)} 
                                error={city.length < 1 ? true : false}
                                label="City"
                                placeholder="Your City" variant="outlined"
                                required fullWidth/>
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setZipCode(e.target.value)} 
                                error={zipCode.length < 5 || zipCode.length > 5 ? true : false}
                                label="Zip Code"
                                placeholder="Your Zip Code" variant="outlined"
                                required fullWidth
                                type="number"
                                />
                            </Grid>
                            <Grid xs={12} item>  
                                <TextField onChange={(e)=>setStreet(e.target.value)}
                                error={street.length < 4 ? true : false}
                                label="Street"
                                placeholder="Your Street" variant="outlined"
                                required fullWidth />
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
        </Card>
        {
            nextStep ? 
        
        <div id="shippingInfo" style={shippingInfoStyle}>
            
                <h3>Shipping</h3>
            <Card style={{ ...flexDeadCenter, ...flexColumn}}>  
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                        style={{...flexRow,padding:'20px',...flexDeadCenter}}
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="200"
                                onChange={handleChange}
                                name="radio-buttons-group"
                        >
                            <div style={radioDivStyle}>
                                <FormControlLabel value='200' control={<Radio />} label="PostMord" name="PostMord" />
                                <p> Delivery time 24h </p>
                                <p>200kr</p>
                            </div >
                            <div style={radioDivStyle}>
                            <FormControlLabel  value='100' control={<Radio />} label="Instabox" name="Instabox" />
                            <p> Delivery time 48h </p>
                                <p>100kr</p>
                            </div>
                            <div style={radioDivStyle}>
                            <FormControlLabel  value='0' control={<Radio />} label="Budbee" name="Budbee" />
                            <p> Delivery time 72h </p>
                                <p>Free Shipping</p>
                            </div>
                        </RadioGroup>
                            <Box style={{margin:'40px', textAlign:'center'}}>
                                <Button onClick={(e)=>onNextStep(e)} fullWidth type="submit" variant="contained">Next</Button>
                            </Box>
                </FormControl>
            </Card>     
        </div> : null }
            {
                nextStep && payStep ? 
                <div>
                    <PaymentComponent payment={payment} setPayment={setPayment} placeOrder={placeOrder} setPlaceOrder={setPlaceOrder}/>
            
                </div> : null
            }
            {
                placeOrder ?  
                <div>
                <SummaryCheckoutComponent 
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    country={country}
                    city={city}
                    zipCode={zipCode}
                    street={street}
                    payment={payment}
                    radioValue={radioValue} 
                    shipValue={shipValue}
                    setNextStep={setNextStep} /> </div> : null
            }
    </div>   
    </>
    ); 
}

export default FormComponent;


//normal style here

const customerFormStyles: CSSProperties = {

    margin:'10%',
    padding:'35px',
}
    const formStyle: CSSProperties = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    }
    const shippingInfoStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'white',
        gap: '20px',
        borderRadius: '5px',
        flexWrap: 'wrap'
    }

    export const radioDivStyle: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        gap: '20px',
        width: '100%',
        padding: '10px',
        borderBottom: '1px solid gray'
    }
    const cardStyle: CSSProperties ={
        marginRight:'10%',
        marginLeft:'10%',
        marginBottom:'10%',

    }
