import React from 'react'
import "./Sidebar.css";
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
function Sidebar() {
  return (
    <div className ='sidebar'>
      <div className='sidebar_Lower'>
        <Avatar src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/03/Featured-Image-Luffy.jpg" />
        <div className='sidebar_lower_right'>
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
          <IconButton>
            <HeadphonesIcon/>
          </IconButton>
        </div>
      </div>
      <div className='search_bar'>
        <div className='search_container'>
          <SearchOutlined />
          <input placeholder='Search friend here' type='text' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
