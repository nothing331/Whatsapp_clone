import React from 'react'
import { Box, styled } from '@mui/material';

import Footer from './Footer';
const Wrapper = styled(Box)`
    background-image: url(${'https://wallpaperaccess.com/full/2224392.png'});
    
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`

function Messages() {
  return (
    <Wrapper>
        <Component>

        </Component>
        <Footer/>
    </Wrapper>
  )
}

export default Messages;
