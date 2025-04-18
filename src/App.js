import React from "react";
import './App.css';
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";

const App =()=>{ // return should have only one div but you can create n no.of inner divs
  return (
    <div >
      <Router>
        <Routes>
          <Route  path='/' element={<SignUp/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App