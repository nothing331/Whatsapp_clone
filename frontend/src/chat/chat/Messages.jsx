import React, { useState, useEffect } from 'react'
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

  const {account} = useContext(AccountContext);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessageFlag, setNewMessageFlag] = useState(false);
  const [file, setFile] = useState();
  // const [image, setImage] = useState('');

  useEffect(() =>{
    const getMessageDetailes = async () =>{
      let data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetailes();
  },[person._id, conversation._id, newMessageFlag]);

  const sendText = async(e) => {
    const code = e.keyCode || e.which;
    if(code===13){
        let message = {
          senderId: account.sub,
          receiverId: person.sub,
          conversationId: conversation._id,
          type: 'text',
          text: value
        }
    
      await newMessage(message);

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
              <Container>
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
        />
    </Wrapper>
  )
}


export default Messages;




// import React, { useState, useEffect } from 'react'
// import { Box, styled } from '@mui/material';
// import { useContext } from 'react';
// import { AccountContext } from '../../context/AccountProvider';
// import { getMessages, newMessage } from '../../service/api';
// import Footer from './Footer';
// import Message from './Message';
// const Wrapper = styled(Box)`
//     background-image: url(${'https://wallpaperaccess.com/full/2224392.png'});
    
// `;

// const Component = styled(Box)`
//     height: 80vh;
//     overflow-y: scroll;
// `;

// const Container = styled(Box)`
//     padding: 1px 80px;
// `;

// const Messages = ({person, conversation}) => {

//   const {account} = useContext(AccountContext);
//   const [value, setValue] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [newMessageFlag, setNewMessageFlag] = useState(false);

//   useEffect(() =>{
//     const getMessageDetailes = async () =>{
//       let data = await getMessages(conversation._id);
//       setMessages(data);
//     }
//     conversation._id && getMessageDetailes();
//   },[person._id, conversation._id, newMessageFlag]);

//   const sendText = async(e) => {
//     const code = e.keyCode || e.which;
//     if(code===13){
//       let message = {
//         senderId: account.sub,
//         receiverId: person.sub,
//         conversationId: conversation._id,
//         type: 'text',
//         text: value
//       }
//       await newMessage(message);

//       setValue('');
//       setNewMessageFlag(prev => !prev);
//     }
//   }

//   return (
//     <Wrapper>
//         <Component>
//           {
//             messages && messages.map(message => (
//               <Container>
//                 <Message message={message}/>
//               </Container>
//             ))
//           }
//         </Component>
//         <Footer
//           sendText={sendText}
//           setValue={setValue}
//           value={value}
//         />
//     </Wrapper>
//   )
// }

// export default Messages;


