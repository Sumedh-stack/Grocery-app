import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from "axios";

const GoogleLoginButton = ({ baseUrl }) => {

    const responseSuccessGoogle = (response) => {
        console.log(response);
        axios({
          method : "POST",
          url : `${baseUrl}/api/auth/googlelogin`,
          data: {tokenId: response.tokenId}
        }).then(res => {
          console.log("Google Login Success" ,res);
        }).catch(err => console.log(err));
    }
    const responseFailureGoogle = (response) => {
        console.log(response);
    }

    return (
        <div>
            <GoogleLogin
                clientId="997283847932-6kqihc3fgfcvrk6nk7af4cnq2p0h3crk.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailureGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default GoogleLoginButton;
