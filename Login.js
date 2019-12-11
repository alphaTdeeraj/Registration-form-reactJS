import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Heading from './common/Heading'
import Paper from '@material-ui/core/Paper';
import InputField from './common/InputField'
import Button from './common/Buttons'
import Link from './common/Link'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop:10,
    borderRadius:30,

  },
}));

const Login = (props) => {

  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  //on submission of the form
  const onSubmit = (e) =>{
    e.preventDefault()
    if(!email || !password){
      alert("please fill all the data")
    }
    else{
      //write the logic for handling the submission and clean the data
    }
    
  }


  return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Heading name={"login"}/>
      
      <Paper className={classes.root}>
     <InputField
    value = {email}
    onChange = {setEmail}
     label={"email"}
     type={"email"}
     required={true}
     fullWidth={true}
     />

    <InputField
        value = {password}
        onChange = {setPassword}
        label={"password"}
        type={"password"}
        required={true}
        fullWidth={true}
        />
      <Link
      name={"Don't have an account ?"}
      />
      <Button
      onClick={onSubmit}
      label={"login"}
      fullWidth={true}
      />
    </Paper>
        
     
      </Container>
    </React.Fragment>
    
  
  );
}

export default Login;