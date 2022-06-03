import React, { CSSProperties, useState, useEffect, FC } from "react";
import '../index.css'
import { FiShoppingBag } from 'react-icons/Fi'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Typography, IconButton, FormGroup, FormControlLabel, Switch, Box, Menu, Toolbar, AppBar, MenuItem } from '@mui/material'
import { IconButton, FormGroup, FormControlLabel, Switch, Box, Menu, MenuItem } from '@mui/material'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Props } from "../data/cartAmount";

const Header: FC<Props> = ({ setItemsNumber, itemsNumber }) => {
  const [cartNumber, setCartNumber] = useState<string>('')
  const [auth, setAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  useEffect(() => {
    if(localStorage.getItem('productsInCart')) {
      setCartNumber(JSON.parse(localStorage.getItem('productsInCart') || '').amount.toString())
    }
    
    
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
    <Box sx={{ flexGrow: 1}}>
      <div className="MainContainer" style={MainContainer}>
      <div className="AdminSwitch">
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
        <div className="AdminIcon">
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
        <div style={display} id="headerContainer">

          <div className="logo">
            <h1>
              <Link to={"/"} style={HeadNav}>Optical</Link>
            </h1>
          </div>

            <div className="menu">
              <h1>
                <Link to={"/ProductPage"} style={HeadNav}>Products</Link>
              </h1>
            </div>

          <div className="cartIcon">
            <h1>
              <Link to={"/CartPage"} style={HeadNav}><FiShoppingBag /></Link>
            </h1>
            <span style={{color: 'white'}}>{cartNumber}</span>
          </div>

      </div>

      </Box>
  );
}

export default Header;





//normal style here

export const display: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  background: 'black',
  height:'50px', 
  }


  export const HeadNav: CSSProperties = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Fira Sans',
    
  }

  export const LogSwitch: CSSProperties = {
    backgroundColor: 'black',
    paddingLeft: '1rem'
    
  }

  export const AdminIcon: CSSProperties = {
    color: 'white',
    marginRight: '20px'
  }

  export const MainContainer: CSSProperties = {
    display: 'flex',  
    justifyContent: 'space-between'

  }