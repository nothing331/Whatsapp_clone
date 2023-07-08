import React, { useState, useEffect , useRef} from 'react'
import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { getMessages, newMessage } from '../../service/api';
import Footer from './Footer';
import Message from './Message';

const Wrapper = styled(Box)`
    background-image: url(${'https://wallpaperaccess.com/full/2224392.png'});

`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Container = styled(Box)`
    padding: 1px 80px;
`;

const Messages = ({person, conversation}) => {

  const {account, socket} = useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  const [image, setImage] = useState('');
  const [incomingMessage, setIncomingMessage] = useState(null);

  const scrollRef =useRef();

  useEffect(() => {
    socket.current.on('getMessage', data => {
      setIncomingMessage({
        ...data,
        createdAt: Date.now()
      })
    })
  }, []);

  useEffect(() =>{
    const getMessageDetailes = async () =>{
      let data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetailes();
  },[person._id, conversation?._id, newMessageFlag]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" })
  }, [messages]);

  useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
      setMessages((prev) => [...prev, incomingMessage]);
  }, [incomingMessage, conversation]);



  const sendText = async(e) => {
    const code = e.keyCode || e.which;
    if(code===13){
      let message = {};
      if (!file){
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'file',
          text: image
        }
      }

      socket.current.emit('sentMessage', message);

    
      await newMessage(message);
      setImage('');
      setValue('');
      setFile('');
      setNewMessageFlag(prev => !prev);
    }
  }

  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map(message => (
              <Container ref={scrollRef}>
                <Message message={message}/>
              </Container>
            ))
          }
        </Component>
        <Footer
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setFile={setFile}
          setImage={setImage}
        />
    </Wrapper>
  )
}


export default Messages;