import './App.css';

import Login from './login/LoginDialog'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider'

function App() {

  const clientId = '1092380327368-e31t4j5ietddq9u7jk9jjfd521vc3tev.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Login/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
