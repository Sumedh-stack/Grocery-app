import React,{useState} from 'react';
import SignInComp from './SignInComp';
import SignUpComp from './SignUpComp';

// const GoogleLogoutButton = props => (
//   <GoogleLogout
//    clientId={"64634358040-0c803m7f7d39g9dmqt8hmhmbmudppfcb.apps.googleusercontent.com"}
//    buttonText="Logout"
//    onLogoutSuccess={() => {console.log('Alert')}}
//    onLogoutFailure={err => console.log(err)}
//   />
//  )

function App() {

  return (
    // <div className="App">
    <div className="App">
       <SignInComp /> 
        <SignUpComp/>
       
    </div>
  );
}

export default App;