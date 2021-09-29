import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState('');
  const [confirmPassword, setConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState(false);
 const [btnDisabled, setBtnDisabled] = useState(false);  
  const handleSubmit = e => {
    
    e.preventDefault();
    console.log(firstName, confirmPassword, email, password);
    handleClose();
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        variant="filled"
        type="password"
        error={err}
        required
        value={confirmPassword}
        onChange={e => {
          setConfirm(e.target.value); 
          e.target.value==password ? (setError(false)) : (setError(true));
          console.log(e.target.value);
          }}
      />
      <div>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" disabled={btnDisabled}>
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;