import React, { useEffect } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './config';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [user, setuser] = useState()
  const [pass, setpass] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
   auth.onAuthStateChanged (function(user){
    if(user){
      console.log("Logged IN")
      navigate("/home")

    }
    else{
      console.log("logged out")

    }
   })
  },[navigate])

  function loginuser() {
    signInWithEmailAndPassword(auth, user, pass).then(() => {
      console.log("user Logged in")
      console.log(user)
      console.log(pass)
      navigate("/Home")
    }).catch(() => {
      console.log("Failed to login ")
    })
  }

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
        mb={4}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setuser(e.target.value)}

        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e) => setpass(e.target.value)}

        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={loginuser}

        >
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
