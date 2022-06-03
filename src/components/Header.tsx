import React, { CSSProperties, FC } from "react";
import '../index.css'
import { FiShoppingBag } from 'react-icons/Fi'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Typography, IconButton, FormGroup, FormControlLabel, Switch, Box, Menu, Toolbar, AppBar, MenuItem } from '@mui/material'
/* import AccountCircle from '@mui/icons-material/AccountCircle'; */


const Header: FC = () => {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               {/*  <AccountCircle /> */}
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
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
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
    color: 'white'
  }

  export const MainContainer: CSSProperties = {
    display: 'flex',
   
    
  }