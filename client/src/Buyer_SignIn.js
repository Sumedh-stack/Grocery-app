import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box'
import SignIn from './SignIn';
import axios from 'axios';
import {GoogleLogin,GoogleLogout} from 'react-google-login';

const Buyer_SignIn = ({ open, handleClose, baseUrl }) => {
  const responseSuccessGoogle = (response) => {
      console.log(response);
      axios({
        method : "POST",
        url : `${baseUrl}/api/auth/buyer/googlelogin`,
        data: {tokenId: response.tokenId}
      }).then(res => {
        console.log("Google Login Success" ,res);
      }).catch(err => console.log(err));
  }
  const responseFailureGoogle = (response) => {
    console.log("Google Login Failed : ", response);
  }
  return (
    // props received from App.js
    
      <Dialog open={open} onClose={handleClose}>
      <SignIn handleClose={handleClose} />
      <div className="google" style={{paddingBottom: "30px"}}>
      <Box textAlign='center'>
      
      <h3>OR</h3>
         <GoogleLogin  
                  clientId="997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com"
              
                theme='dark'
              onSuccess={responseSuccessGoogle}
              onFailure={responseFailureGoogle}
              cookiePolicy={'single_host_origin'}
                /> 
      </Box>
          
      </div>
    </Dialog>  
    
    
  );
};

export default Buyer_SignIn;