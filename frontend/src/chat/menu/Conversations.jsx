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

    const { account } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async ()=> {
            let response = await getUser();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUser(filteredData);
        }
        fetchData();
    }, [text]);

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
