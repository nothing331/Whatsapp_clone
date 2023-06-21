import React from 'react'
import { useState } from 'react';
import { MoreVert } from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material';
function HeaderMenu() {
    
    
    
    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>

      </Menu>
    </>
  )
}

export default HeaderMenu;
