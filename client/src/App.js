//import logo from './logo.svg';
import React from 'react';
// import './App.css';
import '../src/assets/scss/main.scss'
import { BrowserRouter } from 'react-router-dom';
//import Layout from './Layout/Layout';

import Login from "../src/pages/Login";
import SignUp from "../src/pages/SignUp";
import Portfolio from './pages/Portfolio/Portfolio';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import {useSelector} from "react-redux";
import Pnavbar from './components/Pnavbar/Pnavbar';

export default function App() {
  const auth = useSelector(state => state.isAuthenticated)

  return (
  <div className='main'>
      {/* <Router>
        <Pnavbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/portfolio' element={<ProtectedRoute auth={auth}/>}>
            <Route exact path='/portfolio' element={<Portfolio/>}/>
          </Route>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<SignUp/>} />
          
        </Routes>
      </Router> */}
      <Router>
          <Pnavbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signUp' element={<SignUp/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/portfolio' element={<Portfolio/>} />
          </Routes>
      </Router>
  </div>
  )
}


