import React from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

const Login =()=>{ // return should have only one div but you can create n no.of inner divs

  const navigate = useNavigate();
  return (
    <div id="login">
        <h1>Login</h1>
      <form>
        <label for="username">Username:</label><br />
        <input type="text" id="username" name="username" required /><br /><br />

        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <button type="submit" onClick={()=>{
          navigate('/home')
        }}>Login</button>
      </form>
    </div>
  )
}

export default Login