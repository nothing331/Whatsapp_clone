import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect, useState } from "react";

import { AccountContext } from '../../context/AccountProvider';
import { getConversation } from "../../service/api";


const ChatBox = () => {

    const { person,account} =  useContext(AccountContext);
    const [conversation, setConversation]= useState({});
    // const [msgId, setMsgId]= useState();

    useEffect(() => {
        const getConversationDetails = async() => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            // console.log("cdata"+data._id);
            setConversation(data);
            // setMsgId(data._id);
        }
        getConversationDetails();
    },[person.sub]);

    return(
        <Box >
            <ChatHeader person ={person}/>
            <Messages person ={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox;