import './App.css';
import Chat from './Chat';
import Sidebar from './sidebar';
import Login from './login/LoginDialog'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider'

function App() {

  const clientId = '1092380327368-e31t4j5ietddq9u7jk9jjfd521vc3tev.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
      <Login/>
        <div className="app">
          <div className='app_body'>
          <Sidebar />
          <Chat/>
          
          </div>
          
        </div>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
