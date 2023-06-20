import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

function Chat() {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src ='https://images4.alphacoders.com/122/1228259.png'/>
        <div className='Chat_name'>
          <h2>Him</h2>
          <p>click for info</p>
        </div>
        <div className='chat_header_right'>
          <IconButton>
            <MicIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='chat_area'>
        <p className='chat_message'>
          <span className='chater_name'>Him</span>
          Hey
          <span className='chat_date'>date</span>
        </p>

        <p className='chat_message chat_reciever'>
          <span className='chater_name'>Me</span>
          What are you doing
          <span className='chat_date'>date</span>
        </p>

        <p className='chat_message'>
          <span className='chater_name'>Him</span>
            nothing much
          <span className='chat_date'>date</span>
        </p>
      </div>
      <div className='chat_bar'>
      <IconButton>
        <InsertEmoticonIcon/>
      </IconButton>
      <form>
        <input placeholder="type your message here" type = "text" />
        <button type="submit">Send</button>
      </form>
      <MicIcon/>
      </div>
    </div>
  )
}

export default Chat
