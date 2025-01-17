import React from "react";
import {ToastContainer} from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSucces } from "../util";


function Signup() {

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email:'',
    password:''
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name,value} = e.target;
    console.log(name,value);
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name] =value;
    setSignupInfo(copySignupInfo);
  }
  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
  
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required!");
    }
  
    try {
      const url = "https://deploye-auth-mern-app-api.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
  
      if (!response.ok) {
        throw new Error("Failed to signup");
      }
  
      const data = await response.json();
      const {success, message,error} = data;
      if(success){
        handleSucces(message);
        setTimeout(()=> {
          navigate('/login')
        }, 1000)
      
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
      console.log("Signup successful", data);
      // Handle success logic here (e.g., redirect, show success message)
    } catch (error) {
      handleError(error.message);
    }
  };
  


  return (
    <div className="container">
      <h1>Signup</h1>
      <form action="" onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          onChange={handleChange}
          type="text" 
          name="name" 
          autoFocus 
          placeholder="Enter Name"
          value={signupInfo.name} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          onChange={handleChange}
          type="email" 
          name="email"  
          placeholder="Enter email"
          value={signupInfo.email}  />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          onChange={handleChange}
          type="password" 
          name="password"  
          placeholder="Enter password"
          value={signupInfo.password}  />
        </div>
        <button>Signup</button>
        <span>Already have an account ? 
          <Link to ="/Login"> Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
