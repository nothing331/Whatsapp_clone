import { useEffect, useState, useContext } from "react";
import {Box, styled, Divider} from '@mui/material';
import { getUser } from "../../service/api";
import { AccountContext } from "../../context/AccountProvider";



import Converstion from "./converstion";

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;


const Conversations = ({ text }) => {

    const [user, setUser] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);


    useEffect(() => {
      const fetchData = async () => {
          let data = await getUser();
          let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUser(fiteredData);
      }
      fetchData();
  }, [text]);


  useEffect(() => {
    socket.current.emit('addUser', account);
    socket.current.on("getUsers", users => {
        setActiveUsers(users);
    })
}, [account])


  return (
    <Component>
      {
        user.map(user => (
            user.sub !== account.sub &&
            <>
            <Converstion user ={user}/>
            <Divider/>
            </>
        ))
        }
    </Component>
  )
}

export default Conversations;
