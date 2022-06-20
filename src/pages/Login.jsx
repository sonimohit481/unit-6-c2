import React, { useState, useContext } from "react";
// import {useNavigator} 
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const hadleLogin = ({email,password}) =>{
    const payload ={
     email: email,password:password
    }
    fetch(`https://requres.in/api/login`,{
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "content-type":"application/json"
      }
    })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }
  return <div>
  <label>Email:</label>
  <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
  <br />
  <label>Password:</label>
  <input type="text" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
  <button onClick={hadleLogin(email,password)}>Login</button>
  </div>;
};

export default Login;
