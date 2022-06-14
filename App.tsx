import React from 'react';
import './App.css';
// import {Login} from './Google'
 import Login from './LOGIN';
  import Logout from './LOGOUT';

const App =()=> {
  const data={
    clientId:"",
    buttonText:"Logout",
    onLogoutSuccess:""
  };
  const data1={
    clientid:"",
    buttonText:"Login",
    onSuccess:"",
    onFailure:"",
    cookiePolicy:""

  }
  return(
      <div className="app">
        <Login LoginData={data1}></Login>
        <br></br>
         <Logout LogoutData={data}></Logout>      
       
       </div> 
  );
}
export default App;
