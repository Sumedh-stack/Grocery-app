import React,{useState} from 'react';
import ModalDialog from './ModalDialog';
import Button from '@material-ui/core/Button';



function SignUpComp(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return(
        <div className="sign-up">
       <Button variant="contained" color="primary" onClick={handleOpen}>
        Signup
      </Button> 
       <ModalDialog open={open} handleClose={handleClose} /> 
      </div>
    )




}

export default SignUpComp;