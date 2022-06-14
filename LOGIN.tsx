import React from 'react';
import  {GoogleLoginButton}  from 'ts-react-google-login-component';
// import {GoogleLogin} from 'react-google-login';
import {refreshTokenSetup}from './tokenId';
const clientId='42750345632-em8kqti2qjh2skqic9lhr3lv4oj5975p.apps.googleusercontent.com';

interface value {
    LoginData:{
    clientid:string
    buttonText:string
    onSuccess:any
    onFailure:any
    cookiePolicy:string
}
  }
// function Login (props:value){
//     const onSuccess =(res:any)=>{
//         console.log('[Login Success] currentUser:',res);
        
//         refreshTokenSetup(res);
//     };
//     const onFailure =(res:any)=>{
//         console.log('[Login Failed] res:',res);
        
//     };
//     return (
//         <div>
//             <GoogleLogin
//                 clientId ={clientId}
//                 buttonText="Login"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single_host_origin'}
//                 // style={{marginTop:'100px'}}
//                 isSignedIn={true}
//             >
//             </GoogleLogin>
//         </div>
//     )
// }

//  export default Login;
// import React from 'react';
// import './Login.css';
// import PropTypes from 'prop-types';
// export default function Login({ setToken }) {
//   return(
//     <div className="login-wrapper">
//     <h1>Please Log In</h1>
//     <form>
//       <label>
//         <p>Username</p>
//         <input type="text" />
//       </label>
//       <label>
//         <p>Password</p>
//         <input type="password" />
//       </label>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//     </div>
//   )
// }
// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   }

export class Login extends React.Component <value> {
    constructor(props:any){
    super(props);
    
    }
    preloginTracking():void{
           console.log('attempt to login with google') 
    }
    errorHandler(error:string):void{
        console.error(error)
    }
    responseGoogle(googleUser: gapi.auth2.GoogleUser):void{
        const id_token =googleUser.getAuthResponse(true).id_token
        const googleId=googleUser.getId()

        refreshTokenSetup(id_token);
        console.log({googleId})
        console.log({accessToken:id_token})
    }
    render():JSX.Element{
        
        const clientConfig ={client_id :"42750345632-em8kqti2qjh2skqic9lhr3lv4oj5975p.apps.googleusercontent.com"};
        const signInOptions = { scope: 'profile' }

        return (
            <div id="sample">
                <GoogleLoginButton  
                responseHandler={this.responseGoogle}
                clientConfig={clientConfig}
                preLogin={this.preloginTracking}
                failureHandler={this.errorHandler}
                singInOptions={signInOptions} >
                </GoogleLoginButton> 
            </div>
        )
    }
}
 export default Login;