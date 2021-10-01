import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ModalDialog from './ModalDialog';
import Button from '@material-ui/core/Button';
import { baseUrl } from './baseUrl';
import Buyer_SignIn from './Buyer_SignIn';

function SignInCompBuyer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sign-in">
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Sign In For Buyer
      </Button>
      <Buyer_SignIn
        open={open}
        handleClose={handleClose}
        baseUrl={baseUrl}
      />
    </div>
  );
}

export default SignInCompBuyer;
