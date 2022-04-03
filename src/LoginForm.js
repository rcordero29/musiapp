import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formContainer: {
    // marginTop: theme.spacing(10),
    width: 300,
    margin: 'auto',
  },
}));

function LoginForm({ clicked, status }) {
  const classes = useStyles();
  const history = useHistory();
  const [loggedIn, setLogin] = useState(false);

  const Login = () => {
    localStorage.setItem('isLogged', true);
    history.push('/');
  };

  // useEffect(() => {
  //   const isLogged = localStorage.getItem('isLogged');
  //   setLogin(isLogged);
  // }, [loggedIn]);

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Password" />
        <Button variant="contained" color="primary" onClick={Login}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
