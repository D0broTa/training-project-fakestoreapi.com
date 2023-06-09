import * as React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/appContext";

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SuccessAlert() {
  const {openSuccessAlert, setOpenSuccessAlert} = useContext(UserContext)
  const Context = useContext(UserContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      setOpenSuccessAlert(false);
      return;
    }
    setOpenSuccessAlert(false);
  };

  

  return (
    <Stack spacing={0} sx={{ width: '100%' }}>
       <Snackbar open={openSuccessAlert} autoHideDuration={6000} onClose={handleClose}>
         <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
           <AlertTitle>Вы успешно авторизованы</AlertTitle>
           как <strong>{Context.currentUser.name?.firstname} {Context.currentUser.name?.lastname}</strong>
         </Alert>
       </Snackbar>
    </Stack>
  );
}
