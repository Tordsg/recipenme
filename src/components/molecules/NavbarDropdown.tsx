import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";

export default function NavbarDropdown() {
  let navigate = useNavigate(); 

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routeChangeLogin = () =>{ 
    let path = '/login'; 
    navigate(path);
    setAnchorEl(null);
  }

  const routeChangeProfile = () =>{ 
    let path = '/profile'; 
    navigate(path);
    setAnchorEl(null);
  }

  return (
    <div>
        <IconButton 
        className="iconButton"
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
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
        <MenuItem onClick={routeChangeProfile}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={routeChangeLogin}>Login</MenuItem>
        </Menu>
    </div>
  );
}