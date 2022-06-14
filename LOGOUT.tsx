import React from 'react';
import {GoogleLogout} from 'react-google-login';
const clientId="42750345632-em8kqti2qjh2skqic9lhr3lv4oj5975p.apps.googleusercontent.com";
interface Logoutprops{
    LogoutData:{
    clientId:string
    buttonText:string
    onLogoutSuccess:string
    } 
}
function Logout(props:Logoutprops){
    console.log("Logout")
    const onSuccess=() : void =>{
        // console.log('Logout made successfully');
        alert('Logout made successfully');
    }
    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            >
            </GoogleLogout>
        </div>
    );
}
export default Logout;