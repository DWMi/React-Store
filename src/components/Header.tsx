import React, { CSSProperties, useState, useEffect, FC, useContext } from "react";
import '../index.css'
import { FiShoppingBag } from 'react-icons/Fi'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Typography, IconButton, FormGroup, FormControlLabel, Switch, Box, Menu, Toolbar, AppBar, MenuItem } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ItemProps } from "../data/CartAmountProps"
import { flexDeadCenter } from "../style/common";
import { height } from "@mui/system";
import { CartContext } from "./cartContext";
import { Device, DeviceContext } from "../style/deviceProvider";

const Header: FC<ItemProps> = ({ setItemsNumber, itemsNumber }) => {
  const [cartNumber, setCartNumber] = useState<number>()
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const {cartQty} = useContext(CartContext)

  /* Device provider */

  const { devices } = useContext(DeviceContext)

  let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
  if(devices.isDesktop) {
      currentDevice = "Desktop"
  } else if(devices.isTablet) {
      currentDevice = "Tablet"
  } else {
      currentDevice = "Mobile"
  }


  useEffect(() => {
    localStorage.getItem('productsInCart') &&
      setCartNumber(JSON.parse(localStorage.getItem('productsInCart') || '').amount)
  }, [itemsNumber])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box  sx={{ flexGrow: 1}}>
      <div className="MainContainer" style={{...MainContainer, position:'fixed', width:'100%'}}>
      <div  className="AdminSwitch">
        <FormGroup style={LogSwitch}>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={handleChange}
                aria-label="login switch"
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
      </div>

      {auth && (
        <div style={{...flexDeadCenter, width:'50px', height:'100%' }} className="AdminIcon">
          <IconButton style={AdminIcon}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="false"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to={"/AdminPage"}>My account</Link></MenuItem>
              </Menu>
      </div>
      )}
    </div>
        <div style={header(devices)} id="headerContainer">

          <div style={{width:'33%',display:'flex', justifyContent:'flex-start'}} className="logo">
            <h1>
              <Link to={"/"} style={HeadNav}>Optical</Link>
            </h1>
          </div>

            <div style={{width:'33%',}} className="menu">
              <h1>
                <Link to={"/ProductPage"} style={HeadNav}>Products</Link>
              </h1>
            </div>

          <div  style={{position:'relative',display:'flex', width:'33%', justifyContent:'flex-end' }} className="cartIcon">
            <div >
              
              <span style={{...iconSpan(devices)}}>{cartQty}</span>
              
            </div>
            <h1>
              <Link to={"/CartPage"} style={HeadNav}><FiShoppingBag /></Link>
            </h1>
            
          </div>

      </div>

      </Box>
  );
}

export default Header;


/* style including MEDIA QUERIES */

const header: (devices: Device) => CSSProperties = (devices) => {
  return {

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'black',
    padding: '20px',
    fontSize: devices.isTablet ? '15px' : devices.isMobile ? '10px' : '20px' ,
    position:'fixed',
    width:'100%',
    top:'50px',
    zIndex:3,
  }
};

const iconSpan: (devices: Device) => CSSProperties = (devices) => {
  return {
    position:'absolute',
    top: '-5px',
    right:'-8px',
    color:'white',
    padding: devices.isDesktop ? '2px 8px' : devices.isTablet ? '1px 6px' : '2px 6px' ,
    backgroundColor:'#E51616',
    borderRadius:'50%',
    fontSize: devices.isDesktop ? '12px' : devices.isTablet ? '10px' : '8px',
    fontWeight:'bold',
  }
};


//normal style here

export const display: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  background: 'black',
  padding:'20px',
  position:'fixed',
  width:'100%',
  top:'50px',
  zIndex:3,
  }


  export const HeadNav: CSSProperties = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'white',
    
  }

  export const LogSwitch: CSSProperties = {
    backgroundColor: 'black',
    paddingLeft: '1rem'
    
  }

  export const AdminIcon: CSSProperties = {
    color: 'white',
    margin: '0px',
    padding:'0px',
  }

  export const MainContainer: CSSProperties = {
    display: 'flex',  
    justifyContent: 'space-between',
    height:'50px',
    zIndex:3
  }

  const counter: CSSProperties = {
    position:'absolute',
    top:'-5px',
    right:'-8px',
    color:'white',
    padding: '2px 8px',
    backgroundColor:'#E51616',
    borderRadius:'50%',
    fontSize:'12px',
    fontWeight:'bold',

  }