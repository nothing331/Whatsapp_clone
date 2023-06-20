import { AppBar, Toolbar, styled, Box } from '@mui/material'
import React from 'react'
import LoginBox from './LoginBox';
import { useContext } from 'react';

import ChatDialog from '../chat/ChatDialog';


import { AccountContext} from '../context/AccountProvider';


const LoginHeader = styled(AppBar)`
background-color: #00A884;
height: 225px;
box-shadow: none;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

function LoginDialog() {

  const { account} = useContext(AccountContext);

  return (
    <Component>
      {
        account ? 
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog/>
        </>
        :
        <>
          <LoginHeader>
            <Toolbar>
                <LoginBox/>
            </Toolbar>
          </LoginHeader>
        </>
      }
    </Component>
  )
}

export default LoginDialog
