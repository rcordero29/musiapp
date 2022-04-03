import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formContainer: {
    // marginTop: theme.spacing(10),
    width: 300,
    margin: "auto",
  },
}));

function LoginForm({ clicked, status }) {

  const classes = useStyles();
  const [loggedIn, setLogin] = useState(false);

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Username" />
        <TextField id="standard-basic" label="Password" />
        <Button
          variant="contained"
          color="primary"
          onClick={clicked = () => {
            setLogin(true);
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
