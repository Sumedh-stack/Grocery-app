import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ModalDialog from './ModalDialog';
import Button from '@material-ui/core/Button';
import { baseUrl } from './baseUrl';
import ModalDialog_SignIn from './ModalDialog_SignIn';

function SignInComp() {
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
        SignIn
      </Button>
      <ModalDialog_SignIn
        open={open}
        handleClose={handleClose}
        baseUrl={baseUrl}
      />
    </div>
  );
}

export default SignInComp;
