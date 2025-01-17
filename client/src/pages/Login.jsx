import React from "react";
import {ToastContainer} from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSucces } from "../util";


function Login() {

  const [loginInfo, setLoginInfo] = useState({
    name: '',
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(name,value);
    const copyLoginInfo = {...loginInfo};
    copyLoginInfo[name] =value;
    setLoginInfo(copyLoginInfo);
  }
  const handleLogin = async (e) => {
    e.preventDefault();
    const {  email, password } = loginInfo;
  
    if ( !email || !password) {
      return handleError(" email, and password are required!");
    }
    console.log("Sending login request with:", { email, password });
  
    try {
      const url = "http://localhost:8001/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
  
      if (!response.ok) {
        console.log("Error response:", data);
        throw new Error(data.message || "Failed to LOGIN");
      }
  
      const {success, message,jwtToken, name, error} = data;
      if(success){
        handleSucces(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(()=> {
          navigate('/')
        }, 1000)
      
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
      console.log("Login successful", data);
      // Handle success logic here (e.g., redirect, show success message)
    } catch (error) {
      handleError(error.message);
    }
  };
  


  return (
    <div className="container">
      <h1>Login</h1>
      <form action="" onSubmit={handleLogin}>
         
        <div>
          <label htmlFor="email">Email</label>
          <input 
          onChange={handleChange}
          type="email" 
          name="email"  
          placeholder="Enter email"
          value={loginInfo.email}  />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handleChange}
          type="password" 
          name="password"  
          placeholder="Enter password"
          value={loginInfo.password}  />
        </div>
        <button>Signup</button>
        <span>Don't have an account ? 
          <Link to ="/Signup"> Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
