import React , {useState} from  'react';
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

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password1 || !password2){
      alert("Please provide all the data")
    }
    if(password1 !== password2){
      // show an alert showing password didn't matched
      
    }
    else{
        //write the login for handle the submission and clean the data
      
    }
  }

  return (
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Heading name={"Sign-Up"}/>
      
      <Paper className={classes.root}>
     <InputField
     value ={email}
     onChange = {setEmail}
     label={"email"}
     type={"email"}
     required={true}
     fullWidth={true}
     />

    <InputField
        value = {password1}
        onChange = {setPassword1}
        label={"password"}
        type={"password"}
        required={true}
        fullWidth={true}
        />
        <InputField
        value = {password2}
        onChange = {setPassword2}
        label={"Confirm-password"}
        type={"password"}
        required={true}
        fullWidth={true}
        />
      <Link
      name={"Already have an account ?"}
      />
      <Button
      onClick = {onSubmit}
      label={"login"}
      fullWidth={true}
      />
    </Paper>
        
     
      </Container>
    </React.Fragment>
    
  
  );
}


export default SignUp;