import {Box, Paper, TextField, Button, Typography, Link, Snackbar, Alert}from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import global from "../styles/global";
import Head from "next/dist/shared/lib/head";
const style = {
  linkStyle:{
    cursor:"pointer",
    color:"primary.main"
  },
};
export default function SignIn() {
  const router = useRouter();

  const initialState={
    email:"",
    password:"",
  };
  const [state, setState] = useState(initialState);

  const messageInitialState= {
    text: "",
    severity: ""
  }
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const gotoRegister = ()=>{
    router.push("/register")
  }
  const handleChange= (prop) => (e) =>{
    setState(prevItem => ({
      ...prevItem, 
      [prop]: e.target.value,
    }));
  }
  const signIn = () => {
    const admin = "email@email.com";
    const password = "admin123";
    

    if(state.email == admin && state.password == password){
      setMessage({
        text: "Logged in successful",
        severity: "success"
      });
      setOpen(true)
    }
    else{
      setMessage({
        text: "Wrong email or password",
        severity: "error"
      });
      setOpen(true)
    }
  }
  const handleClose = () =>{
    setOpen(false);
  }
  return (
    <Box sx={{width:"100vw", height: "100vh", display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <Head>
        <title>
          Sign in
        </title>
      </Head>
      <Box>
        <Typography variant="h5">Reskyut</Typography>
      </Box>
      <Paper elevation={3} sx={{padding:"24px", display:"flex", flexDirection:"column", marginTop:"12px", width: "20vw"}}>
        <TextField label="Email Address" type="email" name="email" onChange={handleChange("email")}/>
        <TextField label="Password" name="password" type="password" sx={{marginTop:"12px"}} onChange={handleChange("password")} />
        <Button variant="contained" sx={{...global.button1, marginTop:"12px"}} onClick={signIn} color="primary">
          Sign In
          </Button>
          <Box sx={{display:"flex", justifyContent: "center", marginTop:"12px"}}>
         </Box>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        message={message.text}
        severity={message.severity}
        autoHideDuration={3000}
      >
        <Alert
        onClose={handleClose}
        message={message.text}
        severity={message.severity}
        sx={{ width:"100%"}}
        >
          {message.text}
        </Alert>
        </Snackbar>
    </Box>
  );
}
