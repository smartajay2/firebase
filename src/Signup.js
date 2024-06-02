import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from './config';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const [user,setuser]=useState()
  const[pass,setpass]=useState()
  
  const navigate=useNavigate()

 function signupuser(){
   createUserWithEmailAndPassword(auth,user,pass).then(()=>{
    console.log("User Registered")

    navigate("/Login")
    console.log(user)
    console.log(pass)
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
        Signup
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e)=>setuser(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={(e)=>setpass(e.target.value)}

        />
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          sx={{ mt: 2 }}
          onClick={signupuser}
        >
          Signup
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
