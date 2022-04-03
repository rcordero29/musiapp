import React ,{useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Muii from './muii';
import ButtonAppBar from './muii';
import MenuBar from './muii';
// import { Button } from '@mui/material';
import Dashboard from './Dashboard';
import LoginForm from './LoginForm';

function App() {
  const [loggedIn, setStatus]= useState(false)
  const clicked = () => {
    setStatus(!loggedIn)
    console.log(loggedIn);
  };
  return (
    <div className="App">
      <div>
        <MenuBar onClick={clicked} status={loggedIn} />
        {loggedIn ? <Dashboard/>: <LoginForm clicked={clicked} status={loggedIn}/>}


      </div>
    </div>
  );
}

export default App;
