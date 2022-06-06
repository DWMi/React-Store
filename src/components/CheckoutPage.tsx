import React, { CSSProperties, FC } from "react";
import { Button } from '@mui/material'
import { Link } from "react-router-dom";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

const CheckOutPage: FC = () => {


  return (

    <>
    <div style={CheckOutPageStyle}>
      <h1> Checkout </h1>
    

    <div id="customerInfo" style={customerInfoStyle}>
          <h3>Billing & delivery information</h3>
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          required
          id="outlined-error"
          label="Email"
          type="email"
          autoComplete="email"
        />
        <TextField
          error
          required
          id="outlined-error-helper-text"
          label="First name"
          helperText="Incorrect entry."
        />
      </div>
      <div>
        <TextField
          required
          error
          id="outlined-error"
          label="Last name"
        />
        <TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          
        />
      </div>
      <div>
        <TextField
          error
          id="standard-error"
          label="Error"
          defaultValue="Hello World"
        />
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
      </div>
    </Box>
    </div>

    <div id="shippingInfo" style={shippingInfoStyle}>
            <h3>Shipping</h3>
            <FormControl>
      <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <div style={radioDivStyle}>
           <FormControlLabel value="female" control={<Radio />} label="Postnord" />
            <p>Postnord, valfritt postombud 1-2 vardagar</p>
            <p>0kr</p>
        </div >
        <div style={radioDivStyle}>
        <FormControlLabel value="male" control={<Radio />} label="Instabox" />
        </div>
        <div style={radioDivStyle}>
        <FormControlLabel value="other" control={<Radio />} label="Budbee" />
        </div>
      </RadioGroup>
    </FormControl>
    </div>
    </div>   
    </>
  );
}

export default CheckOutPage;





//normal style here

export const CheckOutPageStyle: CSSProperties = {
      display: 'flex',
      gap: '50px',
      backgroundColor: '#f5f5f5',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: '50px'
    }

    const customerInfoStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: '20px',
      width: '50%',
      padding: '50px',
      borderRadius: '5px'
    }

    
    const shippingInfoStyle: CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
      gap: '20px',
      width: '50%',
      padding: '50px',
      borderRadius: '5px',
      flexWrap: 'wrap'
    }

    const radioDivStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      gap: '20px',
      width: '100%',
      padding: '10px',
      borderBottom: '1px solid gray'
    }

    export const BackButton: CSSProperties = {

    }