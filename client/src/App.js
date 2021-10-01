import React, { useState } from 'react';
import SignInCompSeller from './SignInCompSeller';
import SignInCompBuyer from './SignInCompBuyer';
import Home from './components/Home';
// const GoogleLogoutButton = props => (
//   <GoogleLogout
//    clientId={"64634358040-0c803m7f7d39g9dmqt8hmhmbmudppfcb.apps.googleusercontent.com"}
//    buttonText="Logout"
//    onLogoutSuccess={() => {console.log('Alert')}}
//    onLogoutFailure={err => console.log(err)}
//   />
//  )

function App() {
  return <Home />;
}

export default App;
