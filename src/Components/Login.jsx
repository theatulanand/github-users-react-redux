import { Button, TextField } from '@mui/material';
import React from 'react'
import {authContext} from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
    const {handleLogin , isAuth} = React.useContext(authContext);
    const [email,setEmail] = React.useState("");
    const [pass,setPass] = React.useState("");
    console.log(isAuth);

  return (
    <>
      <div style={{margin: "auto", marginTop:"20px", width:"30%", textAlign: "center"}}>
      <TextField
          id="outlined-email-input"
          label="Email"
          type="text"
          autoComplete="current-password"
          onChange={(e)=>setEmail(e.target.value)}
        /><br/><br/>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>setPass(e.target.value)}
        /><br/><br/><br/>
        <Button onClick={()=>{handleLogin(email,pass)}} variant="contained">Login</Button><br/><br/>
        {isAuth ? <Link to= "/"><Button variant="contained">Go To Home</Button></Link>:""}
      </div>
    </>
  )
}