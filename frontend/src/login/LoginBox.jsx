import React from 'react'
import { Dialog, Typography, Box, ListItem , List, styled} from '@mui/material'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';
import { addUserr } from '../service/api';


const Component = styled(Box)`
    display: flex; 
`;

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;


const Title = styled(Typography)`
    font-size: 26px;
    margin-bottom: 25px;
    color: #525252;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 300;
`;

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}


function LoginBox() {

    const {setAccount} = useContext(AccountContext);

    const onLoginError = (res) => {
        console.log('Login Failed', res);
        

    }

    const onLoginSuccess = async(res) => {
        const decode = jwt_decode(res.credential);
        setAccount(decode);
        await addUserr(decode);
    }

  return (
    <div>
      <Dialog 
        open ={true}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        maxWidth={'md'}
        PaperProps={{ sx: dialogStyle }}
        >
        <Component>
            <Container>
                <Title>To use '_________' on web</Title>
                <StyledList>
                    <ListItem>Login with your google  account</ListItem>
                </StyledList>
                <Box style={{position: 'absolute', top: '30%', transform: 'translateX(25%) translateY(-25%)'}}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Container>
        </Component>
      </Dialog>
    </div>
  )
}

export default LoginBox
