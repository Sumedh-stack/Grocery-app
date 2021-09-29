import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box'
import SignIn from './SignIn';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
const ModalDialog_SignIn = ({ open, handleClose }) => {
  return (
    // props received from App.js
    
      <Dialog open={open} onClose={handleClose}>
      <SignIn handleClose={handleClose} />
      <div className="google" style={{paddingBottom: "30px"}}>
      
      <Box textAlign='center'>
      <h3>OR</h3>
         <GoogleLogin  
                  clientId="64634358040-0c803m7f7d39g9dmqt8hmhmbmudppfcb.apps.googleusercontent.com"
              
                theme='dark'
              onSuccess={response=>{console.log(response.profileObj)}}
              onFailure={console.log("fail")}
              cookiePolicy={'single_host_origin'}
                /> 
      </Box>
          
      </div>
    </Dialog>  
    
    
  );
};

export default ModalDialog_SignIn;