import React from 'react'
import { useContext } from 'react'
import { Box, styled} from '@mui/material';
import { Chat as MessageIcon} from '@mui/icons-material';
import { AccountContext } from '../../context/AccountProvider'
import Search from './Search';
import HeaderMenu from './HeaderMenu';
import Conversations from './Conversations';
import { useState } from 'react';
//style

const Component = styled(Box)`
    height: 44px;
    background: rgb(72, 130, 106);
    padding: 8px 16px;
    display: flex;
    align-items: center;
`;
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
})
    

const Wraper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;


function Header() {
    const [text, setText] = useState('');
    const { account} = useContext(AccountContext);

  return (
    <div>
      <Component>
        <Image src={account.picture} alt= "dp" />
        <Wraper>
          <MessageIcon/>
          <HeaderMenu/>           
        </Wraper>
      </Component>
     <Search setText={setText}/>
     <Conversations text ={text}/>
    </div>
  )
}

export default Header;