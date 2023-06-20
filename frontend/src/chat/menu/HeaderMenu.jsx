import React from 'react'
import { useState } from 'react';
import { MoreVert } from '@mui/icons-material'
import { Menu } from '@mui/material';
function HeaderMenu() {
    
    
    
    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = () => {
        setOpen(true);
    }

  return (
    <div>
      <MoreVert onClick = {handleClick}/>
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

            </Menu>
    </div>
  )
}

export default HeaderMenu;
