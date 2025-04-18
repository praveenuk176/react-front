import React from "react";
import './SignUp.css';
import {useNavigate}from 'react-router-dom';


const SignUp =()=>{ // return should have only one div but you can create n no.of inner divs
  const navigate=useNavigate();
  return (
    <div id="signup">
      <div >
        <h1>Signup</h1>
        <form >
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br /><br />

            <label for="email">Email:</label><br />
            <input type="email" id="email" name="email" required /><br /><br />

            <label for="mobile">Mobile:</label><br />
            <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" required /><br /><br />

            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" required /><br /><br />

            <button type="submit" onClick={()=>{
              navigate('/login')
            }}>Submit</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp